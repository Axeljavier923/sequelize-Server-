import React, { useState, useEffect } from "react";
import { CustomFetch } from "../api/customFeth.js";
import Swal from "sweetalert2";

export const TodasSolicitudes = ({ reqTienda }) => {
  const [requestTienda, setRequestCine] = useState([]);

  const rejectedRequest = async (id) => {
    try {
      await CustomFetch(`http://localhost:3000/solicitarTienda/${id}`, 'DELETE');
      const dataCine = await CustomFetch('http://localhost:3000/solicitarTienda', 'GET');
      setRequestCine(dataCine);
      Swal.fire({
        title: 'Solicitud rechazada',
        icon: 'error',
        confirmButtonText: 'Ok',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  const acceptRequest = async (id) => {
    try {
      await CustomFetch(`http://localhost:3000/solicitarTienda/${id}`, 'GET');
      const dataCine = await CustomFetch('http://localhost:3000/solicitarTienda', 'GET');
      setRequestCine(dataCine);
      Swal.fire({
        title: 'Solicitud aceptada',
        icon: 'success',
        confirmButtonText: 'Ok',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  useEffect(() => {
    setRequestCine(reqTienda);
  }, [reqTienda]);

  return (
    <div>
      {requestTienda && requestTienda.map((tienda) => (
        <div key={tienda.id}>
          <p>ID: {tienda.id}</p>
          <p>Nombre de la tienda: {tienda.name_tienda}</p>
          <p>Cuit: {tienda.cuit}</p>
          <p>Telefono: {tienda.phone}</p>
          <p>Provincia: {tienda.province.name} </p>
          <p>Departamento: {tienda.location.name} </p>
          <p>Direccion: {tienda.address} </p>
          <p>Usuario: {tienda.authId} </p>
          <div className="d-flex justify-content-end">
            <div className="">
              <button id={tienda.id} onClick={() => acceptRequest(tienda.id)} className="requestsButton btn btn-success">Aceptar</button>
            </div>
            <div className="">
              <button onClick={() => rejectedRequest(tienda.id)} className="requestsButton  btn btn-danger">Rechazar</button>
            </div>
          </div>
          <hr/>
        </div>
      ))}
    </div>
  );
};
