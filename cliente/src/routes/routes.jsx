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
import { Solicitudes } from '../componentes/solicitudes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />

        <Route path='/lista_auth' element={<ListaAuth />} />
        <Route path='/lista_clientes' element={<ListaClientes />} />
        <Route path='/lista_empleados' element={<ListaEmpleados />} />
        <Route path='/lista_productos' element={<ListaProductos />} />
        <Route path='/solicitudes' element={<Solicitudes />} />


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/empleado/:empleadoId/crear_cliente' element={<CrearCliente />} />
        <Route path='/crear_empleado' element={<CrearEmpleado />} />
        <Route path='/cliente/:clientId/crear_producto' element={<CrearProducto />} />

        <Route path='/editar_empleado/:empleadoId' element={<EditarEmpleado />} />
        <Route path='/editar_Cliente/:id' element={<EditarCliente/>} />
        <Route path='/editar_producto/:id' element={<EditarProducto />} />

        
        <Route path='/eliminar_empleado/:empleadoId' element={<EliminarEmpleado />} />
        <Route path='/eliminar_cliente/:id' element={<EliminarCliente />} />
        <Route path='/eliminar_producto/:id' element={<EliminarProducto />} />

      </Routes>
    </BrowserRouter>
  );
};