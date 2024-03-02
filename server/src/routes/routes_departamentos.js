import { ctrlGetLocationByProvince } from "../controllers/controllers_departamentos.js";
import { Router } from "express";

const routes_departamentos = Router()

routes_departamentos.get('/:provinceId', ctrlGetLocationByProvince)

export {routes_departamentos}