import { Router } from 'express'
import { ctrlAcceptRequest, ctrlAddRequestCine, ctrlDeleteCine, ctrlGetRequestCine } from '../controllers/controllers_solicitarTienda.js'
// import { createRequestCineSchema } from '../models/model_solicitarTienda.js'

const routes_solicitarTienda = Router()

routes_solicitarTienda.get('/:id', ctrlAcceptRequest)

routes_solicitarTienda.get('/', ctrlGetRequestCine)

routes_solicitarTienda.post('/:authId',  ctrlAddRequestCine)

routes_solicitarTienda.delete('/:id', ctrlDeleteCine)


export { routes_solicitarTienda }