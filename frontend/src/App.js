import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';
import CreateNewArticleScreen from './screens/CreateNewArticleScreen';
import NotFound from './screens/NotFound';
import PersonalDataScreen from './screens/PersonalDataScreen';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import ArticlesInnerRouter from './innerRouters/ArticlesInnerRouter';
import LoginAndRegistrationInnerRouter from './innerRouters/LoginAndRegistrationInnerRouter';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path='/' element={< WelcomeScreen />}></Route>
          <Route path='/about' element={<AboutScreen />}></Route>
          <Route path='/articles/*' element={<ArticlesInnerRouter />}></Route>
          <Route path='/create-new-article' element={<CreateNewArticleScreen />}></Route>
          <Route path='/personal' element={<PersonalDataScreen />}></Route>
          <Route path='/login-registration/*' element={<LoginAndRegistrationInnerRouter />}></Route>
          <Route path='*' element={< NotFound />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
