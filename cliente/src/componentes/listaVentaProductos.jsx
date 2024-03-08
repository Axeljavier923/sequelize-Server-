// ListaVentaProductos.jsx
import React, { useState, useEffect } from 'react';
import "../stilos/listaVentaProductos.css"

function ListaVentaProductos({ setSearchBar }) {
  const [ventaProducto, setVentaProducto] = useState(null);
  const [filteredVentaProducto, setFilteredVentaProducto] = useState(null);
  const [searchBarLocal, setSearchBarLocal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/ventaProducto");
        const dataVenta = await response.json();
        setVentaProducto(dataVenta);
        setFilteredVentaProducto(dataVenta);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    if (ventaProducto) {
      const filteredData = ventaProducto.filter((producto) =>
        producto.name_producto.toLowerCase().includes(searchBarLocal.toLowerCase())
      );
      setFilteredVentaProducto(filteredData);
    }
  }, [searchBarLocal, ventaProducto]);

  const handleSearchBarChange = (e) => {
    setSearchBarLocal(e.target.value);
    setSearchBar(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchBarLocal}
        onChange={handleSearchBarChange}
      />

      <div className="product-list">
        {filteredVentaProducto && filteredVentaProducto.map((ventaItem) => (
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
