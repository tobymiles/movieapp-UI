import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./layout/Nav";
import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";
import Allmovies from "./pages/Allmovies";
import CreateMovie from "./pages/Createmovie";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allmovies' element={<Allmovies />} />
        <Route path='/createmovie' element={<CreateMovie />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
