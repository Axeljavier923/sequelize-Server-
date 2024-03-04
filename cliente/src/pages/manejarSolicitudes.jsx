import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/header.jsx";
import { TodasSolicitudes } from "../pages/todasSolicitudes.jsx";
import { CustomFetch } from "../api/customFeth.js";

export const ManejarSolicitudes = () => {
    const navigate = useNavigate();
    const admin = localStorage.getItem('admin');

    useEffect(() => {
        if (!admin) {
            navigate('/');
        }
    }, [admin, navigate]);

    const [reqCine, setReqCine] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await CustomFetch('http://localhost:3000/solicitarTienda', 'GET');
                setReqCine(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <TodasSolicitudes reqCine={reqCine} />
        </>
    );
};

