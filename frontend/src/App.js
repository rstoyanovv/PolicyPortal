import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import NotFound from './screens/NotFound';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path='/' element={< WelcomeScreen />}></Route>
          <Route path='*' element={< NotFound />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
