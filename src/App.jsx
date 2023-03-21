import { Routes, Route } from "react-router-dom";

import Typography from "@mui/material/Typography";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import PopUpAlert from "./components/modals/PopUpAlert";

function App() {
  return (
    <>
      <Typography variant="h4" color="initial">
        Learn React
      </Typography>
      <PopUpAlert />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
