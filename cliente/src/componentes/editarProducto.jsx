import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Headers/header';
import "../stilos/editarProducto.css"
import { Footer } from '../Footer/footer';

const EditarProducto = () => {
  const { id } = useParams();
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre_producto: '',
    cantidad: 0,
    precio: 0,
  });

  useEffect(() => {
    const obtenerDatosProducto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/producto/${id}`);
        const datosCliente = await response.json();
        setNuevoProducto(datosCliente);
      } catch (error) {
        console.error('Error al obtener datos del producto', error);
      }
    };

    obtenerDatosProducto();
  }, [id]);

  const handleNuevoProductoChange = (event) => {
    const { name, value } = event.target;
    setNuevoProducto({
      ...nuevoProducto,
      [name]: value,
    });
  };

  const handleNuevoProductoSubmit = async (event) => {
    event.preventDefault();

    try {
      const fethProductoEditar = await fetch(`http://localhost:3000/producto/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          edad: nuevoProducto.edad,
          precio: nuevoProducto.precio,
          nombre_producto: nuevoProducto.nombre_producto,
        }),
      });

      if (fethProductoEditar.ok) {
        alert('producto editado con éxito');
      } else {
        alert('Error al editar el producto');
        console.error(await fethProductoEditar.json()); 
      }
    } catch (error) {
      alert('Error de red al editar producto', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="editar-producto-container">
        <div className="editar-producto-form">
          <h2>Editar producto</h2>
          <form onSubmit={handleNuevoProductoSubmit}>
          <label>
              Nombre producto:
              <input
                type="text"
                name="nombre_producto"
                value={nuevoProducto.nombre_producto}
                onChange={handleNuevoProductoChange}
              />
            </label>
            <label>
              Precio:
              <input
                type="number"
                name="precio"
                value={nuevoProducto.precio}
                onChange={handleNuevoProductoChange}
              />
            </label>
            <label>
              cantidad:
              <input
                type="number"
                name="cantidad"
                value={nuevoProducto.cantidad}
                onChange={handleNuevoProductoChange}
              />
            </label>
            <button className='button-editar-producto' type="submit">Editar producto</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EditarProducto;
