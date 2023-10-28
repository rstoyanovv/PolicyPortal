import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path='/' element={< WelcomeScreen />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
