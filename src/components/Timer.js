import React, { useEffect } from "react";
import { useSudokuState, useSudokuDispatch, ACTIONS } from "../context/SudokuContext";

const Timer = () => {
  const { elapsedSeconds, status } = useSudokuState();
  const dispatch = useSudokuDispatch();

  useEffect(() => {
    if (status !== "playing") return;

    const id = setInterval(() => {
      dispatch({ type: ACTIONS.TICK });
    }, 1000);

    return () => clearInterval(id);
  }, [status, dispatch]);

  const secondsTotal = elapsedSeconds || 0;
  const minutes = String(Math.floor(secondsTotal / 60)).padStart(2, "0");
  const seconds = String(secondsTotal % 60).padStart(2, "0");

  return (
    <div className="timer-display">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <span>
        {minutes}:{seconds}
      </span>
    </div>
  );
};

export default Timer;