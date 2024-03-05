import { Footer } from "./Footer/footer";
import Header from "./Headers/header";
import ListaVentaProductos from "./componentes/listaVentaProductos";

const App = () => {
  console.log('Aplicación iniciada');
  return (
    <div>
      <Header/>
      <ListaVentaProductos/>
      <Footer/>
    </div>
  );
};
export default App
