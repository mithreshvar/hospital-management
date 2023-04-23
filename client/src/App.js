import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Prelogin from './components/Prelogin';
import Login from './components/Login';
import Home from './components/Home';

//  "proxy": "http://localhost:8080",

function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  const onLoginSuccessful = (userType) => {
    setUserType(userType);
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
    setIsUserSignedIn(false);
  };

  return (

    <Routes>
      <Route path="/*" element={(true) ? <Home type={"Student"} /> : <Prelogin />} />
      <Route path="/login" element={<Login onLoginSuccessful={onLoginSuccessful} />} />
    </Routes>

  );
}

export default App;
