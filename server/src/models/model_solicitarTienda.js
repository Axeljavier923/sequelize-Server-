import { sequelize } from '../database/db.js'
import { DataTypes } from 'sequelize'
import { provinceModel } from './model_provincia.js'
import { locationModel } from './model_departamento.js'
import { tiendaModel } from './model_tienda.js'
import { Auth } from './model_auth.js'

export const solicitarTienda = sequelize.define(
    'requestTienda',
    {
        name_tienda: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cuit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        provinceId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'provinces',
              key: 'id',
            }
        },
        productoId: { 
            type: DataTypes.INTEGER,
            allowNull: true,
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
        locationId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'locations',
              key: 'id',
            }
          },
    }
)


export async function addRequestCine(solicitud, authId) {
    const data = {...solicitud, authId}
    return await solicitarTienda.create(data)
}

export async function getRequestCine() {
    return await solicitarTienda.findAll({
        include: [
            {
                model: provinceModel
            },
            {
                model: locationModel
            }
        ]
    })
}


export async function deleteRequestCine(id) {
    return await solicitarTienda.destroy({
        where: {
            id: id
        }
    })
}

export async function acceptRequest(id) {
    const request = await solicitarTienda.findOne({
        where: {
            id: id
        }
    })

    if (!request) {
        console.log('Solicitud no encontrada');
        return null; 
    }

  
    const addTienda = await tiendaModel.create({
        id: null,
        name: request.name_tienda,
        address: request.address,
        email: request.email,
        phone: request.phone,
        cuit: request.cuit,
        provinceId: request.provinceId,
        locationId: request.locationId,
        authId: request.authId,
    })

    if (request.authId) {
        const user = await Auth.findOne({
            where: {
                id: request.authId
            }
        });

        if (user) {
            // Actualizar el campo supermercadoId del usuario
            await user.update({ supermercadoId: true });
        }
    }

//     const user = await Auth.findOne({
//         where: {
//             id: request.authId
//         }
//     })
 

 
//    await user.update({supermercadoId: addTienda.id})

    const delRequest = await solicitarTienda.destroy({
        where: {
            id: request.id
        }
    })

    return addTienda
}