import React from 'react'
import { useState } from 'react'
import '../stilos/formRegister.css'
import { RegisterSubmit } from '../submit/submitRegister'

export const FormRegister = () => {

  const [formState, setFormState] = useState({
    correo: "",
    password: "",
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
          <h2 className='mt-2'>Registro</h2>

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

          <div className='inputBoxRegister'>
            <input type="password"
              placeholder='Contraseña'
              name="password"
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
            <i><box-icon name='lock-alt' type='solid' ></box-icon></i>
          </div>

          {/* <div className='inputBoxRegister'>
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              name="confirmarpassword"
              id="confirmarpassword"
              value={formState.confirmarpassword}
              onChange={handleChange}
            />
          </div> */}

          <RegisterSubmit
            formState={formState}
          />

          <div className='groupRegister'>
            <span><a href="#">Recuperar Contraseña</a></span>
            <span><a href="/login">Inicia Sesion</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}

