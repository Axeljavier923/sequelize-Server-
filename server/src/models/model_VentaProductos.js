import { sequelize } from '../database/db.js';
import { DataTypes } from 'sequelize';

export const tiendaModel = sequelize.define(
  'VentaProducto',
  {
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
      },
    name_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
//     cuit: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     productoId: { 
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'producto',
//         key: 'id',
//       }
//   },
//   authId: { 
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'auth',
//       key: 'id',
//     }
// },
// empleadoId: { 
//   type: DataTypes.INTEGER,
//   allowNull: true,
//   references: {
//     model: 'empleados',
//     key: 'id',
//   }
// },
// clienteId: { 
//   type: DataTypes.INTEGER,
//   allowNull: true,
//   references: {
//     model: 'clientes',
//     key: 'id',
//   }
// },
// provinceId: { 
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   references: {
//     model: 'provinces',
//     key: 'id',
//   }
// },
// locationId: { 
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   references: {
//     model: 'locations',
//     key: 'id',
//   }
// },
  },
  {
    timestamps: true,
  }
 );

// //services
// export async function addTienda(tienda) {
//   const newTienda = await tiendaModel.create(tienda);

//   return newTienda;
// }

// // export async function addTienda(tienda, authId) {
// //   const data = {...tienda, authId};
// //   const newTienda = await tiendaModel.create(data);
// //   return newTienda;
// // }


// export async function getAllTienda() {
//   return await tiendaModel.findAll() ?? null;
// }


// export async function getTiendaById(id) {
//   const tienda = await tiendaModel.findOne({
//     where: {
//       id
//     }
//   });

//   if (!tienda) {
//     return null;
//   }
//   return tienda;
// }

// export async function deleteTienda(id) {

//   const tienda = await tiendaModel.findOne({
//     where:{
//       id
//     }
//   });
//   if (!tienda) {
//     return null;
//   }
//   await tienda.destroy();
//   return tienda;
// }

// export async function updateTienda(id, tienda) {
//   const tiendaToUpdate = await tiendaModel.findByPk(id);
//   if (!tiendaToUpdate) {
//     return null;
//   }
//   const tiendaUpdated = await tiendaToUpdate.update(tienda);
//   return tiendaUpdated;
// }
