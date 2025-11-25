# Sudoku React App – Project 2

Live Website: https://taoyuan-chen-zhongjie-ren-project2.onrender.com/

GitHub Repository: https://github.com/Dajubuzhong/Taoyuan-Chen-Zhongjie-Ren-project2

Video Demo: https://drive.google.com/file/d/15OQyrL6NqrvZ4dQz5Gm8D_s677G8jZvQ/view?usp=sharing


## Overview

This project is a single-player Sudoku game built using **React**, **React Router**, and the **Context API** for state management. The app includes both a 6×6 Easy mode and a 9×9 Normal mode, each generating a new puzzle whenever the user visits the page. Once the puzzle is solved correctly, the board locks and a **congratulations message** appears.


## Pages

1. Home - Welcome page with game mode selection
2. Selection - List of available Sudoku games
3. Normal Game - 9×9 Sudoku grid with 28–30 pre-filled cells
4. Easy Game - 6×6 Sudoku grid with ~50% pre-filled
5. Rules - Game instructions and credits
6. High Score - Leaderboard with mock data
7. Login - User login form
8. Register - New user registration form


## Deployment

This project is deployed on Render.

## Authors

This README and the Sudoku project were collaboratively created by:
· Taoyuan Chen (https://github.com/Dajubuzhong)
· Zhongjie Ren (https://github.com/LorenzZR)


# Assignment Writeup

## What were some challenges you faced while making this app?

One big challenge in this project was managing state across multiple components while keeping the Sudoku board responsive and interactive. Implementing editable and non-editable cells with validation also required very careful coordination between the Context state and the board rendering logic. In addition, generating a new puzzle on navigation while supporting reset functionality and a running timer created several edge-case bugs that required debugging, which takes loads of time.

## Given more time, what additional features, functional or design changes would you make?

If I had more time, I'd add a more advanced puzzle generation algorithm with guaranteed unique solutions and difficulty levels. I'd also improve the UI by adding animations, sound effects, and a more fancy mobile layout. Finally, I'd expand the high score page to use real user data and store game results in a backend database.

## What assumptions did you make while working on this assignment?

While building this project, I assumed that the Sudoku didn't have to be uniquely solvable, only valid and playable. I also assumed that user authentication did not need to function, since the login and register pages were explicitly stated to be mocked. For styling, I assumed that simple CSS and consistent layout met the expectations as long as the pages remained responsive. 

## How long did this assignment take to complete? (may less than a paragraph in length)

About 30-35 hours in total.
