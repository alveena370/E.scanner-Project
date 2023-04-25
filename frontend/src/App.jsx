import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/login.jsx";
import Homepage from "./pages/homepage.jsx";

import Video from "./pages/video.jsx";
import Chat from "./pages/chat.jsx";
import Position from "./pages/position.jsx";
import "./App.css";
import Camera from "./pages/camera.jsx";

const App = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login token={token} setToken={setToken} setUser={setUser} />
          }
        />
        <Route path="/camera" element={<Camera />} />
        <Route path="/video" element={<Video />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/position" element={<Chat />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
