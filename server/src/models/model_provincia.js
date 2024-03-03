import { DataTypes } from 'sequelize'
import {sequelize} from '../database/db.js'

export const provinceModel = sequelize.define(
    'province',
    { id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
  },
      name: {
      type: DataTypes.STRING,
      allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: "provinces",
  }
)

export async function createProvince() {
    const provinceToCreate =
      [
        {
          "id": 1,
          "name": "Formosa",
        },
        {
          "id": 2,
          "name": "Chaco",
        },
        {
          "id": 3,
          "name": "Corrientes",
        },
        {
          "id": 4,
          "name": "Entre rios",
        },
        {
          "id": 5,
          "name": "Salta",
        },
        {
          "id": 6,
          "name": "Jujuy",
        },
        {
          "id": 7,
          "name": "Salta",
        },
        {
          "id": 8,
          "name": "Catamarca",
        },
        {
          "id": 9,
          "name": "Tucuman",
        },
        {
          "id": 10,
          "name": "Santiago del estero",
        },
        {
          "id": 11,
          "name": "La rioja",
        },
        {
          "id": 12,
          "name": "Santa fe",
        },
        {
          "id": 13,
          "name": "San juan",
        },
        {
          "id": 14,
          "name": "San luis",
        },
        {
          "id": 15,
          "name": "Mendoza",
        },
        {
          "id": 16,
          "name": "Neuquen",
        },
        {
          "id": 17,
          "name": "La Pampa",
        },
        {
          "id": 18,
          "name": "Buenos aires",
        },
        {
          "id": 19,
          "name": "Rio Negro",
        },
        {
          "id": 20,
          "name": "Chubuth",
        },
        {
          "id": 21,
          "name": "Santa cruz",
        },
        {
          "id": 22,
          "name": "Tierra del fuego",
        },
        {
          "id": 23,
          "name": "Misiones",
        },
        
      ]
  
    for (const provinceData of provinceToCreate) {
      const existingProvince = await provinceModel.findOne({ where: { name: provinceData.name } });
  
      if (!existingProvince) {
        await provinceModel.create(provinceData);
      }
    }
  }

export async function getAllProvinces(){
    return await provinceModel.findAll()
}