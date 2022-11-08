import mongoose, { Schema } from "mongoose";
const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  precio: {
    type: Number,
    required: true,
    minLength: 1,
    maxLength: 10000,
  },
  imagen: {
    type: String,
    required: true,
    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
  },
  categoria: {
    type: String,
    required: true,
  },
});


const Producto = mongoose.model("producto", productoSchema);

export default Producto;
