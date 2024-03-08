// Filtros.jsx
import React, { useState, useEffect } from 'react';

export const Filtros = ({ tiendas, searchBar, setSearchBar }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productName, setProductName] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (tiendas) {
      const filteredData = tiendas.filter((producto) =>
        producto.name_producto.toLowerCase().includes(searchBar.toLowerCase())
      );
      setFilteredProducts(filteredData);
    }
  }, [searchBar, tiendas]);

  const handleFiltro = (e) => {
    setSearchBar('');
    const productId = e.target.id === 'all' ? null : parseInt(e.target.id);
    setSelectedProductId(productId);
    setProductName(e.target.name);
  };

  return (
    <>
      <div className="filtro bg-filtro-container container mb-5">
        {/* ... Contenido del filtro ... */}
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <div key={producto.id}>{producto.name_producto}</div>
          ))
        ) : (
          <div>No se encontraron productos que coincidan con la búsqueda.</div>
        )}
      </div>
    </>
  );
};
