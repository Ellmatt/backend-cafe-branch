


export const listarProductos = (req, res) => {
    res.send("aqui tengo que retornar un arreglo de productos");
  }
  export const crearProducto = (req, res) => {
    // extraer del body los dato
    console.log(req.body)
    // agregar la validacion correspondiente 
    
    // guardar ese producto ne la bd
    res.send("aqui devolvemos un producto");
  }