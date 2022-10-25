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
        mensaje: 'Error al intentar buscar los prodictos'
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
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
