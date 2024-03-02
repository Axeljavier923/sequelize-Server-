import { Router } from "express";
import { ctrlAddTienda, 
    ctrlGetTiendaById, 
    ctrlgetAllTienda, 
    ctrlDeleteTienda, 
    ctrlEditTienda } from "../controllers/controllers_tienda.js";

const routes_tienda = Router();

routes_tienda.get('/', ctrlgetAllTienda);

routes_tienda.get('/:id', ctrlGetTiendaById)

routes_tienda.post('/', ctrlAddTienda);

routes_tienda.put('/:id', ctrlEditTienda)

routes_tienda.delete('/:id', ctrlDeleteTienda)

export { routes_tienda};