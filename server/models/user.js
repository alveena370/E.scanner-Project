import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 20 },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is Already There.."],
    max: 10,
  },
  password: { type: String, required: true, minLength: 8 },
});

const User = model("user", userSchema);

export default User;
