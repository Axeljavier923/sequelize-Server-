import React, { useState } from 'react';
import Header from '../Headers/header';
import '../stilos/crearEmpleado.css'; 
import { Footer } from '../Footer/footer';

const CrearEmpleado = () => {
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre_completo: '',
    genero: '',
    edad: 0,
  });

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
      const fethEmpleadoPost = await fetch("http://localhost:3000/empleado", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre_completo: nuevoEmpleado.nombre_completo,
          genero: nuevoEmpleado.genero,
          edad: nuevoEmpleado.edad,
        }),
      });

      if (fethEmpleadoPost.ok) {
        alert('Empleado agregado con éxito');
      } else {
        alert('Error al agregar empleado');
        console.error(await fethEmpleadoPost.json()); 
      }
    } catch (error) {
      alert('Error de red al agregar empleado', error);
    }
  };

  return (
    <div>
     <Header />
    <div className="crear-empleado-container">
      <div className="crear-empleado-form">
        <h2>Crear nuevo empleado</h2>
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
              <select
                name="genero"
                value={nuevoEmpleado.genero}
                onChange={handleNuevoEmpleadoChange}
              >
                <option value="">Seleccionar Género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
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
          <button className='button-crear-empleado' type="submit">Agregar Empleado</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CrearEmpleado;
