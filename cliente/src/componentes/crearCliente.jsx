import React, { useState, useEffect } from 'react';
import Header from '../Headers/header';
import "../stilos/crearCliente.css"

function CrearClientes() {
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre_completo: '',
    genero: '',
    edad: 0,
    empleadoId: 0,
  });

  const handleNuevoClienteSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/cliente/${nuevoCliente.empleadoId}/cliente`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoCliente),
      });

      if (response.ok) {
        console.log('Cliente agregado con éxito');
        // Puedes volver a cargar la lista de clientes después de agregar uno nuevo
        fetchData();
      } else {
        console.error('Error al agregar cliente');
      }
    } catch (error) {
      console.error('Error de red al agregar cliente', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoCliente({ ...nuevoCliente, [name]: value });
  };

  return (
    <div>
      <Header />
      <div className="crear-cliente-container">
        <div className="crear-cliente-form">
          <h2>Crear Nuevo Cliente</h2>
          <form onSubmit={handleNuevoClienteSubmit}>
            <label>
              Nombre Completo:
              <input type="text" name="nombre_completo" value={nuevoCliente.nombre_completo} onChange={handleInputChange} required />
            </label>
            <label>
              Género:
              <input type="text" name="genero" value={nuevoCliente.genero} onChange={handleInputChange} required />
            </label>
            <label>
              Edad:
              <input type="number" name="edad" value={nuevoCliente.edad} onChange={handleInputChange} required />
            </label>
            <button type="submit">Agregar Cliente</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrearClientes;
