import { dbConnect } from 'db/conexion'
import  Producto from 'models/Product'

dbConnect();
export default async function handler(req, res) {
  const idParam = req.query.id;  

  switch(req.method){
      case 'GET':    
        const productos = await Producto.find({_id: idParam });         
        return res.status(200).json(productos);

    case 'POST':       
        console.log(req.body);
        const newProducto = new Producto(req.body);       
        const productoGrabado = await newProducto.save();    
    return res.status(201).json(productoGrabado);
      
      default:
        return res.status(400).json({msg: "Este metodo aun no esta configurado en las consultas"});
  } 
  }