import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginButtons } from './botonLoginRegister.jsx';
import { LogoutButton  } from './logoatButton.jsx';
import { AuthContext } from '../context/authProvider.jsx';
import '../stilos/header.css';  

const Header = () => {
  const { authState } = useContext(AuthContext);
  console.log("authState", authState)

  return (
    <div className="header-container">
      <h1>Mi Aplicación</h1>
      <header>
        <ul className="nav-links">
          <li><Link to='/'>Inicio</Link></li>
          {authState.admin && <li><Link to='/solicitudes'>Solicitudes</Link></li>}
          <li><Link to='/lista_auth'>Lista de Registrados</Link></li>
          <li><Link to='/lista_clientes'>Lista de Clientes</Link></li>
          <li><Link to='/lista_empleados'>Lista de Empleados</Link></li>
          <li><Link to='/lista_productos'>Lista de Productos</Link></li>
          <li><Link to='/crear_empleado'>Crear Empleado</Link></li>
        </ul>
        <div className="buttons d-flex m-1">
          {authState.islogged && <LogoutButton />}
          {!authState.islogged && <LoginButtons />}
        </div>
      </header>
    </div>
  );
};

export default Header;
