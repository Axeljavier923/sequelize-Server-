import React from 'react'
import { useState } from 'react'
// import '../stilos/formRecuperarClave.css'
import { RecuperarCuentaSubmit } from '../submit/submit_recuperarCorreo'

export const FormObtenerCorreo = () => {

  const [formState, setFormState] = useState({
    correo: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (

    <div className='contenedorRegister'>
      <div className='formBoxRegister'>
        <form name='formregister'>
          <h2 className='mt-2'>Recuparar contraseña</h2>

          <div className='inputBoxRegister'>
            <input type="email"
              placeholder='correo'
              name="correo"
              id='correo'
              value={formState.email}
              onChange={handleChange}
            />
            <i><box-icon type='solid' name='user'></box-icon></i>
          </div>

          <RecuperarCuentaSubmit
            formState={formState}
          />
          <div className='groupRegister'>
            <span><a href="/login">Inicia Sesion</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}

