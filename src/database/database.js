import mongoose from "mongoose";
import 'dotenv/config';

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI);

const datosConexion = mongoose.connection;
datosConexion.once('open',()=>{
    console.log('BD conectada')
})