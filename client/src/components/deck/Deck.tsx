import React from "react";
import { useState } from "react";
import path from "path";
import { useEffect } from "react";
import { redirect, Router, Link, Route } from "react-router-dom";
import "./Decks.styles.css";

/* 
  title: String,
  id_: String,
  author: String,
  description: String,
  tags: [String],
  */
type TDeck = {
  title: string; // Title of the deck
  _id: string; // Unique ID of the deck
  author: string; // Author of the deck
  description: string; // Description of the deck
  tags: Array<string>;
};
const Deck = () => {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");
  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();

    await fetch(`http://localhost:5000/decks`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTitle("");
  }

  useEffect(() => {
    async function getDecks() {
      const res = await fetch("http://localhost:5000/decks");
      const newDecks = await res.json();
      setDecks(newDecks);
    }
    getDecks();
  }, []);
  async function handleDeleteDeck(deckId: string) {
    await fetch(`http://localhost:5000/decks/${deckId}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }
  async function handleDeckEdit(deckId: string) {
    const res = await fetch(`http://localhost:5000/decks/${deckId}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  //onClick={() => handleDeckEdit(deck._id)}
  return (
    <div className='decks'>
      <div className='cards'>
        {decks.map((deck) => (
          <li key={deck._id}>
            <button
              className='btn-1'
              onClick={() => handleDeleteDeck(deck._id)}></button>
            {deck.title}

            <button className='btn-2'>test</button>
          </li>
        ))}
      </div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor='decks'>Deck Name: </label>
        <input
          id='deck-title'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
};

export default Deck;
