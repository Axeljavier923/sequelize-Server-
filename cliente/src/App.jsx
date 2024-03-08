import { useState } from "react";
import { Footer } from "./Footer/footer";
import Header from "./Headers/header";
import ListaVentaProductos from "./componentes/listaVentaProductos";

const App = () => {
  const [searchBar, setSearchBar] = useState('');
  console.log('Aplicación iniciada');
  return (
    <div>
       <Header
        setSearchBar={setSearchBar}/>
      <ListaVentaProductos/>
      <Footer/>
    </div>
  );
};
export default App
