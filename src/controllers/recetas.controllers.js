import Receta from "../database/model/receta.js";

export const listarRecetas = (req, res) => {
  console.log("desde listar recetas");
  res.send("Enviar lista de recetas...");
};

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
