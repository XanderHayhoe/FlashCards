import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Deck from "./components/deck/Deck";
import path from "path";
import { Routes, Route } from "react-router-dom";
import EditDeck from "./components/EditDeck/EditDeck";
import type TDeck from "./components/deck/Deck";
type TDeck = {
  title: string; // Title of the deck
  _id: string; // Unique ID of the deck
  author: string; // Author of the deck
  description: string; // Description of the deck
  tags: Array<string>;
};
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Deck />} />
      </Routes>
    </div>
  );
}

export default App;
