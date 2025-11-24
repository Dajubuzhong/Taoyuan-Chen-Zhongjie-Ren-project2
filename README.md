# Sudoku React App – Project 2

Live Website: https://dajubuzhong.github.io/Taoyuan-Chen-Zhongjie-Ren-project2/

GitHub Repository: https://github.com/Dajubuzhong/Taoyuan-Chen-Zhongjie-Ren-project2

Collaborator: Zhongjie Ren (https://github.com/LorenzZR)

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

Link:  
https://taoyuan-chen-zhongjie-ren-project2.onrender.com/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Assignment Writeup

## What were some challenges you faced while making this app?

One big challenge in this project was managing state across multiple components while keeping the Sudoku board responsive and interactive. Implementing editable and non-editable cells with validation also required very careful coordination between the Context state and the board rendering logic. In addition, generating a new puzzle on navigation while supporting reset functionality and a running timer created several edge-case bugs that required debugging, which takes loads of time.

## Given more time, what additional features, functional or design changes would you make?

If I had more time, I'd add a more advanced puzzle generation algorithm with guaranteed unique solutions and difficulty levels. I'd also improve the UI by adding animations, sound effects, and a more fancy mobile layout. Finally, I'd expand the high score page to use real user data and store game results in a backend database.

## What assumptions did you make while working on this assignment?

While building this project, I assumed that the Sudoku didn't have to be uniquely solvable, only valid and playable. I also assumed that user authentication did not need to function, since the login and register pages were explicitly stated to be mocked. For styling, I assumed that simple CSS and consistent layout met the expectations as long as the pages remained responsive. 

## How long did this assignment take to complete? (may less than a paragraph in length)

About 30-35 hours in total.
