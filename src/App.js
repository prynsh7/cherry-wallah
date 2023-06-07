import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  console.log('App', process.env.REACT_APP_ENVIRONMENT);
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
