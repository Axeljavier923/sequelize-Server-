import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import ListaAuth from '../componentes/listaAuth';
import ListaClientes from '../componentes/listaClientes';
import ListaEmpleados from '../componentes/listaEmpleados';
import ListaProductos from '../componentes/listaProductos';
import {Register} from '../componentes/register';
import {Login} from '../componentes/login';
import CrearCliente from '../componentes/crearCliente';
import CrearEmpleado from '../componentes/crearEmpleado';
import CrearProducto from '../componentes/crearProducto';
import EditarEmpleado from '../componentes/editarEmpleado';
import EliminarEmpleado from '../componentes/eliminarEmpleado';
import EditarCliente from '../componentes/editarCliente';
import EliminarCliente from '../componentes/eliminarCliente';
import EditarProducto from '../componentes/editarProducto';
import EliminarProducto from '../componentes/eliminarProducto';
import { SolicitudTienda } from '../Formulario/formEnvioSolicitud';
import { RegisterTienda } from '../pages/registerTienda';
import { TodasSolicitudes } from '../pages/todasSolicitudes';
import { ManejarSolicitudes } from '../pages/manejarSolicitudes';
import { VerSolicitud } from '../submit/verSolicitud';
import { FormRecuperarClave } from '../Formulario/formRecuperarContraseña';
import ListaVentaProductos from '../componentes/listaVentaProductos';
import CrearVentaProducto from '../componentes/crearVentaProducto';
import Perfil from '../Headers/perfil';
import Soporte from '../Formulario/formSoporte';
import { FormObtenerCorreo } from '../Formulario/formObtenerCorreo';
import { Codigo } from '../componentes/codigo';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/editar-perfil/:id' element={<Perfil />} />
        <Route path='/lista_auth' element={<ListaAuth />} />
        <Route path='/lista_clientes' element={<ListaClientes />} />
        <Route path='/lista_empleados' element={<ListaEmpleados />} />
        <Route path='/lista_productos' element={<ListaProductos />} />
        <Route path='/listaVentaProducto' element={<ListaVentaProductos/>} />
        <Route path='/solicitudes' element={<ManejarSolicitudes />} />
        <Route path='/solicitudTienda' element={<SolicitudTienda />} />
        <Route path='/registrar-tienda' element={<RegisterTienda/>} />
        <Route path='/codigo' element={<Codigo/>} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/soporte' element={<Soporte />} />
        <Route path='/getCorreo' element={<FormObtenerCorreo />} />
        <Route path='/recuperar_clave/' element={<FormRecuperarClave />} />
        <Route path='/crear_venta' element={<CrearVentaProducto />} />
        <Route path='/empleado/:empleadoId/crear_cliente' element={<CrearCliente />} />
        <Route path='/crear_empleado' element={<CrearEmpleado />} />
        <Route path='/cliente/:clientId/crear_producto' element={<CrearProducto />} />
        <Route path='/cliente/:clientId/crear_producto' element={<TodasSolicitudes />} />
        <Route path='/cliente/:clientId/crear_producto' element={<ManejarSolicitudes />} />

        <Route path='/editar_empleado/:empleadoId' element={<EditarEmpleado />} />
        <Route path='/editar_Cliente/:id' element={<EditarCliente/>} />
        <Route path='/editar_producto/:id' element={<EditarProducto />} />

        
        <Route path='/eliminar_empleado/:empleadoId' element={<EliminarEmpleado />} />
        <Route path='/eliminar_cliente/:id' element={<EliminarCliente />} />
        <Route path='/eliminar_producto/:id' element={<EliminarProducto />} />
        <Route path="/verSolicitud/:id" element={<VerSolicitud/>} />

      </Routes>
    </BrowserRouter>
  );
};