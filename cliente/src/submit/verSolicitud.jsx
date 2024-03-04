import React, { useState, useEffect } from "react";
import { CustomFetch } from "../api/customFeth.js";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export const VerSolicitud = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await CustomFetch(`http://localhost:3000/solicitarTienda/${id}`, 'GET');
        console.log("Response from server:", response);
        setRequest(response);
      } catch (error) {
        console.error('Error fetching request:', error);
      }
    };

    fetchRequest();
  }, [id]);

  const acceptRequest = async () => {
    try {
      // Lógica para aceptar la solicitud
      // setRequest(response); // Esto no es necesario aquí
      Swal.fire({
        title: 'Solicitud aceptada',
        icon: 'success',
        confirmButtonText: 'Ok',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
      // Usamos `window.history.back()` para retroceder
      window.history.back();
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  return (
    <div>
      {request && (
        <div>
          {/* Mostrar información detallada de la solicitud */}
        <p>id: {request.id}</p> 
        <p>Nombre de la tienda: {request.name_tienda}</p>
        <p>Cuit: {request.cuit}</p>
        <p>Telefono: {request.phone}</p> 
         <p>Provincia: {request.province}</p>
        <p>Departamento: {request.location}</p>
        <p>Direccion: {request.address}</p> 
          {/* ... (otro código) */}
          <div className="d-flex justify-content-end">
            <div className="">
              {/* Botón para aceptar la solicitud */}
              <button onClick={acceptRequest} className="requestsButton btn btn-success">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
