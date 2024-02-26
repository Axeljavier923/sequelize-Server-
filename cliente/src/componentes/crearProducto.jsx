import React, { useState, useEffect } from 'react';
import Header from '../Headers/header';
import "../stilos/crearProductos.css"
import {useParams} from "react-router-dom"

function crearProductos() {
  const { clientId } = useParams();
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre_producto: '',
    cantidad: 0,
    precio: 0,
    clientId: clientId ? parseInt(clientId, 10) : 0,
  });
  

  const handleNuevoProductoSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:3000/cliente/${clientId}/producto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...nuevoProducto, clientId: parseInt(clientId, 10) }),
      });
  
      console.log("cliente id", clientId);
      console.log("nuevo producto: ", nuevoProducto);
  
      if (response.ok) {
        alert('producto agregado con éxito');
      } else {
        alert('Error al agregar el producto');
      }
    } catch (error) {
      console.error('Error de red al agregar el producto', error);
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };
  return (
    <div>
      <Header />
      <div className="crear-cliente-container">
        <div className="crear-cliente-form">
          <h2>Crear Nuevo Cliente</h2>
          <form onSubmit={handleNuevoProductoSubmit}>
            <label>
              Nombre del producto:
              <input type="text" name="nombre_producto" value={nuevoProducto.nombre_producto} onChange={handleInputChange} required />
            </label>
            <label>
              Precio:
              <input type="number" name="precio" value={nuevoProducto.precio} onChange={handleInputChange} required />
            </label>
            <label>
              Cantidad:
              <input type="number" name="cantidad" value={nuevoProducto.cantidad} onChange={handleInputChange} required />
            </label>
            <button type="submit">Agregar producto</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default crearProductos;
