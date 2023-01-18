import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";
import cors from "cors";

import { config } from "dotenv";
// env
config();
// port number
const PORT = 5000;
// app

const app = express();
// middleware
app.use(cors());
app.use(express.json());

app.get("/decks", async (req: Request, res: Response) => {
  const decks = await Deck.find(); // add search criteria and user selector here
  res.json(decks);
});
app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);

  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

const db = mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Connected to ${PORT}`);
  app.listen(PORT);
});
