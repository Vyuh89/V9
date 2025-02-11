import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import SideHeader from './components/SideHeader';
import Board from './components/Board';
import Bond from './components/Bond';
import Learn from './components/Learn';
import Support from './components/Support';
import About from './components/About';
import UserAgreement from './components/UserAgreement';
import PrivacyPolicy from './components/PrivacyPolicy';
import Partners from './components/Partners';
import OnlinePlay from './components/OnlinePlay';
import SignUp from './components/SignUp';
import FindAPlayer from './components/FindAPlayer';
import Play from './components/Play';
import Home from './components/Home';


const Layout = () => {
  return (
    <div className="page-wrapper d-flex flex-col">
      <Outlet />
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <SideHeader />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="play" element={<Play />} />
          <Route path="playOnline" element={<OnlinePlay />} />
          <Route path="board" element={<Board />} />
          <Route path="bond" element={<Bond />} />
          <Route path="learn" element={<Learn />} />
          <Route path="support" element={<Support />} />
          <Route path="about" element={<About />} />
          <Route path="userAgreement" element={<UserAgreement />} />
          <Route path="privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="partners" element={<Partners />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="findaplayer" element={<FindAPlayer />} />
        </Route>
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router basename="/">
    <App />
  </Router>
);

export default AppWrapper;
