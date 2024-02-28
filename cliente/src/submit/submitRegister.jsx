import { useContext } from "react";
import { AuthContext } from "../context/authProvider.jsx";
import { CustomFetch } from "../api/customFeth.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const RegisterSubmit = ({ formState }) => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si el campo de contraseña está vacío
    if (!formState.password) {
      Swal.fire({
        title: 'Error',
        text: 'La contraseña no puede estar vacía',
        icon: 'error',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
      return;
    }

    console.log(formState);

    const response = await CustomFetch("http://localhost:3000/auth/register", 'POST', formState);
    console.log("response", response);

    if (response.errors) {
      // Manejar errores de validación
      console.log("Errores de validación", response.errors);
      Swal.fire({
        title: 'Error',
        text: response.errors[0].msg,
        icon: 'error',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
    } else if (response)
    // (response.token)
    {
      // Manejar registro exitoso
      // console.log("Registro exitoso, token:", response.token);
      login(response.token);

      Swal.fire({
        title: 'Registro exitoso',
        text: '¡Tu cuenta ha sido creada con éxito!',
        icon: 'success',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row',
        showConfirmButton: false
      });

      setTimeout(() => {
        // Recarga la página después de 2 segundos
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className='botonRegister'>
      <input onClick={handleSubmit} type="submit" className='botonRegister' value="Registro" />
    </div>
  );
};
