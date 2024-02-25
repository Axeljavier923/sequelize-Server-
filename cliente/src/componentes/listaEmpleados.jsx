import React, { useEffect, useState } from 'react';
import Header from '../Headers/header';
import '../stilos/listaTablas.css'; 
import { Link} from 'react-router-dom';

function ListaEmpleados() {
  const [dataEmpleado, setDataEmpleado] = useState(null);

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        const feth = await fetch("http://localhost:3000/empleado")
        const data = await feth.json();
        setDataEmpleado(data);
        console.log("la petición de datos ha sido un éxito", data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchEmpleado()
  }, [])

  return (
    <div>
      <Header />
      {dataEmpleado && dataEmpleado.length > 0 ? (
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Género</th>
              <th>Edad</th>
              <th>Crear cliente</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {dataEmpleado.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.id}</td>
                <td>{empleado.nombre_completo}</td>
                <td>{empleado.genero}</td>
                <td>{empleado.edad}</td>
                <td>
                  <Link to={`/crear/${empleado.id}/cliente`}>
                    <button className="crear-button">crearCliente</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/editar_empleado/${empleado.id}`}>
                    <button className="edit-button">Editar</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/eliminar_empleado/${empleado.id}`}>
                    <button className="delete-button">Eliminar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay empleados para mostrar.</p>
      )}
    </div>
  )
}

export default ListaEmpleados;
