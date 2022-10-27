import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";

const router = Router();

router.route("/productos").get(listarProductos).post(crearProducto);

router.route('/productos/:id')
.get(obtenerProducto)
.put(editarProducto)
.delete(borrarProducto)

export default router;

// app.get('/productos', (req, res)=>{
//     res.send('aqui tengop que retornar un arreglo de productos')
//     })
//     app.post('/productos2', (req, res)=>{
//     res.send('aqui devolvemos un producto')
//     })
//     app.get('/productos2', (req, res)=>{
//     res.send('aqui devolvemos un producto')
//     })
