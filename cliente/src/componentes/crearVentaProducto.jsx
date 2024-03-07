import React, { useState } from 'react';
import Header from '../Headers/header';
import '../stilos/crearVenta.css';
import { Footer } from '../Footer/footer';

const CrearVentaProducto = () => {
  const [nuevaVenta, setNuevaVenta] = useState({
    name_producto: '',
    precio: 0,
    cantidad: 0,
    imagen: null,
  });

  const handleNuevaVentaChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      // Almacena el objeto de archivo sin asignar un valor específico
      setNuevaVenta({
        ...nuevaVenta,
        [name]: event.target.files[0],
      });
    } else {
      setNuevaVenta({
        ...nuevaVenta,
        [name]: value,
      });
    }
  };

  const handleNuevaVentaSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name_producto', nuevaVenta.name_producto);
      formData.append('precio', nuevaVenta.precio);
      formData.append('cantidad', nuevaVenta.cantidad);
      formData.append('imagen', nuevaVenta.imagen); // Agrega el archivo directamente

      const fethVentaPost = await fetch('http://localhost:3000/ventaProducto', {
        method: 'POST',
        body: formData,
      });

      console.log('feth venta:', fethVentaPost);

      if (fethVentaPost.ok) {
        alert('Venta agregada con éxito');
      } else {
        alert('Error al agregar venta');
        console.error(await fethVentaPost.json());
      }
    } catch (error) {
      alert('Error de red al agregar venta', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="crear-venta-container">
        <div className="crear-venta-form">
          <h2>Crear nueva venta</h2>
          <form onSubmit={handleNuevaVentaSubmit}>
            <label>
              Nombre producto:
              <input
                type="text"
                name="name_producto"
                value={nuevaVenta.name_producto}
                onChange={handleNuevaVentaChange}
              />
            </label>
            <label>
              Precio:
              <input
                type="number"
                name="precio"
                value={nuevaVenta.precio}
                onChange={handleNuevaVentaChange}
              />
            </label>
            <label>
              Cantidad:
              <input
                type="number"
                name="cantidad"
                value={nuevaVenta.cantidad}
                onChange={handleNuevaVentaChange}
              />
            </label>
            <label>
              Imagen:
              <input
                type="file"
                accept="image/*"
                name="imagen"
                onChange={handleNuevaVentaChange}
              />
            </label>
            <button className='button-crear-venta' type="submit">Agregar venta</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CrearVentaProducto;
