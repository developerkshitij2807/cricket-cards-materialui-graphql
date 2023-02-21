import mongoose from "mongoose";
const { Schema } = mongoose;

const playerSchema = new Schema({
  photoUrl: "",
  name: "",
  age: "",
  team: "",
  matches: "",
});
module.exports =
  mongoose.models.Player || mongoose.model("Player", playerSchema);
