import mongoose from "mongoose";
const { Schema } = mongoose;

const playerSchema = new Schema({
  photoUrl: "",
  name: "",
  age: "",
  team: "",
  matches: "",
});

export default mongoose.model("Player", playerSchema);
