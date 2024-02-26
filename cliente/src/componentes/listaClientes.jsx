import React, { useState, useEffect } from 'react';
import Header from '../Headers/header';
import { Link } from 'react-router-dom';

const ListaClientes = () => {
  const [dataCliente, setDataCliente] = useState(null);

  useEffect(() => {
    const fethCliente = async () => {
      try {
        const feth = await fetch("http://localhost:3000/cliente");
        const data = await feth.json();
        setDataCliente(data);
        console.log("se obtuvo con éxito los datos de :", data);
      } catch (error) {
        console.log(error);
      }
    };
    fethCliente();
  }, []);

  return (
    <div>
      <Header />
      {dataCliente && (
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Género</th>
              <th>Edad</th>
              <th>EmpleadoId</th>
              <th>Crear producto</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {dataCliente.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre_completo}</td>
                <td>{cliente.genero}</td>
                <td>{cliente.edad}</td>
                <td>{cliente.empleadoId}</td>
                <td>
                  <Link to={`/cliente/${cliente.id}/crear_producto`}>
                    <button className="crear-button">crearProducto</button>
                  </Link>
                </td>
                <td>
                <Link to={`/editar_Cliente/${cliente.id}`}>
                  <button className="edit-button">Editar</button>
                </Link>
                </td>
                <td>
                <Link to={`/eliminar_cliente/${cliente.id}`}>
                  <button className="delete-button">Eliminar</button>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaClientes;
