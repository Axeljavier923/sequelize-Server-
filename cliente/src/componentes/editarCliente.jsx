import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Headers/header';
import "../stilos/editarCliente.css"

const EditarCliente = () => {
  const { id } = useParams();
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre_completo: '',
    genero: '',
    edad: 0,
  });

  useEffect(() => {
    const obtenerDatosCliente = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cliente/${id}`);
        const datosCliente = await response.json();
        setNuevoCliente(datosCliente);
      } catch (error) {
        console.error('Error al obtener datos del empleado', error);
      }
    };

    obtenerDatosCliente();
  }, [id]);

  const handleNuevoClienteChange = (event) => {
    const { name, value } = event.target;
    setNuevoCliente({
      ...nuevoCliente,
      [name]: value,
    });
  };

  const handleNuevoClienteSubmit = async (event) => {
    event.preventDefault();

    try {
      const fethClienteEditar = await fetch(`http://localhost:3000/cliente/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          genero: nuevoCliente.genero,
          edad: nuevoCliente.edad,
          nombre_completo: nuevoCliente.nombre_completo,
        }),
      });

      if (fethClienteEditar.ok) {
        alert('cliente editado con éxito');
      } else {
        alert('Error al editar el cliente');
        console.error(await fethClienteEditar.json()); 
      }
    } catch (error) {
      alert('Error de red al editar cliente', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="editar-empleado-container">
        <div className="editar-cliente-form">
          <h2>Editar Cliente</h2>
          <form onSubmit={handleNuevoClienteSubmit}>
          <label>
              Nombre Completo:
              <input
                type="text"
                name="nombre_completo"
                value={nuevoCliente.nombre_completo}
                onChange={handleNuevoClienteChange}
              />
            </label>
            <label>
              Género:
              <input
                type="text"
                name="genero"
                value={nuevoCliente.genero}
                onChange={handleNuevoClienteChange}
              />
            </label>
            <label>
              Edad:
              <input
                type="number"
                name="edad"
                value={nuevoCliente.edad}
                onChange={handleNuevoClienteChange}
              />
            </label>
            <button className='button-editar-cliente' type="submit">Editar cliente</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarCliente;
