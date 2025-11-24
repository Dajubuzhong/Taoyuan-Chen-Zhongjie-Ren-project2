import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SudokuProvider } from "./context/SudokuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SudokuProvider>
        <App />
      </SudokuProvider>
    </BrowserRouter>
  </React.StrictMode>
);