import mongoose from "mongoose";
const { Schema, model } = mongoose;

const imageSchema = new Schema({
  // originalname: { type: String, required: true },
  // mimetype: { type: String, required: true },
  // filename: { type: String, required: true },
  //scr: { type: String, required: true },
  // size: { type: Number, required: true },
  img: { contentType: String },
});

const image = model("image", imageSchema);

export default image;
