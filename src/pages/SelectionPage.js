import React from "react";
import { Link } from "react-router-dom";

const SelectionPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="content-wrapper">
          <h1 className="page-title">Select a Game</h1>

          <div className="games-list">
            <Link to="/games/normal" className="game-link">
              <div className="game-item">
                <div className="game-info">
                  <div className="game-title">Classic Sudoku Challenge</div>
                  <div className="game-author">by Taoyuan Chen</div>
                </div>
                <span className="game-difficulty difficulty-hard">Hard (9x9)</span>
              </div>
            </Link>

            <Link to="/games/normal" className="game-link">
              <div className="game-item">
                <div className="game-info">
                  <div className="game-title">Expert Brain Teaser</div>
                  <div className="game-author">by Zhongjie Ren</div>
                </div>
                <span className="game-difficulty difficulty-hard">Hard (9x9)</span>
              </div>
            </Link>

            <Link to="/games/normal" className="game-link">
              <div className="game-item">
                <div className="game-info">
                  <div className="game-title">Advanced Logic Puzzle</div>
                  <div className="game-author">by Taoyuan Chen</div>
                </div>
                <span className="game-difficulty difficulty-hard">Hard (9x9)</span>
              </div>
            </Link>

            <Link to="/games/normal" className="game-link">
              <div className="game-item">
                <div className="game-info">
                  <div className="game-title">Master&apos;s Challenge</div>
                  <div className="game-author">by Zhongjie Ren</div>
                </div>
                <span className="game-difficulty difficulty-hard">Hard (9x9)</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectionPage;
