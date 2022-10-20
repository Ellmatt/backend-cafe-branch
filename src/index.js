import express from "express";

// crear una instancia de express
const app = express();

// creamos una variabvle puerto
app.set('port', process.env.PORT || 4001)
// usar el puerto
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto ' + app.get('port'))
})




console.log("hola mundo");
