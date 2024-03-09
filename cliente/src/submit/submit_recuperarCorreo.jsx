import { useContext } from "react";
import { AuthContext } from "../context/authProvider.jsx";
import { CustomFetch } from "../api/customFeth.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const RecuperarCuentaSubmit = ({ formState }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si el campo de correo está vacío
    if (!formState.correo) {
      Swal.fire({
        title: 'Error',
        text: 'El correo no puede estar vacío',
        icon: 'error',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
      return;
    }

    console.log(formState);

    try {
      const response = await CustomFetch("http://localhost:3000/auth/users", 'GET', formState);

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
      } else {
        const lista = response.listaUsuarios;
        console.log("Lista de usuarios:", lista);

        const correoBuscado = formState.correo;
        const correosEncontrados = lista.map(usuario => usuario.correo === correoBuscado);

        console.log("Correos encontrados:", correosEncontrados);

        if (correosEncontrados.includes(true)) {
          // Realiza la solicitud POST a http://localhost:3000/correo/codigo
          try {
            const codigoResponse = await CustomFetch("http://localhost:3000/correo/codigo", 'POST', {
              correo: correoBuscado,
              // Puedes incluir más datos en el cuerpo de la solicitud si es necesario
            });

            if (codigoResponse.mensaje) {
              Swal.fire({
                title: 'Éxito',
                text: `Se encontró un correo ${correoBuscado} en la lista de usuarios.`,
                icon: 'success',
                width: '50%',
                padding: '1rem',
                background: '#DBCBCB',
                grow: 'row'
              }).then(() => {
                navigate("/codigo");
              });
            } else {
              Swal.fire({
                title: 'Error',
                text: 'Error al realizar la solicitud POST para el código.',
                icon: 'error',
                width: '50%',
                padding: '1rem',
                background: '#DBCBCB',
                grow: 'row'
              });
            }
          } catch (codigoError) {
            console.error("Error al procesar la solicitud para el código:", codigoError);
            Swal.fire({
              title: 'Error',
              text: 'Ocurrió un error al procesar la solicitud para el código.',
              icon: 'error',
              width: '50%',
              padding: '1rem',
              background: '#DBCBCB',
              grow: 'row'
            });
          }
        } else {
          Swal.fire({
            title: 'Información',
            text: `No se encontró ningún correo ${correoBuscado} en la lista de usuarios.`,
            icon: 'info',
            width: '50%',
            padding: '1rem',
            background: '#DBCBCB',
            grow: 'row'
          });
        }
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al procesar la solicitud.',
        icon: 'error',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      });
    }
  };

  return (
    <div className='botonRegister'>
      <input onClick={handleSubmit} type="submit" className='botonRegister' value="Registro" />
    </div>
  );
};
