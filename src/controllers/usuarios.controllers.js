import Usuario from "../models/usuario";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  try {
    // manejar los errores de la validacion
    const errors = validationResult(req);
    // errors.isEmpty() devuelve false si hay errores
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //verificar si existe un mail como el recibido
    const { email, password } = req.body;

    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    if (!usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "Correo o password invalido - correo",
      });
    }
    if (password !== usuario.password) {
      return res.status(400).json({
        mensaje: "Correo o password invalido - password",
      });
    }

    //verificar si el password corresponde con el pass encriptado en mi BD
    const passwordValido = bcrypt.compareSync(password, usuario.password);
    // si no es valido el password
    if (!passwordValido) {
      return res.status(400).json({
        mensaje: "Correo o password invalido - password",
      });
    }

    //responder que el usuario es correcto
    res.status(200).json({
      mensaje: "El usuario existe",
      uid: usuario._id,
      email: usuario.email,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "usuario o contraseña invalido",
    });
  }
};
export const crearUsuario = async(req, res) =>{
  try {
    const errores = validationResult(req)
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }
    const {email} = req.body;

    let usuario = await Usuario.findOne({email});
    if(usuario){
      return res.status(400).json({
        message: "Ya existe un usuario con el correo enviado"
      })
    }
      usuario = new Usuario(req.body);
      
      await usuario.save();
      res.status(201).json({
          message: "El usuario fue creado correctamente"
      })
  } catch (error) {
      console.log(error)
      res.status(401).json({
          message:"Error al crear un usuario"
      })
  }
}
export const listarUsuarios = async (req, res) =>{
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios)
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message :"Error al buscar usuarios"
    })
  }
}
