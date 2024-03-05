import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Headers/header';
import { Footer } from '../Footer/footer';

const ConfirmacionEliminar = ({ onConfirmar, onCancel }) => (
  <div>
    <p>¿Estás seguro de que quieres eliminar este cliente?</p>
    <button onClick={onConfirmar}>Sí, eliminar</button>
    <button onClick={onCancel}>Cancelar</button>
  </div>
);

const EliminarCliente = () => {
  const { id } = useParams();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(true);

  useEffect(() => {
    if (mostrarConfirmacion) return;

    const eliminarCliente = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cliente/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Cliente eliminado con éxito');
          window.location.replace('/lista_clientes');
        } else {
          alert('Error al eliminar el clientes');
          console.error(await response.json());
        }
      } catch (error) {
        console.error('Error de red al eliminar cliente', error);
      }
    };

    eliminarCliente();
  }, [id, mostrarConfirmacion]);

  const confirmarEliminacion = () => {
    setMostrarConfirmacion(false);
  };

  const cancelarEliminacion = () => {
    setMostrarConfirmacion(false);
    window.location.replace('/lista_clientes');
  };

  return (
    <div>
      <Header />
      {mostrarConfirmacion ? (
        <ConfirmacionEliminar onConfirmar={confirmarEliminacion} onCancel={cancelarEliminacion} />
      ) : (
        <div>
          <p>Eliminando cliente...</p>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default EliminarCliente;
