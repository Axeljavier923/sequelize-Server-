import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginButtons } from './botonLoginRegister.jsx';
import { LogoutButton  } from './logoatButton.jsx';
import { AuthContext } from '../context/authProvider.jsx';
import useInfoUserData from './infoUser.jsx';
import '../stilos/header.css';  

const Header = ({ setSearchBar }) => {
  const { authState } = useContext(AuthContext);
  const { islogged, admin, supermercadoId, fotoUser } = authState;
  //buscador
  const [shearchValue, setSearchValue] = useState('')

  const handleShear = (e) => {
    setSearchValue(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault();

    setSearchBar(shearchValue)
    console.log(shearchValue)
  }

  const userData = useInfoUserData(authState.token, islogged);  

  const defaultProfileImage = 'img/fotoPerfil.png';

  // console.log("authstate:", authState);

  const handleEditProfile = () => {
    const confirmEdit = window.confirm('¿Quieres editar tu perfil?');
    if (confirmEdit && userData && userData.id) {
      console.log("userdata.id", userData.id);
      const editProfileRoute = `/editar-perfil/${userData.id}`;
      history.push(editProfileRoute);
    }
  };


  return (
    <div className="header-container">
      <h1>Mi Aplicación</h1>
      <header>
      <div className="user-profile">
          {userData && (
            <div className="user-info">
              <Link to={`/editar-perfil/${userData.id}`} onClick={handleEditProfile}>
                <img
                 src={fotoUser ? `img_foto/${fotoUser}` : defaultProfileImage}
                  alt="Foto de perfil"
                  className="profile-image"
                  onError={(e) => {
                    e.target.src = defaultProfileImage; 
                  }}
                />
              </Link>
            </div>
          )}
        <ul className="nav-links">
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/soporte'>Soporte</Link></li>
          <li><Link to='/solicitudTienda'>Solicitud tienda</Link></li>
          {authState.admin && <li><Link to='/solicitudes'>Solicitudes</Link></li>}
          <li><Link to='/crear_venta'>Venta</Link></li>
          {authState.admin &&<li><Link to='/lista_auth'>Lista de Registrados</Link></li>}
          {authState.supermercadoId &&<li><Link to='/lista_clientes'>Lista de Clientes</Link></li>}
          {authState.supermercadoId &&<li><Link to='/lista_empleados'>Lista de Empleados</Link></li>}
          {authState.supermercadoId &&<li><Link to='/lista_productos'>Lista de Productos</Link></li>}
         {authState.supermercadoId &&<li><Link to='/crear_empleado'>Crear Empleado</Link></li>}
        </ul>

       

        <div className="buttons d-flex m-1">
          {authState.islogged && <LogoutButton />}
          {!authState.islogged && <LoginButtons />}

          <div className='d-flex justify-content-center'>
              <div>
              <form className="d-flex prueba" id='Buscador' role="search">
                  <input
                    autoComplete='off'
                    className="form-control me-2 borde-colorBusqueda color-fondo"
                    id='buscador'
                    type="search"
                    placeholder="Busca tu pelicula"
                    aria-label="Search"
                    onChange={handleShear}
                  />
                  <button
                    className="btn btn-outline-secondar borde-colorBusqueda color-fondo"
                    type="submit"
                    onClick={submitSearch}
                  >
                    <div className="mt-2"><box-icon name='search-alt' color='#ffffff' ></box-icon></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;