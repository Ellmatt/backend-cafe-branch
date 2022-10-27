import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const listarProductos = async (req, res) => {
  try {
    // guardar ese producto en la bd
    const listaProductos = await Producto.find();
    // find siempre devuelve un arreglo
    // responder al usuario que todo salio bien
    res.status(200).json(listaProductos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar buscar los prodictos",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    // manejar lo errores de express validator
    const errores = validationResult(req);
    // errores.isEmpty() retorna true cuendo no hay errores y false cuando hay errores
    // pregunto si hay errores
    if (!errores.isEmpty()) {
      return res.status(400).json({
        errores: errores.array(),
      });
    }
    // extraer del body los dato
    console.log(req.body);
    // agregar la validacion correspondiente

    const productoNuevo = new Producto(req.body);
    // guardar ese producto en la bd
    await productoNuevo.save();
    // responder al usuario que todo salio bien
    res.status(201).json({ mensaje: "El producto fue correctamente creado" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar agregar un producto",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    // obtener el parametro
    console.log(req.params.id);
    // peditle a la bd buscar el documento que concide con el id del parametro
    const productoBuscado = await Producto.findById(req.params.id);
    // responder con el producto encontrado
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se pudo encontrar el producto solicitado",
    });
  }
};
export const editarProducto = async (req, res) => {
  try {
    // buscar el producto por el id, luego modificar los datos con el body
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    // responder al frontend
    res.status(200).json({
      mensaje: "El producto fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error el prudcto solicitado no pudo ser modificado",
    });
  }
};
export const borrarProducto = async (req, res) => {
  try {
    // buscar un producto por id y borrar
    await Producto.findByIdAndDelete(req.params.id);
    // responder al front si pude eliminarolo
    res.status(200).json({
      mensaje: "El producto fue  correctamente eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error el prudcto solicitado no pudo ser eliminado",
    });
  }
};
