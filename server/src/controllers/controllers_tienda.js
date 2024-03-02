import {
    addTienda,
    deleteTienda,
    getAllTienda,
    getTiendaById,
    updateTienda
} from "../models/model_tienda.js";


export const ctrlAddTienda = async (req, res) => {
    try {
        const tienda = await addTienda(req.body)

        return res.status(200).json({
            message: 'tienda creado con exito',
            tienda
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error when adding cinema'
        })
    }
}

export const ctrlgetAllTienda = async (req, res) => {
    try {
        const tiendas = await getAllTienda()

        return res.status(200).json(tiendas)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error when get all tiendas'
        })
    }
}

export const ctrlGetTiendaById = async (req, res) => {
    try {
        const { id } = req.params

        const tienda = await getTiendaById(id)

        return res.status(200).json(tienda)
    } catch (error) {
        console.log(error),
            res.status(500).json({
                message: 'Error when get all by id tienda'
            })
    }
}

export const ctrlDeleteTienda = async (req, res) => {
    try {
        const { id } = req.params

        const tiendaId = await deleteTienda(id)

        return res.status(200).json({
            message: 'tienda deleted',
            tiendaId
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Error when deleting'
        })
    }
}
export const ctrlEditTienda = async (req, res) => {
    try {
        const tienda = req.body
        const { id } = req.params

        const newTienda = await updateTienda(id, tienda)

        return res.status(200).json({
            message: 'tienda Edited successfully',
            newTienda
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error when edit cinema'
        })
    }
}

