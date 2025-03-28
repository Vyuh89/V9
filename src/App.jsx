import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet, useLocation, Navigate } from 'react-router-dom';
import { App as CapacitorApp } from '@capacitor/app';
import { Dialog } from '@capacitor/dialog';
import { auth } from './components/firebase';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import './App.css';
import SideHeader from './components/SideHeader';
import Board from './components/Board';
import Bond from './components/Bond';
import Dharma from './components/Dharma';
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

const LoginPage = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to the App</h2>
      <p>Please sign in with Google to continue</p>
      <GoogleButton onClick={signInWithGoogle} />
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBackButton = async ({ canGoBack }) => {
      if (location.pathname !== '/' && location.pathname !== '/login') {
        navigate(-1);
      } else if (location.pathname === '/') {
        const { value } = await Dialog.confirm({
          title: 'Exit App',
          message: 'Do you want to close the app?',
          okButtonTitle: 'Yes',
          cancelButtonTitle: 'No',
        });
        
        if (value) {
          CapacitorApp.exitApp();
        }
      }
    };

    const backButtonHandler = CapacitorApp.addListener('backButton', handleBackButton);

    return () => {
      backButtonHandler.remove();
    };
  }, [navigate, location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="" element={
          <ProtectedRoute>
            <SideHeader />
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Home />} />
          <Route path="play" element={<Play />} />
          <Route path="playOnline" element={<OnlinePlay />} />
          <Route path="board" element={<Board />} />
          <Route path="bond" element={<Bond />} />
          <Route path="dharma" element={<Dharma />} />
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