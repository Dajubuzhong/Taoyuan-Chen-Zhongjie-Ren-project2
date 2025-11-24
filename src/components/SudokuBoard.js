import React from "react";
import { useSudokuState, useSudokuDispatch, ACTIONS } from "../context/SudokuContext";
import SudokuCell from "./SudokuCell";

const SudokuBoard = () => {
  const { board, size, prefilled, errors, status } = useSudokuState();
  const dispatch = useSudokuDispatch();

  if (!board || !board.length) {
    return <div className="sudoku-grid"> Loading... </div>;
  }

  const handleCellChange = (row, col, newValue) => {
    dispatch({
      type: ACTIONS.UPDATE_CELL,
      payload: { row, col, value: newValue },
    });
  };

  const isCompleted = status === "completed";

  return (
    <>
      <div className="sudoku-grid">
        {board.map((row, rIdx) =>
          row.map((val, cIdx) => {
            const index = rIdx * size + cIdx;
            const isPrefilled = prefilled.has(index);
            const isIncorrect = errors.has(index);

            return (
              <SudokuCell
                key={`${rIdx}-${cIdx}`}
                value={val}
                isPrefilled={isPrefilled}
                isIncorrect={isIncorrect}
                isCompleted={isCompleted}
                onChange={(v) => handleCellChange(rIdx, cIdx, v)}
              />
            );
          })
        )}
      </div>

      {isCompleted && (
        <div className="sudoku-congrats">
          Congratulations! You solved this puzzle.
        </div>
      )}
    </>
  );
};

export default SudokuBoard;