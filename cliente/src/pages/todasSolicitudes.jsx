import { useState, useEffect } from "react"
import { CustomFetch } from "../api/customFeth.js"
import Swal from "sweetalert2"
export const TodasSolicitudes = ({ reqCine }) => {

    const [requestTienda, setRequestCine] = useState([])

    const rejectedRequest = async (e) => {
        e.preventDefault()
        const data = await CustomFetch(`http://localhost:3000/solicitarTienda/${e.target.id}`, 'DELETE')
        const dataCine = await CustomFetch('http://localhost:3000/solicitarTienda', 'GET')

        setRequestCine(dataCine)

        Swal.fire({
            title: 'Solucitud aceptada',
            icon: 'success',
            confirmButtonText: 'ok',
            width: '50%',
            padding: '1rem',
            background: '#DBCBCB',
            grow: 'row'
        })

    }

    const acceptRequest = async (e) => {
        e.preventDefault()

        const response = await CustomFetch(`http://localhost:3000/solicitarTienda/${e.target.id}`, 'GET')

        const dataCine = await CustomFetch('http://localhost:3000/solicitarTienda', 'GET')

        setRequestCine(dataCine)

        Swal.fire({
            title: 'Solucitud aceptada',
            icon: 'success',
            confirmButtonText: 'ok',
            width: '50%',
            padding: '1rem',
            background: '#DBCBCB',
            grow: 'row'
        })
    }

    useEffect(() => {
        setRequestCine(reqCine)
    }, [reqCine])

    return (
        <div className="requestsBox">
            <div className="container">
                <div className="row">
                    <h1 className="text-center w-50">Solicitudes </h1>
                    <div className="col-8 text-white">
                        {
                            requestTienda.map((tienda) => (
                                <div key={tienda.id} className="border  border-white w-75 rounded-4 mt-3 mb-3">
                                    <div className="container text-center mt-3">
                                        <div className="row">
                                            <div className="col">
                                                <p className="">Nombre Cine: {tienda.name_tienda}</p>
                                            </div>
                                            <div className="col">
                                                <p className="">CUIT: {tienda.cuit}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="">Telefono: {tienda.phone}</p>
                                            </div>
                                            <div className="col">
                                                <p className="">Ubicación: {tienda.province.name}, {tienda.location.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="">Dirección: {tienda.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div className="">
                                            <button id={tienda.id} onClick={acceptRequest} className="requestsButton btn btn-success">Aceptar</button>
                                        </div>
                                        <div className="">
                                            <button onClick={rejectedRequest}
                                                id={tienda.id} className="requestsButton  btn btn-danger">Rechazar</button>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    <div className="col">
                        <div className="row mt-1">
                            <h2 className="text-center text-white">Filtros</h2>
                            <div className="mt-1 mb-1">
                                <select name="" className="w-100 bg-danger rounded text-white text-center" id="">
                                    <option value="">
                                        Todos
                                    </option>
                                    <option value="">
                                        Hoy
                                    </option>
                                    <option value="">
                                        Esta semana
                                    </option>
                                    <option value="">
                                        Este mes
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}