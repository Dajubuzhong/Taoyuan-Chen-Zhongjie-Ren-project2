import React, { createContext, useContext, useReducer } from "react";

export const SudokuStateContext = createContext(null);
export const SudokuDispatchContext = createContext(null);

export const ACTIONS = {
  START_NEW_GAME: "START_NEW_GAME",
  RESET_GAME: "RESET_GAME",
  UPDATE_CELL: "UPDATE_CELL",
  TICK: "TICK",
};

const initialState = {
  mode: null,
  size: 0,
  board: [],
  initialBoard: [],
  solution: [],
  prefilled: new Set(),
  errors: new Set(),
  status: "idle",
  elapsedSeconds: 0,
};

function clone2D(arr) {
  return arr.map((row) => row.slice());
}

function getBaseSolution(size) {
  if (size === 6) {
    const base = [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 6, 1, 2, 3],
      [2, 3, 4, 5, 6, 1],
      [5, 6, 1, 2, 3, 4],
      [3, 4, 5, 6, 1, 2],
      [6, 1, 2, 3, 4, 5],
    ];
    return base.map((row) => row.map((n) => String(n)));
  }

  const base = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ];
  return base.map((row) => row.map((n) => String(n)));
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function applyDigitPermutation(solution) {
  const size = solution.length;
  const digits =
    size === 6
      ? ["1", "2", "3", "4", "5", "6"]
      : ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const perm = shuffleArray(digits);
  const map = {};
  digits.forEach((d, idx) => {
    map[d] = perm[idx];
  });

  return solution.map((row) =>
    row.map((cell) => (cell === "" ? "" : map[cell] || cell))
  );
}

function generateSolution(size) {
  const base = getBaseSolution(size);
  return applyDigitPermutation(base);
}

function createPuzzleFromSolution(solution, mode) {
  const size = solution.length;
  const totalCells = size * size;

  let filled;
  if (mode === "easy") {
    filled = Math.floor(totalCells * 0.5);
  } else {
    filled = 28 + Math.floor(Math.random() * 3);
  }

  const indices = Array.from({ length: totalCells }, (_, i) => i);
  const shuffled = shuffleArray(indices);
  const keep = new Set(shuffled.slice(0, filled));

  const puzzle = [];
  const prefilled = new Set();

  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) {
      const idx = r * size + c;
      if (keep.has(idx)) {
        row.push(solution[r][c]);
        prefilled.add(idx);
      } else {
        row.push("");
      }
    }
    puzzle.push(row);
  }

  return { puzzle, prefilled };
}

function computeErrors(board, prefilled) {
  const size = board.length;
  const errors = new Set();
  if (!size) return errors;

  const rowsPerBlock = size === 6 ? 2 : 3;
  const colsPerBlock = 3;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const val = board[r][c];
      if (!val) continue;

      const idx = r * size + c;

      for (let cc = 0; cc < size; cc++) {
        if (cc === c) continue;
        if (board[r][cc] === val) {
          const otherIdx = r * size + cc;
          if (!prefilled.has(idx)) errors.add(idx);
          if (!prefilled.has(otherIdx)) errors.add(otherIdx);
        }
      }

      for (let rr = 0; rr < size; rr++) {
        if (rr === r) continue;
        if (board[rr][c] === val) {
          const otherIdx = rr * size + c;
          if (!prefilled.has(idx)) errors.add(idx);
          if (!prefilled.has(otherIdx)) errors.add(otherIdx);
        }
      }

      const br = Math.floor(r / rowsPerBlock) * rowsPerBlock;
      const bc = Math.floor(c / colsPerBlock) * colsPerBlock;
      for (let rr = br; rr < br + rowsPerBlock; rr++) {
        for (let cc = bc; cc < bc + colsPerBlock; cc++) {
          if (rr === r && cc === c) continue;
          if (board[rr][cc] === val) {
            const otherIdx = rr * size + cc;
            if (!prefilled.has(idx)) errors.add(idx);
            if (!prefilled.has(otherIdx)) errors.add(otherIdx);
          }
        }
      }
    }
  }

  return errors;
}

function isComplete(board, prefilled) {
  const size = board.length;
  if (!size) return false;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!board[r][c]) {
        return false;
      }
    }
  }

  const errors = computeErrors(board, prefilled);
  return errors.size === 0;
}

function sudokuReducer(state, action) {
  switch (action.type) {
    case ACTIONS.START_NEW_GAME: {
      const mode = action.payload.mode;
      const size = mode === "easy" ? 6 : 9;

      const solution = generateSolution(size);
      const { puzzle, prefilled } = createPuzzleFromSolution(solution, mode);

      return {
        ...state,
        mode,
        size,
        board: puzzle,
        initialBoard: clone2D(puzzle),
        solution,
        prefilled,
        errors: new Set(),
        status: "playing",
        elapsedSeconds: 0,
      };
    }

    case ACTIONS.RESET_GAME: {
      if (!state.initialBoard.length) return state;
      return {
        ...state,
        board: clone2D(state.initialBoard),
        errors: new Set(),
        status: "playing",
        elapsedSeconds: 0,
      };
    }

    case ACTIONS.UPDATE_CELL: {
      if (state.status === "completed") return state;

      const { row, col, value } = action.payload;
      const size = state.size;
      const idx = row * size + col;

      if (state.prefilled.has(idx)) {
        return state;
      }

      const trimmed = value.trim();
      let newVal = "";

      if (trimmed !== "") {
        if (!/^[0-9]$/.test(trimmed)) {
          return state;
        }

        const num = parseInt(trimmed, 10);
        if (num < 1 || num > size) {
          return state;
        }
        newVal = String(num);
      }

      const newBoard = clone2D(state.board);
      newBoard[row][col] = newVal;

      const newErrors = computeErrors(newBoard, state.prefilled);
      const completed = isComplete(newBoard, state.prefilled);

      return {
        ...state,
        board: newBoard,
        errors: newErrors,
        status: completed ? "completed" : state.status,
      };
    }

    case ACTIONS.TICK: {
      if (state.status !== "playing") return state;
      return {
        ...state,
        elapsedSeconds: state.elapsedSeconds + 1,
      };
    }

    default:
      return state;
  }
}

export const SudokuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sudokuReducer, initialState);

  return (
    <SudokuStateContext.Provider value={state}>
      <SudokuDispatchContext.Provider value={dispatch}>
        {children}
      </SudokuDispatchContext.Provider>
    </SudokuStateContext.Provider>
  );
};

export const useSudokuState = () => {
  const ctx = useContext(SudokuStateContext);
  if (ctx === null) {
    throw new Error("useSudokuState must be used within SudokuProvider");
  }
  return ctx;
};

export const useSudokuDispatch = () => {
  const ctx = useContext(SudokuDispatchContext);
  if (ctx === null) {
    throw new Error("useSudokuDispatch must be used within SudokuProvider");
  }
  return ctx;
};