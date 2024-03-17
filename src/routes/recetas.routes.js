import { Router} from "express";
import {borrarReceta, crearReceta, editarReceta, listarRecetas, obtenerRecetas} from "../controllers/recetas.controllers.js"

const router = Router();

router.route('/recetas').get(listarRecetas).post(crearReceta)
router.route('/receta/:id').get(obtenerRecetas).put(editarReceta).delete(borrarReceta)

export default router;