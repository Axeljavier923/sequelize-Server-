import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Headers/header';

const ConfirmacionEliminar = ({ onConfirmar, onCancel }) => (
  <div>
    <p>¿Estás seguro de que quieres eliminar este empleado?</p>
    <button onClick={onConfirmar}>Sí, eliminar</button>
    <button onClick={onCancel}>Cancelar</button>
  </div>
);

const EliminarEmpleado = () => {
  const { empleadoId } = useParams();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(true);

  useEffect(() => {
    if (mostrarConfirmacion) return;

    const eliminarEmpleado = async () => {
      try {
        const response = await fetch(`http://localhost:3000/empleado/${empleadoId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Empleado eliminado con éxito');
          window.location.replace('/lista_empleados');
        } else {
          alert('Error al eliminar el empleado');
          console.error(await response.json());
        }
      } catch (error) {
        console.error('Error de red al eliminar empleado', error);
      }
    };

    eliminarEmpleado();
  }, [empleadoId, mostrarConfirmacion]);

  const confirmarEliminacion = () => {
    setMostrarConfirmacion(false);
  };

  const cancelarEliminacion = () => {
    setMostrarConfirmacion(false);
    window.location.replace('/lista_empleados');
  };

  return (
    <div>
      <Header />
      {mostrarConfirmacion ? (
        <ConfirmacionEliminar onConfirmar={confirmarEliminacion} onCancel={cancelarEliminacion} />
      ) : (
        <div>
          <p>Eliminando empleado...</p>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default EliminarEmpleado;
