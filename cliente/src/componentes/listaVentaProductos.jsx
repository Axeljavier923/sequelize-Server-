import React, { useState, useEffect } from 'react';
import "../stilos/listaVentaProductos.css"

function ListaVentaProductos() {
    const [ventaProducto, setVentaProducto] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const feth = await fetch("http://localhost:3000/ventaProducto");
          const dataVenta = await feth.json();
          console.log("dataventa", dataVenta)
          setVentaProducto(dataVenta);
          console.log('Datos de autenticación obtenidos:', dataVenta);
        } catch (error) {
          console.error('Error de solicitud para obtener datos de autenticación:', error);
        }
      };
  
      fetchData();
    }, []); 
  
    return (
      <div>
        <div className="product-list">
          {ventaProducto && ventaProducto.map((ventaItem) => (
            <div key={ventaItem.id} className="product-item">
              <img
                src={`/producto_img/${ventaItem.imagen}`}
                alt={`Imagen del producto ${ventaItem.id}`}
              />
              <div className="product-details">
              <p><strong>Precio:</strong> {ventaItem.precio}$</p>
              <p><strong>Cantidad:</strong> {ventaItem.cantidad}</p>
              </div>
              <button className='boton_detalles'>Ver Detalles</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ListaVentaProductos;
