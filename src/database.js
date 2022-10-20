import mongoose from "mongoose";

const url= 'mongodb://localhost:27017/cafe-branch';

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
