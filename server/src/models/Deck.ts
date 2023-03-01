import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  title: String,
  id_: String,
  author: String,
  description: String,
  tags: [String],
});

const DeckModel = mongoose.model("Deck", DeckSchema);

export default DeckModel;
