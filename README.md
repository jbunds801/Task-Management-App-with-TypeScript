# Task Management App using React + TypeScript + Vite!

This Task Management App was created using Auth0 for secure log in functionality, and implements Context API, useState, useReducer, a custom hook, React Router, TypeScript and React Bootstrap.


## App Features:

This simple yet intuitive app provides features for users to add, edit, and delete tasks, as well as a feature to toggle the task between completed or redo! It uses bright colors and indicators for whether a task is completed or not. Simply login using your Google or GitHub credentials, and you will be directed to the dashboard where you can manage your tasks!


## Project Architecture:

* Auth folder container components for Auth0 functionality.
* Callback page to handle Auth0 errors.
* Components folder with several modular and functional components.
* Context folder containing Context API component.
* Model folder containing file for TypeScript types.
* Pages folder containing pages for which there are routes set up.
* Added a custom hook for error handling for TaskProvider.
* Bootstrap styling with minimal CSS.


## When cloning this repo / setting up this project:

Clone this repository:
  https://github.com/jbunds801/Task-Management-App-with-TypeScript.git

Dependencies need to be installed. Please run the following in your terminal:
  npm install react-router-dom react-bootstrap bootstrap @auth0/auth0-react

Once everything is installed run:
  npm run dev
in your terminal. You should be directed automatically, if not go to http://localhost:5173

## License

MIT License
