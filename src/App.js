import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './comps/header';
import Navbar from "./comps/navbar";
import NoteBoard from "./comps/note-board";
import SlideMenu from "./comps/slide-menu";
import "./js/scripts";
import CheckWidth from "./comps/checkWidth";

function App() {

  const [notes, setNotes] = useState([]);
  const [columns, setColumns] = useState("");

  return (
    <div className="App">
      <Header username="Rasmus Andersson" notes={notes} setNotes={setNotes} setColumns={setColumns} />
      <Navbar setColumns={setColumns} />
      <NoteBoard notes={notes} setNotes={setNotes} columns={columns} />
      <SlideMenu />
    </div>
  );
}

export default App;
