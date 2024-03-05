import React, { useState, useEffect } from 'react';
import Header from '../Headers/header';
import "../stilos/crearCliente.css"
import {useParams} from "react-router-dom"
import { Footer } from '../Footer/footer';

function CrearClientes() {
  const { empleadoId } = useParams();
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre_completo: '',
    genero: '',
    edad: 0,
    empleadoId: empleadoId ? parseInt(empleadoId, 10) : 0,
  });
  

  const handleNuevoClienteSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:3000/empleado/${empleadoId}/cliente`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...nuevoCliente, empleadoId: parseInt(empleadoId, 10) }),
      });
  
      console.log("empleado id", empleadoId);
      console.log("nuevo cliente: ", nuevoCliente);
  
      if (response.ok) {
        alert('Cliente agregado con éxito');
      } else {
        alert('Error al agregar cliente');
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
              <select
                name="genero"
                value={nuevoCliente.genero}
                onChange={handleInputChange}
              >
                <option value="">Seleccionar Género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </label>
            <label>
              Edad:
              <input type="number" name="edad" value={nuevoCliente.edad} onChange={handleInputChange} required />
            </label>
            <button type="submit">Agregar Cliente</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CrearClientes;
