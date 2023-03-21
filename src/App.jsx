import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import PopUpAlert from "./components/modals/PopUpAlert";
import { useSelector } from "react-redux";
import Home from "./components/pages/Home";
import { useEffect } from "react";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <>
      <PopUpAlert />
      <Routes>
        {isAuthenticated && <Route path="/" element={<Home />} />}
        {!isAuthenticated && <Route path="/" element={<Navigate replace to="/signup" />} />}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
