import { sequelize } from '../database/db.js';
import { DataTypes, } from 'sequelize';

export const tiendaModel = sequelize.define(
  'Tiendas',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cuit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productoId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'id',
      }
  },
  authId: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'auth',
      key: 'id',
    }
},
empleadoId: { 
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'empleados',
    key: 'id',
  }
},
clienteId: { 
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'clientes',
    key: 'id',
  }
},
provinceId: { 
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'provinces',
    key: 'id',
  }
},
  },
  {
    timestamps: true,
  }
);

//services
export async function addTienda(tienda) {
  const newTienda = await tiendaModel.create(tienda);

  return newTienda;
}

export async function getAllTienda() {
  return await tiendaModel.findAll() ?? null;
}


export async function getTiendaById(tiendaId) {
  const tienda = await tiendaModel.findOne({
    where: {
      id: tiendaId
    }
  });

  if (!tienda) {
    return null;
  }
  return tienda;
}

export async function deleteTienda(id) {

  const tienda = await tiendaModel.findByPk(id);
  if (!tienda) {
    return null;
  }
  await tienda.destroy();
  return tienda;
}

export async function updateTienda(id, tienda) {
  const tiendaToUpdate = await tiendaModel.findByPk(id);
  if (!tiendaToUpdate) {
    return null;
  }
  const tiendaUpdated = await tiendaToUpdate.update(tienda);
  return tiendaUpdated;
}
