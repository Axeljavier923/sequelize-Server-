import { useEffect, useState } from 'react';
import '../stilos/formTienda.css';
import { SolicitudTiendaSubmit } from '../submit/submit_solicitudTienda.jsx';
import { CustomFetch } from '../api/customFeth.js';
import { Footer } from '../Footer/footer.jsx';

export const FormRegisterTienda = ({ province }) => {
    const [formState, setFormState] = useState({
        name_tienda: '',
        provinceId: 'provincia', 
        locationId: 'localidad',
        address: '',
        email: '',
        phone: '',
        cuit: ''
    });
    const [provinces, setProvinces] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        setProvinces(province);
    }, [province]);

    const handleChange = async (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });

        if (name === 'provinceId') {
            try {
                if (value > 0) {
                    const data = await CustomFetch(`http://localhost:3000/departamentos/${value}`, 'GET');
                    setLocations(data);
                } else {
                    setLocations([]);
                }
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        }
        console.log(formState);
    };

    return (
        <>
            <div className='contenedorRegisterCine'>
                <div className='formBoxRegisterCine'>
                    <form name='formregister'>
                        <h2 className='mt-2 text-center'>Registro de tiendas: Solicitud de aprobación</h2>
                        <div className='row'>
                            <div className='col col-12 col-md-6 col-sm-12 d-flex justify-content-center'>
                                <div className="inputBoxRegister row">
                                    <input
                                        name='name_cinema'
                                        onChange={handleChange}
                                        value={formState.name_cinema}
                                        placeholder='Nombre de la tienda'
                                        type="text"
                                        autoComplete='off'
                                    />
                                </div>
                            </div>
                            <div className='col col-12 col-md-6 col-sm-12 d-flex justify-content-center'>
                                <div className='inputBoxRegister row'>
                                    <label htmlFor=''>Ubicación</label>
                                    <select
                                        onChange={handleChange}
                                        name='provinceId'
                                        value={formState.provinceId}
                                        className='w-50'
                                        id=''
                                    >
                                        <option disabled value='provincia'>
                                            Seleccione una provincia
                                        </option>
                                        {provinces.map((province) => (
                                            <option
                                                name='provinceId'
                                                value={province.id}
                                                id={province.id}
                                                key={province.id}
                                            >
                                                {province.name}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        onChange={(e) => setFormState({ ...formState, locationId: e.target.value })}
                                        name='locationId'
                                        value={formState.locationId}
                                        className='w-50'
                                        id=''
                                    >
                                        <option disabled value='localidad'>
                                            Seleccione una localidad
                                        </option>
                                        {locations.map((location) => (
                                            <option key={location.id} value={location.id}>
                                                {location.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-12 col-md-6 col-sm-12 d-flex justify-content-center'>
                                <div className="inputBoxRegister row">
                                    <input
                                        onChange={handleChange}
                                        name='address'
                                        value={formState.address}
                                        placeholder='Dirección'
                                        type="text"
                                        autoComplete='off'
                                    />
                                </div>
                            </div>
                            <div className='col col-12 col-md-6 col-sm-12 d-flex justify-content-center'>
                                <div className="inputBoxRegister row">
                                    <input
                                        onChange={handleChange}
                                        name='email'
                                        value={formState.email}
                                        placeholder='Email'
                                        type="text"
                                        autoComplete='off'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-12 col-md-6 d-flex justify-content-center'>
                                <div className="inputBoxRegister row">
                                    <input
                                        onChange={handleChange}
                                        name='phone'
                                        value={formState.phone}
                                        placeholder='Teléfono'
                                        type="number"
                                        autoComplete='off'
                                    />
                                </div>
                            </div>
                            <div className='col col-12 col-md-6 d-flex justify-content-center'>
                                <div className="inputBoxRegister row">
                                    <input
                                        onChange={handleChange}
                                        name='cuit'
                                        value={formState.cuit}
                                        placeholder='CUIT de la empresa'
                                        type="number"
                                        autoComplete='off'
                                    />
                                </div>
                            </div>
                        </div>
                        <SolicitudTiendaSubmit formState={formState} />
                    </form>
                </div>
            <Footer/>
            </div>
        </>
    );
};
