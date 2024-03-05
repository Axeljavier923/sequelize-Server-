import {Router} from "express";
import { ctrlUploadImgProducto, ventaProductosActualesAll } from "../controllers/controllers_ventaProducto.js"


export const routes_venderProducto=Router()

//vista
// routes_venderProducto.get("/vista", vistaCliente)

//crud
    routes_venderProducto.get("/",  ventaProductosActualesAll)
//   routes_venderProducto.get("/:id", clientOne)
    routes_venderProducto.post("/", ctrlUploadImgProducto);
//   routes_venderProducto.put("/:id", clientEdit)
//   routes_venderProducto.delete("/:id", clientDelete)
