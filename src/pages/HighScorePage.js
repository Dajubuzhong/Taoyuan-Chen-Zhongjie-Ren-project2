import React from "react";

const HighScorePage = () => {
  return (
    <div className="high-score-page">
      <div className="container">
        <div className="highscores-content">
          <h1 className="page-title">High Scores</h1>

          <table className="score-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Sudokus Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="rank-cell">
                  1
                  <span className="medal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="#FFD700"
                        stroke="#DAA520"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 6 L14 10 L18 10 L15 13 L16 17 L12 14 L8 17 L9 13 L6 10 L10 10 Z"
                        fill="#DAA520"
                      />
                    </svg>
                  </span>
                </td>
                <td>A</td>
                <td className="score-cell">342</td>
              </tr>

              <tr>
                <td className="rank-cell">
                  2
                  <span className="medal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="#C0C0C0"
                        stroke="#A8A8A8"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 6 L14 10 L18 10 L15 13 L16 17 L12 14 L8 17 L9 13 L6 10 L10 10 Z"
                        fill="#A8A8A8"
                      />
                    </svg>
                  </span>
                </td>
                <td>B</td>
                <td className="score-cell">318</td>
              </tr>

              <tr>
                <td className="rank-cell">
                  3
                  <span className="medal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="#CD7F32"
                        stroke="#B87333"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 6 L14 10 L18 10 L15 13 L16 17 L12 14 L8 17 L9 13 L6 10 L10 10 Z"
                        fill="#B87333"
                      />
                    </svg>
                  </span>
                </td>
                <td>C</td>
                <td className="score-cell">295</td>
              </tr>

              <tr>
                <td className="rank-cell">4</td>
                <td>D</td>
                <td className="score-cell">276</td>
              </tr>
              <tr>
                <td className="rank-cell">5</td>
                <td>E</td>
                <td className="score-cell">251</td>
              </tr>
              <tr>
                <td className="rank-cell">6</td>
                <td>F</td>
                <td className="score-cell">238</td>
              </tr>
              <tr>
                <td className="rank-cell">7</td>
                <td>G</td>
                <td className="score-cell">219</td>
              </tr>
              <tr>
                <td className="rank-cell">8</td>
                <td>H</td>
                <td className="score-cell">203</td>
              </tr>
              <tr>
                <td className="rank-cell">9</td>
                <td>I</td>
                <td className="score-cell">187</td>
              </tr>
              <tr>
                <td className="rank-cell">10</td>
                <td>J</td>
                <td className="score-cell">165</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HighScorePage;