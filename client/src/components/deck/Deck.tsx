import React from "react";
import { useState } from "react";
import path from "path";
import { useEffect } from "react";
import "./Decks.styles.css";

type TDeck = {
  title: string; // Title of the deck
  _id: string; // Unique ID of the deck
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

  return (
    <div className='decks'>
      <div className='cards'>
        {decks.map((deck) => (
          <li key={deck._id}>{deck.title}</li>
        ))}
      </div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor='decks'>Deck Name: </label>
        <input
          id='deck-title'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
            console.log(e.target.value);
          }}
          value={title}
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
};

export default Deck;
