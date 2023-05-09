export async function userSave({nombre, email}){ 
     
      const userNew = {
        nombre,
        email
      }

      const respuesta = await fetch(`${process.env.NEXT_PUBLIC_FRONT_URL}/api/user`, {
        method: 'POST',  
        headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'    
    },
      body: JSON.stringify(userNew)
    });
      const data = await respuesta.json();       
}