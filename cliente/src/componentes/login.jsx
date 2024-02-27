import React from 'react'
import { FormLogin } from '../Formulario/formLogin.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/authProvider.jsx'

export const Login = () => {

  const { authState } = useContext(AuthContext)


  if (authState.islogged) return (<Navigate to={"/"} />)
  return (
    <FormLogin />
  )
}
