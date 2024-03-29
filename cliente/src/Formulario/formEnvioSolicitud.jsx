import React from 'react'
import '../stilos/formSoporte.css';
import { AuthContext } from '../context/authProvider';
import { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Header from '../Headers/header';
import { Footer } from '../Footer/footer';
// import FormCorreo from './formCorreo';

export const SolicitudTienda = () => {
  const {authState} = useContext(AuthContext)
  const navigate = useNavigate();
  
  return (
    <div>
    <Header/>
    <div className='formularioSoporte'>
      <div className="container">
        <div className='row'>
          <div className="col-12 col-md-6 col-sm-12">
            <div className='mt-5'>
              {/* <h2 className='titleSupport text-center'>Soporte al Cliente</h2>
              <p className='textos'>
                Nuestro dedicado equipo de soporte revisará tu consulta con prontitud y se comunicará contigo a la brevedad.
                Si tu solicitud requiere atención urgente o asistencia inmediata,
                no dudes en contactarnos por teléfono o a través de nuestro servicio de chat en vivo.
              </p> */}

              <div className='mt-5'>
                <h4 className='text-center'>Solicitud de Permisos para subir productos en la tienda web</h4>
                <p>
                  Si deseas compartir tus productps, puedes enviarnos una solicitud y la revisaremos lo más rápido posible.
                </p>
              </div>
            </div>

          </div>
          <div className="col">
            <div className='formSoporteBox container mt-5'>
              <form className='formularioItems'>
                <h5 className='titleForm mt-3'>¡Contactate con nosotros!</h5>
                <div className="row">
                </div>



                {/* <div className='row mt-2'>
                  <div className='row justify-content-center' >
                    <label className='text-center'>Correo Electrónico:</label>
                    <input
                      className='w-75'
                      type="email"
                      name="email"

                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='row' >
                    <label className='text-center'>Asunto:</label>
                    <input
                      className='w-100'
                      type="text"
                      name="name"

                    />
                  </div>

                </div>
                <div className='row justify-content-center'>

                  <div className='row'>
                    <label className='text-center'>Mensaje:</label>
                    <textarea
                      className='rounded'
                      name=""
                      id=""
                      cols="30"
                      rows="10">

                    </textarea>
                  </div>
                </div> */}
                      
                <div className="row">
                  {/* <div className="col">
                    <button className='botonSoporte btn mt-4 mb-2' type="submit">Enviar</button>
                  </div> */}
                  <div className="col">
                    <button onClick={e => {
                      e.preventDefault()
                      if(authState.cinema){
                       return Swal.fire({
                          title: 'Error',
                          text: '¡Ya puedes compartir tu cartelera de películas!',
                          icon: 'error',
                          width: '50%',
                          padding: '1rem',
                          background: '#ff0000',
                          color:'white',
                          grow: 'row'
                        })
                      }
                       if(authState.islogged) {
                         return navigate('/registrar-tienda')
                       }
                      Swal.fire({
                        title: 'Error',
                        text: '¡Debes iniciar sesion!',
                        icon: 'error',
                        width: '50%',
                        padding: '1rem',
                        background: '#DBCBCB',
                        grow: 'row'
                      })
                    }} className='botonSoporte btn mt-4 mb-2'>Solicitud</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>


  )
}
