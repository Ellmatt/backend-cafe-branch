import mongoose, { Schema } from "mongoose";
const usuarioSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  password: {
    type: Number,
    // required: true,
    minLength: 1,
    maxLength: 10000,
  },
  
});


const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;