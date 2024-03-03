// En associate.js
import { Cliente } from "../models/model_client.js";
import { Producto } from "../models/model_producto.js";
import { Empleado } from "../models/model_empleado.js";
import { Auth } from "../models/model_auth.js";
import {locationModel, createLocation} from "../models/model_departamento.js";
import {provinceModel, createProvince} from "../models/model_provincia.js";
import { solicitarTienda } from "../models/model_solicitarTienda.js";
import {tiendaModel} from "../models/model_tienda.js";

// export async function dataPreloaded() {
//   await createProvince()
//   await createLocation()
// }

export const associate = async () => {
  try {
    // Crear las tablas
    await Cliente.sync({ force: false });
    await Producto.sync({ force: false });
    await Empleado.sync({ force: false });
    await Auth.sync({ force: false });
    await solicitarTienda.sync({ force: false });
    await locationModel.sync({ force: false});
    await provinceModel.sync({ force: false });



    // Crear provincias y ubicaciones
    await createProvince();
    await createLocation();
    
    // Asociar modelos
    Cliente.hasMany(Producto, {
      foreignKey: 'clienteId',
      sourceKey: 'id',
    });

    Empleado.hasMany(Cliente, {
      foreignKey: 'empleadoId',
      sourceKey: 'id',
    });

// // Relación entre Empleado y tiendaModel
Empleado.hasMany(tiendaModel, {
  foreignKey: 'empleadoId', // La clave foránea en la tabla tiendaModel
  sourceKey: 'id', // La clave primaria en la tabla Empleado
});

tiendaModel.belongsTo(Empleado, {
  foreignKey: 'empleadoId', // La clave foránea en la tabla tiendaModel
  targetKey: 'id', // La clave primaria en la tabla Empleado
});

// // Relación entre Cliente y tiendaModel
Cliente.hasMany(tiendaModel, {
  foreignKey: 'clienteId', // La clave foránea en la tabla tiendaModel
  sourceKey: 'id', // La clave primaria en la tabla Cliente
});

tiendaModel.belongsTo(Cliente, {
  foreignKey: 'clienteId', // La clave foránea en la tabla tiendaModel
  targetKey: 'id', // La clave primaria en la tabla Cliente
});

// // Relación entre Producto y tiendaModel
Producto.hasMany(tiendaModel, {
  foreignKey: 'productoId', // La clave foránea en la tabla tiendaModel
  sourceKey: 'id', // La clave primaria en la tabla Producto
});

tiendaModel.belongsTo(Producto, {
  foreignKey: 'productoId', // La clave foránea en la tabla tiendaModel
  targetKey: 'id', // La clave primaria en la tabla Producto
});

// Relación entre Auth y solicitarTienda
Auth.hasMany(solicitarTienda, {
  foreignKey: 'authId',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

solicitarTienda.belongsTo(Auth, {
  foreignKey: 'authId',
  targetKey: 'id',
  onDelete: 'CASCADE',
});

// //     //Province and location
provinceModel.hasMany(locationModel, {
  foreignKey: 'provinceId', // La clave foránea en la tabla locationmodel
  sourceKey: 'id', // La clave primaria en la tabla provinciamodel
});

locationModel.belongsTo(provinceModel, {
  foreignKey: 'provinceId', // La clave foránea en la tabla locationamodel
  targetKey: 'id', // La clave primaria en la tabla provinciamodel
});


// Relación entre Auth y Tienda
Auth.hasMany(tiendaModel, {
  foreignKey: 'authId',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

tiendaModel.belongsTo(Auth, {
  foreignKey: 'authId',
  targetKey: 'id',
  onDelete: 'CASCADE',
});



// //requestsTienda, provincia 
provinceModel.hasMany(solicitarTienda, {
  foreignKey: 'provinceId', // La clave foránea en la tabla SolitartiendaModel
  sourceKey: 'id', // La clave primaria en la tabla provincia
});

solicitarTienda.belongsTo(provinceModel, {
  foreignKey: 'provinceId', // La clave foránea en la tabla SolicitartiendaModel
  targetKey: 'id', // La clave primaria en la tabla provincia
});

// //requestsTienda, localidad 
locationModel.hasMany(solicitarTienda, {
  foreignKey: 'locationId', // La clave foránea en la tabla SolitartiendaModel
  sourceKey: 'id', // La clave primaria en la tabla localidad
});

solicitarTienda.belongsTo(locationModel, {
  foreignKey: 'locationId', // La clave foránea en la tabla SolicitartiendaModel
  targetKey: 'id', // La clave primaria en la tabla localidad
});

// //tienda and privince/
provinceModel.hasMany(tiendaModel, {
  foreignKey: 'provinceId', // La clave foránea en la tabla tiendaModel
  sourceKey: 'id', // La clave primaria en la tabla provincia
});

tiendaModel.belongsTo(provinceModel, {
  foreignKey: 'provinceId', // La clave foránea en la tabla tiendaModel
  targetKey: 'id', // La clave primaria en la tabla provincia
});

// //tienda and location
locationModel.hasMany(tiendaModel, {
  foreignKey: 'locationId', // La clave foránea en la tabla tiendaModel
  sourceKey: 'id', // La clave primaria en la tabla localidad
});

tiendaModel.belongsTo(locationModel, {
  foreignKey: 'locationId', // La clave foránea en la tabla tiendaModel
  targetKey: 'id', // La clave primaria en la tabla localidad
});

    console.log('Se crearon las tablas y se asociaron los modelos.');

  } catch (error) {
    console.error('Error al sincronizar las tablas y asociar los modelos:', error);
  }
};

