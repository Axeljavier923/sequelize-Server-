import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import ListaAuth from '../componentes/listaAuth';
import ListaClientes from '../componentes/listaClientes';
import ListaEmpleados from '../componentes/listaEmpleados';
import ListaProductos from '../componentes/listaProductos';
import Register from '../componentes/register';
import Login from '../componentes/login';
import CrearCliente from '../componentes/crearCliente';
import CrearEmpleado from '../componentes/crearEmpleado';
import CrearProducto from '../componentes/crearProducto';
import EditarEmpleado from '../componentes/editarEmpleado';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/lista_auth' element={<ListaAuth />} />
        <Route path='/lista_clientes' element={<ListaClientes />} />
        <Route path='/lista_empleados' element={<ListaEmpleados />} />
        <Route path='/lista_productos' element={<ListaProductos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/crear_cliente' element={<CrearCliente />} />
        <Route path='/crear_empleado' element={<CrearEmpleado />} />
        <Route path='/crear_producto' element={<CrearProducto />} />
        <Route path='/editar_empleado/:id' element={<EditarEmpleado />} />
      </Routes>
    </BrowserRouter>
  );
};