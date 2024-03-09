import React, { useState } from 'react';
import { CustomFetch } from '../api/customFeth.js'; 
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Codigo = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [codigo, setCodigo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await CustomFetch('http://localhost:3000/correo/verificar_codigo', 'POST', {
        correo,
        codigo,
      });

      if (response.mensaje === 'Código verificado correctamente') {
        Swal.fire({
          title: 'Éxito',
          text: response.mensaje,
          icon: 'success',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row',
        }).then(() => {
          navigate('/recuperar_clave');
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Error al verificar el código.',
          icon: 'error',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row',
        });
      }
    } catch (error) {
      console.error('Error al procesar la solicitud para verificar el código:', error);
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al procesar la solicitud para verificar el código.',
        icon: 'error',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row',
      });
    }
  };

  return (
    <div>
      <h1>Verificación de Código</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Correo:
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </label>
        <br />
        <label>
          Código:
          <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        </label>
        <br />
        <button type="submit">Verificar Código</button>
      </form>
    </div>
  );
};

