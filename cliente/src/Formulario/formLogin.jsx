import React from 'react'
import { useState } from 'react'
import '../stilos/formLogin.css'
import { LoginSubmit } from '../submit/submitLogin.jsx'

export const FormLogin = () => {

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
    <div className='contenedorLogin'>
      <div className='formBoxLogin'>
        <form name='formlogin'>
          <h2> Inicio de Sesión</h2>

          <div className='inputBoxLogin'>
            <input type="email"
              placeholder='correo'
              name="correo"
              id='correo'
              value={formState.correo}
              onChange={handleChange}
              
            />
            <i><box-icon type='solid' name='user'></box-icon></i>
          </div>

          <div className='inputBoxLogin'>
            <input type="password"
              placeholder='Password'
              name="password"
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
            <i><box-icon name='lock-alt' type='solid' ></box-icon></i>
          </div>

          <LoginSubmit
            formState={formState}
          />

          <div className='groupLogin'>
            <span><a href="#">Recuperar Contraseña</a></span>
            <span><a href="/register">Registro</a></span>
          </div>

        </form>
      </div>
    </div>
  )
}
