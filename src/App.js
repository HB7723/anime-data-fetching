import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "./components/Anime/Anime";
import AnimeName from "./components/AnimeName/AnimeName";
import AnimeFact from "./components/AnimeFact/AnimeFact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Anime />} />
          <Route path="/:anime_name" element={<AnimeName />} />
          <Route path="/:anime_name/:anime_fact" element={<AnimeFact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
