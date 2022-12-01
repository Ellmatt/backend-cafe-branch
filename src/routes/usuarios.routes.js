import { Router } from "express";
import { check } from "express-validator";

import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers";

const router = Router();

//agregar las validaciones con express-validator
router
  .route("/")
  .get(listarUsuarios)
  .post(
    [ 
      check("email", "El email es obligatorio").isEmail(),
      check(
        "password",
        "El password debe contener 8 caracteres como minimo"
      ).isLength({ min: 8 }),
    ],
    login
  );
router
  .route("/nuevo")
  .post(
    [
      
      check("email", "El email es obligatorio").isEmail(),
      check("password", "El password debe de ser de 8 caracteres").isLength({
        min: 8,
      }),
    ],
    crearUsuario
  );

export default router;