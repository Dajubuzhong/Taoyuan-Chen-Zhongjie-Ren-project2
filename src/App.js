import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SelectionPage from "./pages/SelectionPage";
import EasyGamePage from "./pages/EasyGamePage";
import NormalGamePage from "./pages/NormalGamePage";
import RulesPage from "./pages/RulesPage";
import HighScorePage from "./pages/HighScorePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<SelectionPage />} />
          <Route path="/games/easy" element={<EasyGamePage />} />
          <Route path="/games/normal" element={<NormalGamePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/scores" element={<HighScorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </>
  );
}

export default App;