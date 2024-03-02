// En associate.js
import { Cliente } from "../models/model_client.js";
import { Producto } from "../models/model_producto.js";
import { Empleado } from "../models/model_empleado.js";
import { Auth } from "../models/model_auth.js";
import {locationModel, createLocation} from "../models/model_departamento.js";
import {provinceModel, createProvince} from "../models/model_provincia.js";
import { solicitarTienda } from "../models/model_solicitarTienda.js";
import {tiendaModel} from "../models/model_tienda.js";

export const associate = async () => {
  try {
    // Crear las tablas
    await Cliente.sync({ force: false });
    await Producto.sync({ force: false });
    await Empleado.sync({ force: false });
    await solicitarTienda.sync({ force: true });


    
    // Asociar modelos
    Cliente.hasMany(Producto, {
      foreignKey: 'clienteId',
      sourceKey: 'id',
    });

    Empleado.hasMany(Cliente, {
      foreignKey: 'empleadoId',
      sourceKey: 'id',
    });

//     //Province and location
provinceModel.hasMany(locationModel)
locationModel.belongsTo(provinceModel)

//requestsTienda
provinceModel.hasMany(solicitarTienda)
solicitarTienda.belongsTo(provinceModel)

locationModel.hasMany(solicitarTienda)
solicitarTienda.belongsTo(locationModel)


//cinema and privince/location
provinceModel.hasMany(tiendaModel)
tiendaModel.belongsTo(provinceModel)

locationModel.hasMany(tiendaModel)
tiendaModel.belongsTo(locationModel)

//Request and user 
Auth.hasMany(solicitarTienda)
solicitarTienda.belongsTo(Auth)

    console.log('Se crearon las tablas y se asociaron los modelos.');

  } catch (error) {
    console.error('Error al sincronizar las tablas y asociar los modelos:', error);
  }
};

export async function dataPreloaded() {
  await createProvince()
  await createLocation()
}