import React, {useState} from 'react'
import Header from '../Headers/header'
import "../stilos/crearProductos.css"

function CrearProducto() {
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre_producto: '',
    precio: 0,
    cantidad: 0,
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
      const fethEmpleadoPost = await fetch("http://localhost:3000/producto", {
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
        console.log('Empleado agregado con éxito');
      } else {
        console.error('Error al agregar empleado');
        console.error(await fethEmpleadoPost.json()); 
      }
    } catch (error) {
      console.error('Error de red al agregar empleado', error);
    }
  };

  return (
    <div>
     <Header />
    <div className="crear-productos-container">
      <div className="crear-productos-form">
        <h2>Crear Nuevo Producto</h2>
        <form onSubmit={handleNuevoEmpleadoSubmit}>
          <label>
            Nombre del producto:
            <input
              type="text"
              name="nombre_completo"
              value={nuevoEmpleado.nombre_completo}
              onChange={handleNuevoEmpleadoChange}
            />
          </label>
          <label>
            Precio:
            <input
              type="text"
              name="genero"
              value={nuevoEmpleado.genero}
              onChange={handleNuevoEmpleadoChange}
            />
          </label>
          <label>
            Cantidad:
            <input
              type="number"
              name="edad"
              value={nuevoEmpleado.edad}
              onChange={handleNuevoEmpleadoChange}
            />
          </label>
          <button type="submit">Agregar Empleado</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CrearProducto