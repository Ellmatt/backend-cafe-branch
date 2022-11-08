import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/cafe-branch'
// const url= 'mongodb+srv://mahumada:f1qaMbagdv8Knrv8@cluster0.nkoqvy9.mongodb.net/cafe-branch-c61';

const connectDB = async ()=>{

    try{
        await mongoose.connect(url);
        console.log('BD connectada')
    }catch(error){
        console.log(error)
    }
}
connectDB();