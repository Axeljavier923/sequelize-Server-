import  Header  from "../Headers/header.jsx";
// import { Footer } from "../components/Footers/Footer.jsx";
import { TodasSolicitudes } from "../pages/todasSolicitudes.jsx";
// import '../assets/style/ManageRequests.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomFetch } from "../api/customFeth.js";

export const ManejarSolicitudes = () => {
    const admin = localStorage.getItem('admin')
    if (!admin) return (navigate('/'))

    const navigate = useNavigate()

    const [reqCine, setReqCine] = useState([])

    useEffect(() => {
        (

            async () => {
                const data = await CustomFetch('http://localhost:3000/solicitarTienda', 'GET')

                setReqCine(data)

            }
        )()

    }, [])


    return (
        <>
            <Header />
            <TodasSolicitudes
                reqCine={reqCine}
            />
        </>
    )
}