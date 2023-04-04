import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/login.jsx";
import Homepage from "./pages/homepage.jsx";
const App = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login token={token} setToken={setToken} setUser={setUser} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
