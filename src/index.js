import express from "express";
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import './database'
// crear una instancia de express
const app = express();

// creamos una variabvle puerto
app.set('port', process.env.PORT || 4001)
// usar el puerto
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto ' + app.get('port'))
})

// middlewares: funciones que se ejecutan antes de las rutas 
// morgan da info extra en la terminal
app.use(morgan('dev'))
// permitir peticiones remotas
app.use(cors())
// middlewares  para interprestar los objetos json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cargar archivos estaticos
// console.log(path.join(__dirname, '../public'))
app.use(express.static(path.join(__dirname, '../public')))

// rutas: nombre de dominio + ----
// http://localhost:4000/prueba
app.get('/productos', (req, res)=>{
res.send('Esto es una prueba de la peticion GET')
})


