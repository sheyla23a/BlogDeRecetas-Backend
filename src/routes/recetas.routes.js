import { Router} from "express";
import {crearReceta, editarReceta, listarRecetas, obtenerRecetas} from "../controllers/recetas.controllers.js"

const router = Router();

router.route('/recetas').get(listarRecetas).post(crearReceta)
router.route('/receta/:id').get(obtenerRecetas).put(editarReceta)

export default router;