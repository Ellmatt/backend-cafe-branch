import mongoose from "mongoose";

// localhost: 127.0.0.1
// peticion a base de datos
const url= 'mongodb://127.0.0.1:27017/cafe-branch';

const connectDB = async ()=>{
    console.log('prueba')
    try{
        await mongoose.connect(url);
        console.log('BD connectada')
    }catch(error){
        console.log(error)
    }
}
connectDB();





// mongoose.connect(url);

// const connection = mongoose.connection;

// connection.once('open', ()=>{
//     console.log('BD conectada')
// })
