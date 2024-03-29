import { useContext } from "react";
import { CustomFetch } from "../api/customFeth.js";
import { AuthContext } from "../context/authProvider.jsx";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export const LoginSubmit = ({ formState }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await CustomFetch("http://localhost:3000/auth/login", 'POST', formState);

    if (Object.keys(resp).length === 0) {
      Swal.fire({
        title: 'El correo o contraseña son inválidos',
        icon: 'error',
        confirmButtonText: 'Ok',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
    } else if (resp.errors) {
      Swal.fire({
        title: 'Error',
        text: resp.errors[0].msg,
        icon: 'error',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
    } else if (resp.token) {
      // Realiza el fetch a la ruta /auth/user con el token
       const userData = await CustomFetch("http://localhost:3000/auth/user", 'TOKEN', resp.token);
      console.log("user data", userData)

      // Llamamos a la función login con la respuesta completa
      login({ ...resp, ...userData });

      // Verifica si el usuario es un administrador
      if (userData.admin) {
        Swal.fire({
          title: 'Inicio de sesión como administrador correcto',
          icon: 'success',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row',
          showConfirmButton: false
        });
      } else if (userData.supermercadoId) {
        Swal.fire({
          title: 'Inicio de sesión como empresa de supermercado correcto',
          icon: 'success',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row',
          showConfirmButton: false
        });
      }
      else if (userData.supermercadoId && userData.admin) {
        Swal.fire({
          title: 'Inicio de sesión como empresa de supermercado y administrador correcto',
          icon: 'success',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row',
          showConfirmButton: false
        });
      }
      else {
        Swal.fire({
          title: 'Inicio de sesión correcto',
          icon: 'success',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row',
          showConfirmButton: false
        });
      }

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className='botonLogin'>
      <input type="submit" onClick={handleSubmit} className='botonLogin' value="Iniciar sesión" />
    </div>
  );
};
