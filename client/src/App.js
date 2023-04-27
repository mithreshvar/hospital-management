import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'

import Prelogin from './components/Prelogin';
import Login from './components/Login';
import Signup from "./components/Signup";
import Student from "./components/users/Student";
import Doctor from "./components/users/Doctor";

//  "proxy": "http://localhost:8080",

function App() {

  const { user } = useAuthContext(); // !!!! need user type

  return (

    <Routes>
      <Route path="/*" element={!user ? <Prelogin /> : (user.type === 'Student' && <Student />) || (user.type === 'Doctor' && <Doctor />) || (user.type === 'Teacher' && <div>Teacher</div>)} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
    </Routes>

  );
}

export default App;
