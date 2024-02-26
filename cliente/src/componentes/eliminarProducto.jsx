import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Headers/header';

const ConfirmacionEliminar = ({ onConfirmar, onCancel }) => (
  <div>
    <p>¿Estás seguro de que quieres eliminar este producto?</p>
    <button onClick={onConfirmar}>Sí, eliminar</button>
    <button onClick={onCancel}>Cancelar</button>
  </div>
);

const EliminarProducto = () => {
  const { id } = useParams();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(true);

  useEffect(() => {
    if (mostrarConfirmacion) return;

    const eliminarProducto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/producto/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('producto eliminado con éxito');
          window.location.replace('/lista_productos');
        } else {
          alert('Error al eliminar el producto');
          console.error(await response.json());
        }
      } catch (error) {
        console.error('Error de red al eliminar el producto', error);
      }
    };

    eliminarProducto();
  }, [id, mostrarConfirmacion]);

  const confirmarEliminacion = () => {
    setMostrarConfirmacion(false);
  };

  const cancelarEliminacion = () => {
    setMostrarConfirmacion(false);
    window.location.replace('/lista_productos');
  };

  return (
    <div>
      <Header />
      {mostrarConfirmacion ? (
        <ConfirmacionEliminar onConfirmar={confirmarEliminacion} onCancel={cancelarEliminacion} />
      ) : (
        <div>
          <p>Eliminando producto...</p>
        </div>
      )}
    </div>
  );
};

export default EliminarProducto;
