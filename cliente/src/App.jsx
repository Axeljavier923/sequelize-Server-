import { useState, useEffect } from "react";
import { Footer } from "./Footer/footer";
import ListaVentaProductos from "./componentes/listaVentaProductos";
import { Filtros } from "./filtros/filtro";
import { CustomFetch } from "./api/customFeth";
import  Header  from "./Headers/header";

const App = () => {
  const [tiendas, setTiendas] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    (
      async () => {
        // const dataMovies = await CustomFetch('http://localhost:3000/auth/users/', 'GET')
        const data = await CustomFetch('http://localhost:3000/ventaProducto', 'GET')

        setTiendas(data)

        // setMovies(dataMovies)
      }
    )()
  }, [])

  return (
    <div>
      <Header onSearchChange={setSearchBar} />
      <main>
        <Filtros
          setSearchBar={setSearchBar}
          searchBar={searchBar}
          tiendas={tiendas}
        />
      </main>
      <ListaVentaProductos setSearchBar={setSearchBar} />
      <Footer />
    </div>
  );
};
export default App
