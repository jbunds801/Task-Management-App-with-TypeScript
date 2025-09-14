import React from 'react';
import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
//import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationGuard from './auth/AuthenticationGuard';
import Tasks from './pages/Tasks';
import { TaskProvider } from './context/TaskContext';
//import Test from './components/test';


const App: React.FC = () => {

  //const { isLoading } = useAuth0();

  //if (isLoading) return (<div>Loading... </div>)

  return (
    <>
      <TaskProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path="/tasks"
            element={<AuthenticationGuard component={Tasks} />}
          />
        </Routes>
        {/* <Test/> */}
      </TaskProvider>
    </>
  );
}

export default App
