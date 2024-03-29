import React from 'react';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { AuthContext } from '../context/authProvider.jsx';

export const LogoutButton = () => {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()

    // Mostrar una alerta
    Swal.fire({
      title: 'Cierre de Sesión',
      text: 'Has cerrado sesión exitosamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      }
    })

    logout();

    // setTimeout(() => {
    //   window.location.reload();
    // }, 2000);

  };
  
  return (
    <button onClick={handleLogout} className="btn bg-dark d-flex justify-content-center pt-2 text-white "><box-icon name='log-out' type='solid' color='#fffcfc'></box-icon>Cerrar Sesión </button>
  );
};

export default LogoutButton;
