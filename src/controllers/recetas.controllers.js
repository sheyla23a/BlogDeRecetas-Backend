import Receta from "../database/model/receta.js";

export const listarRecetas = async(req, res) => {
    try{
      const recetas = await Receta.find()
      res.status(200).json(recetas);

    }catch(error){
     console.log(error)
     res.status(404).json({mensaje: 'No se encontro la lista de recetas'})
    }
};

export const obtenerRecetas = async (req,res)=>{
 try{
  console.log(req.params.id)
  const recetaBuscada = await Receta.findById(req.params.id);
  res.status(200).json(recetaBuscada);
 }catch(error){
   console.log(error)
   res.status(404).json({mensaje: 'No se encontro la receta solicitada'})
 }
}


export const crearReceta = async (req, res) => {
  try {
    console.log(req.body);
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      mensaje: "La receta fue creada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo procesar la solicitud de crear receta",
    });
  }
};

export const editarReceta = async(req,res)=>{
try{
 const buscarReceta = await Receta.findById(req.params.id);
 if(!buscarReceta){
   return res.status(404).json({mensaje:'No se pudo editar la receta, el id es incorrecto'})
 }
 await Receta.findByIdAndUpdate(req.params.id, req.body);
 res.status(200).json({mensaje:'La receta fue modificada exitosamente'});
}catch(error){
    console.error(error)
    res.status(500).json({mensaje:'Ocurrio un error al intentar editar la receta'})
}
}
