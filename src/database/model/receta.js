import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required: true,
        unique:true,
        minLength:4,
        maxLength:40
    },
    ingredientes:{
        type: String,
        required: true,
        minLength:3,
        maxLength:100
    },
    imagen:{
     type: String,
     requiered:true
    },
    categoria:{
        type: String,
        required: true,
        enum: ['platoPrincipal','entrada','postre','desayuno','apertivo','sopas','vegetariano','sinGluten','vegano']
    },
    dificultad:{
        type: String,
        required: true,
        enum: ['facil','intermedio','dificil']
    },
    descripcionBreve:{
        type: String,
        required: true,
        minLength:5,
        maxLength:50
    },
    descripcionAmplia:{
        type: String,
        required: true,
        minLength:50,
        maxLength:300
    }
})

const Receta = mongoose.model('receta',recetaSchema);

export default Receta;