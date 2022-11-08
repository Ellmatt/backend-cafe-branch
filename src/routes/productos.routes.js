import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto")
        // para validar que el campo no este vacio
        .notEmpty()
        // mensaje por si esta vacio
        .withMessage("El nombre de un producto es un dato obligatorio")
        .isLength({ min: 2, max: 10 })
        .withMessage(
          "El nombre del producto debe tener entre 2 y 50 caracteres"
        ),
      check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio")
        .isNumeric()
        .withMessage("el precio debe ser un numero")
        .custom((value) => {
          // aqui poner la logica que nos interes
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            // crear nuevo error
            throw new Error("el Precio debe estar entre 1 y 10000");
          }
        }),
      check("imagen")
        .notEmpty()
        .withMessage("la imagen es un dato obligatorio")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("debe enviar una URL valida"),
      check("categoria")
        .notEmpty()
        .withMessage("la categoria es un dato obligatorio")
        .isIn(["bebida caliente", "bebida fria", "dulce", "salado"])
        .withMessage("La categoria debe ser correcta"),
    ],
    crearProducto
  );

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);

export default router;

