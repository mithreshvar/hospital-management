import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Prelogin from './components/Prelogin';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
    setIsUserSignedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prelogin />} />
        <Route path="/login" element={<Login onLoginSuccessful={onLoginSuccessful} />} />
        {(isUserSignedIn) ? <Route path="/home" element={<Home />} /> : <Route path="/login" element={<Login onLoginSuccessful={onLoginSuccessful} />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
