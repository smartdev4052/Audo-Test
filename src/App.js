import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import MenuBar from "./components/menubar";
import Pokemon from "./pokemon/pokemon";

function App() {
  const [pictures, setPictures] = useState([]);
  return (
    <div className="App">
      <MenuBar pictures={pictures} />
      <Routes>
        <Route path="/*" element={ <Pokemon setPictures={setPictures} /> } />
      </Routes>
    </div>
  );
}

export default App;
