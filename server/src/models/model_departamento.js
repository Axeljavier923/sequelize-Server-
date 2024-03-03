import { DataTypes } from 'sequelize'
import {sequelize} from '../database/db.js'

export const locationModel = sequelize.define(
    'location',
    {
        name: {
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
    },
    {
        timestamps: false,
        tableName: "locations",
    }
)

export async function createLocation() {
    const locationToCreate =
      [
        //departamentos de corrientes
        { "id": 1, "name": "Formosa", "provinceId": 1 },
        {"id": 2, "name": "Bermejo", "provinceId": 1},
        {"id": 3, "name": "Laishí", "provinceId": 1},
        {"id": 4, "name": "Matacos","provinceId": 1},
        {"id": 5, "name": "Patiño","provinceId": 1},
        { "id":6, "name": "Pilagás","provinceId": 1},
        {"id": 7, "name": "Pilcomayo", "provinceId": 1},
        {"id": 8, "name": "Pirané","provinceId": 1},
        {"id": 9, "name": "Ramón Lista", "provinceId": 1},
        //departamentos de chaco
        { "id": 10, "name": "Chaco", "provinceId": 2 },
        { "id": 11, "name": "Bermejo", "provinceId": 2 },
        { "id": 12, "name": "Comandante Fernández", "provinceId": 2 },
        { "id": 13, "name": "Doce de Octubre", "provinceId": 2 },
        { "id": 14, "name": "General Belgrano", "provinceId": 2 },
        { "id": 15, "name": "General Donovan", "provinceId": 2 },
        { "id": 16, "name": "Independencia", "provinceId": 2 },
        { "id": 17, "name": "Libertad", "provinceId": 2 },
        { "id": 18, "name": "Libertador General San Martín", "provinceId": 2 },
        { "id": 19, "name": "Maipú", "provinceId": 2 },
        //departamentos de corrientes
        { "id": 20, "name": "Corrientes", "provinceId": 3 },
        { "id": 21, "name": "Bella Vista", "provinceId": 3 },
        { "id": 22, "name": "Capital", "provinceId": 3 },
        { "id": 23, "name": "Concepción", "provinceId": 3 },
        { "id": 24, "name": "Curuzú Cuatiá", "provinceId": 3 },
        { "id": 25, "name": "Empedrado", "provinceId": 3 },
        { "id": 26, "name": "Esquina", "provinceId": 3 },
        { "id": 27, "name": "General Alvear", "provinceId": 3 },
        { "id": 28, "name": "Goya", "provinceId": 3 },
        { "id": 29, "name": "Itá Ibaté", "provinceId": 3 },
        //departamentos de entre rios
        { "id": 30, "name": "Entre Ríos", "provinceId": 4 },
        { "id": 31, "name": "Paraná", "provinceId": 4 },
        { "id": 32, "name": "Colón", "provinceId": 4 },
        { "id": 33, "name": "Concordia", "provinceId": 4 },
        { "id": 34, "name": "Diamante", "provinceId": 4 },
        { "id": 35, "name": "Federación", "provinceId": 4 },
        { "id": 36, "name": "Federal", "provinceId": 4 },
        { "id": 37, "name": "Gualeguay", "provinceId": 4 },
        { "id": 38, "name": "Gualeguaychú", "provinceId": 4 },
        { "id": 39, "name": "La Paz", "provinceId": 4 },
        //departamentos de Salta
        { "id": 40, "name": "Salta", "provinceId": 5 },
        { "id": 41, "name": "Anta", "provinceId": 5 },
        { "id": 42, "name": "Cachi", "provinceId": 5 },
        { "id": 43, "name": "Cafayate", "provinceId": 5 },
        { "id": 44, "name": "Capital", "provinceId": 5 },
        { "id": 45, "name": "Cerrillos", "provinceId": 5 },
        { "id": 46, "name": "Chicoana", "provinceId": 5 },
        { "id": 47, "name": "Colon", "provinceId": 5 },
        { "id": 48, "name": "Guachipas", "provinceId": 5 },
        { "id": 49, "name": "General Güemes", "provinceId": 5 },
        //departamentos de Jujuy
        { "id": 50, "name": "Jujuy", "provinceId": 6 },
        { "id": 51, "name": "Dr. Manuel Belgrano", "provinceId": 6 },
        { "id": 52, "name": "El Carmen", "provinceId": 6 },
        { "id": 53, "name": "Humahuaca", "provinceId": 6 },
        { "id": 54, "name": "Ledesma", "provinceId": 6 },
        { "id": 55, "name": "Palpalá", "provinceId": 6 },
        { "id": 56, "name": "San Antonio", "provinceId": 6 },
        { "id": 57, "name": "San Pedro", "provinceId": 6 },
        //departamentos de salta
        { "id": 58, "name": "Salta", "provinceId": 7 },
        { "id": 59, "name": "Anta", "provinceId": 7 },
        { "id": 60, "name": "Cachi", "provinceId": 7 },
        { "id": 61, "name": "Cafayate", "provinceId": 7 },
        { "id": 62, "name": "Capital", "provinceId": 7 },
        { "id": 63, "name": "Cerrillos", "provinceId": 7 },
        { "id": 64, "name": "Chicoana", "provinceId": 7 },
        { "id": 65, "name": "General Güemes", "provinceId": 7 },
        //departamentos de Catarmarca
        { "id": 66, "name": "Catamarca", "provinceId": 8 },
        { "id": 67, "name": "Ancasti", "provinceId": 8 },
        { "id": 68, "name": "Andalgalá", "provinceId": 8 },
        { "id": 69, "name": "Antofagasta de la Sierra", "provinceId": 8 },
        { "id": 70, "name": "Belén", "provinceId": 8 },
        { "id": 71, "name": "Capayán", "provinceId": 8 },
        { "id": 72, "name": "Capital", "provinceId": 8 },
        { "id": 73, "name": "El Alto", "provinceId": 8 },
        //departamentos de Tucuman
        { "id": 78, "name": "Capital", "provinceId": 9 },
        { "id": 79, "name": "Burruyacú", "provinceId": 9 },
        { "id": 80, "name": "Chicligasta", "provinceId": 9 },
        { "id": 81, "name": "Famaillá", "provinceId": 9 },
        { "id": 82, "name": "Graneros", "provinceId": 9 },
        { "id": 83, "name": "Juan Bautista Alberdi", "provinceId": 9 },
        { "id": 84, "name": "Lules", "provinceId": 9 },
        //departamentos de Santigo del estero
        { "id": 85, "name": "Capital", "provinceId": 10 },
        { "id": 86, "name": "Alberdi", "provinceId": 10 },
        { "id": 87, "name": "Atamisqui", "provinceId": 10 },
        { "id": 88, "name": "Avellaneda", "provinceId": 10 },
        { "id": 89, "name": "Banda", "provinceId": 10 },
        { "id": 90, "name": "Belgrano", "provinceId": 10 },
        //departamentos de La rioja
        { "id": 91, "name": "Capital", "provinceId": 11 },
        { "id": 92, "name": "Arauco", "provinceId": 11 },
        { "id": 93, "name": "Castro Barros", "provinceId": 11 },
        { "id": 94, "name": "Chamical", "provinceId": 11 },
        { "id": 95, "name": "Chilecito", "provinceId": 11 },
        { "id": 96, "name": "Coronel Felipe Varela", "provinceId": 11 },
        //departamentos de La Santa fe
        { "id": 97, "name": "Rosario", "provinceId": 12 },
        { "id": 98, "name": "Santa Fe", "provinceId": 12 },
        { "id": 99, "name": "Venado Tuerto", "provinceId": 12 },
        { "id": 100, "name": "San Justo", "provinceId": 12 },
        { "id": 101, "name": "Reconquista", "provinceId": 12 },
        //departamentos de La San juan
        { "id": 102, "name": "San Juan", "provinceId": 13 },
        { "id": 103, "name": "Rawson", "provinceId": 13 },
        { "id": 104, "name": "Capital", "provinceId": 13 },
        { "id": 105, "name": "Rivadavia", "provinceId": 13 },
        { "id": 106, "name": "Pocito", "provinceId": 13 },
        //departamentos de La San luis
        { "id": 107, "name": "San Luis", "provinceId": 14 },
        { "id": 108, "name": "La Capital", "provinceId": 14 },
        { "id": 109, "name": "Chacabuco", "provinceId": 14 },
        { "id": 110, "name": "Junín", "provinceId": 14 },
        { "id": 111, "name": "San Martín", "provinceId": 14 },
        //departamentos de La Mendoza
        { "id": 112, "name": "Mendoza", "provinceId": 15 },
        { "id": 113, "name": "Capital", "provinceId": 15 },
        { "id": 114, "name": "Godoy Cruz", "provinceId": 15 },
        { "id": 115, "name": "Guaymallén", "provinceId": 15 },
        { "id": 116, "name": "Junín", "provinceId": 15 },
        //departamentos de La Neuquen
        { "id": 117, "name": "Neuquén", "provinceId": 16 },
        { "id": 118, "name": "Confluencia", "provinceId": 16 },
        { "id": 119, "name": "Zapala", "provinceId": 16 },
        { "id": 120, "name": "Cutral Có", "provinceId": 16 },
        { "id": 121, "name": "Plottier", "provinceId": 16 },
        //departamentos de La La pampa 
        { "id": 122, "name": "La Pampa", "provinceId": 17 },
        { "id": 123, "name": "Santa Rosa", "provinceId": 17 },
        { "id": 124, "name": "General Pico", "provinceId": 17 },
        { "id": 125, "name": "Toay", "provinceId": 17 },
        { "id": 126, "name": "Realicó", "provinceId": 17 },
        //departamentos de La Buenos aires
        { "id": 127, "name": "Buenos Aires", "provinceId": 18 },
        { "id": 128, "name": "La Plata", "provinceId": 18 },
        { "id": 129, "name": "Mar del Plata", "provinceId": 18 },
        { "id": 130, "name": "Quilmes", "provinceId": 18 },
        { "id": 131, "name": "Lanús", "provinceId": 18 },
        //departamentos de La Rio negro
        { "id": 132, "name": "Río Negro", "provinceId": 19 },
        { "id": 133, "name": "General Roca", "provinceId": 19 },
        { "id": 134, "name": "Cipolletti", "provinceId": 19 },
        { "id": 135, "name": "Bariloche", "provinceId": 19 },
        { "id": 136, "name": "Viedma", "provinceId": 19 },
        //departamentos de Chubuth
        { "id": 137, "name": "Chubut", "provinceId": 20 },
        { "id": 138, "name": "Rawson", "provinceId": 20 },
        { "id": 139, "name": "Comodoro Rivadavia", "provinceId": 20 },
        { "id": 140, "name": "Trelew", "provinceId": 20 },
        { "id": 141, "name": "Esquel", "provinceId": 20 },
        //departamentos de Santa cruz
        { "id": 142, "name": "Santa Cruz", "provinceId": 21 },
        { "id": 143, "name": "Río Gallegos", "provinceId": 21 },
        { "id": 144, "name": "Caleta Olivia", "provinceId": 21 },
        { "id": 145, "name": "El Calafate", "provinceId": 21 },
        { "id": 146, "name": "Puerto Deseado", "provinceId": 21 },
        //departamentos de Tierra del fuego
        { "id": 147, "name": "Tierra del Fuego", "provinceId": 22 },
        { "id": 148, "name": "Ushuaia", "provinceId": 22 },
        { "id": 149, "name": "Río Grande", "provinceId": 22 },
        { "id": 150, "name": "Tolhuin", "provinceId": 22 },
        //departamentos de Misiones
        { "id": 151, "name": "Posadas", "provinceId": 23 },
        { "id": 152, "name": "Puerto Iguazú", "provinceId": 23 },
        { "id": 153, "name": "Eldorado", "provinceId": 23 },
      ]
  
    for (const locationData of locationToCreate) {
      const existinglocation = await locationModel.findOne({ where: { name: locationData.name } });
  
      if (!existinglocation) {
        await locationModel.create(locationData);
      }
    }
  }

  export async function getLocationByProvince(provinceId){
        return await locationModel.findAll({
            where: {
                provinceId: provinceId
            }
        })
  }