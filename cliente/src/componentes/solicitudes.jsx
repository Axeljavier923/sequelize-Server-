import Header from "../Headers/header.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomFetch } from "../api/customFeth.js";

export function Solicitudes() {
  const token = localStorage.getItem('admi');
  const navigate = useNavigate();
  console.log("token", token);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          // Realiza la solicitud a la ruta http://localhost:3000/auth/user
          const response = await CustomFetch("http://localhost:3000/auth/user", 'TOKEN', token);

          // Maneja la respuesta según tus necesidades
          console.log("Respuesta de la solicitud a /auth/user:", response);

          // Verifica si el usuario tiene el rol de administrador
          if (response && response.admin) {
            // Acceso permitido para administradores
            console.log("Acceso permitido para administradores");
          } else {
            // Si el usuario no es administrador, redirige al inicio u otra página
            console.log("Acceso denegado para no administradores");
            navigate('/');
          }
        } else {
          // Si no hay token, redirige al inicio
          navigate('/');
        }
      } catch (error) {
        console.error("Error al realizar la solicitud a /auth/user:", error);
        // Puedes manejar el error de acuerdo a tus necesidades
      }
    };

    fetchUserData();
  }, [token, navigate]);

  return (
    <>
      <Header />
      <h1>hola</h1>
    </>
  );
}
