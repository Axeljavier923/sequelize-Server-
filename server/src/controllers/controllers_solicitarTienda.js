import { addRequestCine, getRequestCine, deleteRequestCine, acceptRequest } from "../models/model_solicitarTienda.js"

export const ctrlAddRequestCine = async (req, res) => {
    try {
        const {authId} = req.params
        const solicitud = req.body

        const newRequestCine = await addRequestCine(solicitud, authId)

        res.status(200).json(newRequestCine)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error add request'
        })
    }
}


export const ctrlGetRequestCine = async (req, res) => {
    try {
        const RequestCine = await getRequestCine()

        res.status(200).json(RequestCine)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error get requests'
        })
    }
}


export const ctrlDeleteCine = async (req, res) => {
    try {

        const { id } = req.params

        const requestCine = await deleteRequestCine(id)

        res.status(200).json(requestCine)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error rejected requests'
        })
    }
}

export const ctrlAcceptRequest = async (req, res) => {
    try {
        const { id } = req.params
        console.log('ID de la solicitud:', id);
        const newTienda = await acceptRequest(id)
        console.log('ID de la solicitud:', newTienda);

       return res.status(200).json(newTienda)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "error while accepting"
        })
    }
}