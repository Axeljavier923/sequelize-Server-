import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Headers/header';
import "../stilos/editarEmpleado.css";

const EditarEmpleado = () => {
  const { empleadoId } = useParams();
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre_completo: '',
    genero: '',
    edad: 0,
  });

  useEffect(() => {
    const obtenerDatosEmpleado = async () => {
      try {
        const response = await fetch(`http://localhost:3000/empleado/${empleadoId}`);
        const datosEmpleado = await response.json();
        setNuevoEmpleado(datosEmpleado);
      } catch (error) {
        console.error('Error al obtener datos del empleado', error);
      }
    };

    obtenerDatosEmpleado();
  }, [empleadoId]);

  const handleNuevoEmpleadoChange = (event) => {
    const { name, value } = event.target;
    setNuevoEmpleado({
      ...nuevoEmpleado,
      [name]: value,
    });
  };

  const handleNuevoEmpleadoSubmit = async (event) => {
    event.preventDefault();

    try {
      const fethEmpleadoEditar = await fetch(`http://localhost:3000/empleado/${empleadoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          genero: nuevoEmpleado.genero,
          edad: nuevoEmpleado.edad,
          nombre_completo: nuevoEmpleado.nombre_completo,
        }),
      });

      if (fethEmpleadoEditar.ok) {
        alert('Empleado editado con éxito');
      } else {
        alert('Error al editar el empleado');
        console.error(await fethEmpleadoEditar.json()); 
      }
    } catch (error) {
      alert('Error de red al editar empleado', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="editar-empleado-container">
        <div className="editar-empleado-form">
          <h2>Editar empleado</h2>
          <form onSubmit={handleNuevoEmpleadoSubmit}>
          <label>
              Nombre Completo:
              <input
                type="text"
                name="nombre_completo"
                value={nuevoEmpleado.nombre_completo}
                onChange={handleNuevoEmpleadoChange}
              />
            </label>
            <label>
              Género:
              <input
                type="text"
                name="genero"
                value={nuevoEmpleado.genero}
                onChange={handleNuevoEmpleadoChange}
              />
            </label>
            <label>
              Edad:
              <input
                type="number"
                name="edad"
                value={nuevoEmpleado.edad}
                onChange={handleNuevoEmpleadoChange}
              />
            </label>
            <button className='button-editar-empleado' type="submit">Editar Empleado</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarEmpleado;
