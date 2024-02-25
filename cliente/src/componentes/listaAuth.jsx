import React, { useState, useEffect } from 'react';
import Header from '../Headers/header';

function ListaAuth() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feth = await fetch("http://localhost:3000/auth/users");
        const dataAuth = await feth.json();
        setAuth(dataAuth.listaUsuarios);
        console.log('Datos de autenticación obtenidos:', dataAuth.listaUsuarios);
      } catch (error) {
        console.error('Error de solicitud para obtener datos de autenticación:', error);
      }
    };

    fetchData();
  }, []); 
  return (
    <div>
      <Header/>
      {/* <button onClick={fetchData}>aqui</button> */}
    {auth && auth.map((authItem) => (
      <div key={authItem.id}>
        <p>ID: {authItem.id}</p>
        <p>Correo: {authItem.correo}</p>
        <p>Password: {authItem.password}</p>
        <hr/>
      </div>
    ))}
    </div>
  );
}

export default ListaAuth;
