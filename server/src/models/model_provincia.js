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
        }
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