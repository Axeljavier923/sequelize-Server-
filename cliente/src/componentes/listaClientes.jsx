import React, { useState, useEffect } from 'react';
import Header from '../Headers/header';

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
                <td><button className="edit-button">Editar</button></td>
                <td><button className="delete-button">Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaClientes;
