import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginButtons } from './botonLoginRegister.jsx';
import { LogoutButton  } from './logoatButton.jsx';
import { AuthContext } from '../context/authProvider.jsx';
import '../stilos/header.css';  


const Header = () => {
  const { authState } = useContext(AuthContext)

  // if (!authState || !authState.islogged) {
  //   return null; // O maneja el caso en el que authState no está definido o el usuario no está autenticado
  // }

  // const [shearchValue, setSearchValue] = useState('')

  // const handleShear = (e) => {
  //   setSearchValue(e.target.value)
  // }

  // const submitSearch = (e) => {
  //   e.preventDefault();

  //   setSearchBar(shearchValue)
  //   console.log(shearchValue)
  // }
  
  return (
    <div className="header-container">
      <h1>Mi Aplicación</h1>
      <header>
        <ul className="nav-links">
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/lista_auth'>Lista de Registrados</Link></li>
          <li><Link to='/lista_clientes'>Lista de Clientes</Link></li>
          <li><Link to='/lista_empleados'>Lista de Empleados</Link></li>
          <li><Link to='/lista_productos'>Lista de Productos</Link></li>

          <li><Link to='/login'>login</Link></li>
          <li><Link to='/register'>register</Link></li>
          <li><Link to='/crear_empleado'>crear empleado</Link></li>
        </ul>
        <div className="buttons d-flex m-1">
             {authState.islogged && <LogoutButton />}{/* Muestra el botón de cierre de sesión solo si existe un token */}
            {!authState.islogged && <LoginButtons />} {/*Muestra los botones de inicio de sesión y registro si no hay un token */}
          </div>
      </header>
    </div>
  );
};

export default Header;
