import React, { useEffect } from "react";
import Timer from "../components/Timer";
import SudokuBoard from "../components/SudokuBoard";
import { useSudokuState, useSudokuDispatch, ACTIONS } from "../context/SudokuContext";

const EasyGamePage = () => {
  const { mode } = useSudokuState();
  const dispatch = useSudokuDispatch();

  useEffect(() => {
    if (mode !== "easy") {
      dispatch({ type: ACTIONS.START_NEW_GAME, payload: { mode: "easy" } });
    }
  }, [mode, dispatch]);

  const handleNewGame = () => {
    dispatch({ type: ACTIONS.START_NEW_GAME, payload: { mode: "easy" } });
  };

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET_GAME });
  };

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="easy-game-page">
          <div className="game-container">
            <div className="game-header">
              <h1>Easy Game (6×6)</h1>
              <Timer />
            </div>

            <SudokuBoard />

            <div className="game-controls">
              <button className="control-button" onClick={handleNewGame}>New Game</button>
              <button className="control-button" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyGamePage;