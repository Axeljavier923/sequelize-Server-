import React, { useEffect, useState } from 'react';
import Header from '../Headers/header';
import '../stilos/listaTablas.css'; 
import { Link } from 'react-router-dom';
import { Footer } from '../Footer/footer';

const ListaProductos = () => {
  const [dataProductos, setDataProductos] = useState(null);

  useEffect(() => {
    const fethProductos = async () => {
      try {
        const feth = await fetch("http://localhost:3000/producto");
        const data = await feth.json();
        const listaProductos = data.listaProducto || [];
        setDataProductos(listaProductos);
        console.log("la petición de datos ha sido un éxito", data);
      } catch (error) {
        console.log(error);
      }
    };
    fethProductos();
  }, []);

  return (
    <div>
      <Header />
      {dataProductos && (
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>ClienteId</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {dataProductos.map((productos) => (
              <tr key={productos.id}>
                <td>{productos.id}</td>
                <td>{productos.nombre_producto}</td>
                <td>{productos.cantidad}</td>
                <td>{productos.precio}</td>
                <td>{productos.clienteId}</td>
                <td>
                  <Link to={`/editar_producto/${productos.id}`}>
                    <button className="edit-button">Editar</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/eliminar_producto/${productos.id}`}>
                    <button className="delete-button">Eliminar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer/>
    </div>
  );
};

export default ListaProductos;
