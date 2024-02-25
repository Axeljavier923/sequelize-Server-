import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';  

const Header = () => {
  return (
    <div className="header-container">
      <h1>Mi Aplicación</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/lista_auth'>Lista de Registrados</Link></li>
          <li><Link to='/lista_clientes'>Lista de Clientes</Link></li>
          <li><Link to='/lista_empleados'>Lista de Empleados</Link></li>
          <li><Link to='/lista_productos'>Lista de Productos</Link></li>

          <li><Link to='/login'>login</Link></li>
          <li><Link to='/register'>register</Link></li>
          <li><Link to='/crear_empleado'>crear empleado</Link></li>
          <li><Link to='/crear_cliente'>crear cliente</Link></li>
          <li><Link to='/crear_producto'>crear producto</Link></li>
          <li><Link to='/editar_empleado'>Editar empleado</Link></li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
