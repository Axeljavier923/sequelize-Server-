import {Router} from 'express'
import { ctrlGetAllProvinces } from '../controllers/controllers_provincia.js'

const routes_provincia = Router()

routes_provincia.get('/', ctrlGetAllProvinces)

export {routes_provincia}