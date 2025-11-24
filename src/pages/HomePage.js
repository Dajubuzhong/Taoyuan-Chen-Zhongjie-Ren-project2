import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <div className="content-wrapper">
          <section className="hero-section">
            <h1 className="hero-title">SUDOKU</h1>
            <p className="hero-subtitle">Challenge Your Mind, Master the Grid</p>

            <div className="quick-start">
              <Link to="/games/easy" className="game-link">
                <img
                  src="/images/easy-game-icon.svg"
                  alt="Easy Mode 6x6 Sudoku Icon"
                  className="game-icon"
                />
                <div className="game-link-grid">6×6</div>
                <h3 className="game-link-title">Easy Mode</h3>
                <p className="game-link-desc">Perfect for beginners</p>
              </Link>

              <Link to="/games/normal" className="game-link">
                <img
                  src="/images/hard-game-icon.svg"
                  alt="Hard Mode 9x9 Sudoku Icon"
                  className="game-icon"
                />
                <div className="game-link-grid">9×9</div>
                <h3 className="game-link-title">Hard Mode</h3>
                <p className="game-link-desc">Ultimate challenge</p>
              </Link>
            </div>

            <div className="stats-section">
              <div className="stat-box">
                <div className="stat-number">1,247</div>
                <div className="stat-label">Games Played</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">342</div>
                <div className="stat-label">Top Player Score</div>
              </div>
            </div>
          </section>

          <section className="features-section">
            <h2 className="section-title">Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Multiple Difficulty Levels</h3>
                <p>Choose from easy 6×6 grids for quick games or challenging 9×9 puzzles for the ultimate brain workout</p>
              </div>

              <div className="feature-card">
                <h3>Track Your Time</h3>
                <p>Every game is timed so you can track your progress, beat your personal best, and improve your skills</p>
              </div>

              <div className="feature-card">
                <h3>High Scores Leaderboard</h3>
                <p>Compete with players worldwide and see how you rank among the best Sudoku solvers</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;