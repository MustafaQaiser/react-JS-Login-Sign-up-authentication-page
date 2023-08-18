import React, { useEffect } from "react";
import "./index.css";
import Navbar1 from "./components/Navbar1";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/signup";
import FileChanger from "./components/FileChanger";
import Home from './components/Home'
function App() {
  
  return (
    <>
    <Navbar1/>
      <Routes>
      
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="/filechanger" element={<FileChanger/>} />
      </Routes>
    </>
  );
}

export default App;
