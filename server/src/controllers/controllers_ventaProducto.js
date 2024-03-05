import { tiendaModel as VentaProductosModel } from '../models/model_VentaProductos.js';

export const ctrlUploadImgProducto = async (req, res) => {
  try {
    const { imagen, name_producto, precio, cantidad } = req.body;

    if (!req.files || !req.files.imagen) {
      return res.status(400).json({
          message: 'No se ha proporcionado una imagen de producto.'
      });
  }
  const file = req.files.imagen;
  console.log("file", file);

  const fileName = file.name; // ¡Corregir aquí!

  console.log("filename", fileName);

    // Guardar información del producto en la base de datos
    const producto = await VentaProductosModel.create({
      imagen: fileName,
      name_producto, 
      precio, 
      cantidad
      // Agrega otros campos del producto aquí según tu modelo
    });

      file.mv(`../cliente/public/producto_img/${fileName}`, (err) => {
          if (err) {
              console.log(err);
              return res.status(500).json({ message: 'Error save archive' });
          }
          res.status(200).json({ message: 'Image upload', producto });
      });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error upload image' });
  }
};


export const ventaProductosActualesAll=async(req, res)=>{
  try {
  const listaProductosVentaActuales=await VentaProductosModel.findAll()
  console.log("Lista de productos a la venta:" + listaProductosVentaActuales)
  return res.status(201).json(listaProductosVentaActuales)
  } catch (error) {
      console.log("ah ocurrido un error al obtener la lista de clientes " + error)
  }
}