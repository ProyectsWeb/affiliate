import { dbConnect } from "@/db/conexion";
import User from "@/models/User";

dbConnect();

export default async function handler(req, res) {
  const newUser = new User(req.body);   

  const validarEmail = async({email})=>{
      
   const expReg = /^[a-z0-9\.-_-]+@+[a-zA-Z0-9]+\.+[a-zA-Z]{2,4}/;  
   const esValido = email.match(expReg);    

    if(esValido){     
      const userGrabado = await newUser.save();
      console.log(userGrabado)
      return res.status(201).json(userGrabado); 
    }else{     
      console.log("CORREO NO ES VALIDO");    
    }
}
  validarEmail(newUser);
}