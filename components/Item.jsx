import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Item.module.css'
import { userSave } from '@/js/userSave'

export const Item = ({data}) => {

    const form = useRef();
    const [ nombre, setNombre]= useState('');
    const [ email, setEmail]= useState('');  
    const [msgInput, setMsgInput] = useState(false);     

  const introEmail = (e)=>{  
   setEmail(e.target.value)
    const expReg = /^[a-z0-9\.-_-]+@+[a-zA-Z0-9]+\.+[a-zA-Z]{2,4}/; 
    const esValido = email.match(expReg);
 
  if(esValido !== null){
    setMsgInput(true);   
  }else{
    setMsgInput(false);
  }  
}
    
    const handleSubmit = async(e)=>{      
      e.preventDefault();
    
    if((nombre ==="") || (email ==="")){
      alert("Faltan datos por llenar para tener un registro valido.");     
    }else{ 
      console.log(msgInput)
      if(msgInput){
      const userNew = {
        nombre,
        email
      }      
   
      userSave(userNew)
      form.current.reset();
      setNombre('');
      setEmail('');
    }
    }             
  }
  
   
  return (  
    <>    
    <form method="get" action={data[0].actionUrl} target="_blank" className={styles.form_item}>
    <div className={styles.table}>

     <div className={styles.tr}>

       <div className={styles.container_image}>
       
        <Image src={data[0].imgSrc}
         width={300} 
         height={300}
         alt={data[0].alt} 
         className={styles.imagen}
         priority        
         />
       </div>

      <div className={styles.container_textos} >
       <p className={styles.pTitulo}><b>{data[0].pTitulo}</b></p>
       <p className={styles.pDescripcion}>{data[0].pDescripcion}</p>
     
       <input type="hidden" name="aff_key" value={data[0].aff_key} />
       <input type="hidden" name="source" value={data[0].source} />
       <input type="hidden" name="utm_campaign" value={data[0].utm_campaign} />
       <input type="hidden" name="utm_content" value={data[0].utm_content} />
       <input type="hidden" name="utm_source" value={data[0].utm_source} />
       <input type="hidden" name="pid" value={data[0].pid} />
       <input type="hidden" name="aid" value={data[0].aid} />
       <input type="hidden" name="cjsku" value={data[0].cjsku} />
       <input type="hidden" name="url" value={data[0].url} />
       <input type="submit" value={data[0].submitValue} className={styles.submitValue} />
      </div>

    </div>
    </div>
   
    </form>   
       <div className={styles.container_lead}>
        <p className={styles.p_lead}>¿Quieres recibir promociones exclusivas?</p>

        <form className={styles.lead} onSubmit={handleSubmit} ref={form} >
          <input type="text" placeholder='Nombre' className={styles.input_nombre} name={nombre} onChange={(e)=>setNombre(e.target.value)} pattern='[\Da-zA-Z]{1,50}'/>                                                     
          <input type="email" placeholder='Correo' className={styles.input_email} name={email} onChange={introEmail} />                                              
          <input type="submit" value="Si, Quiero" className={styles.input_submit}  />
        </form>
        {msgInput === false ? <p className={styles.msgInput_lead}>"Ingresa email completo sin caracteres extraños"</p> : ""}
       </div> 

      <img src={data[0].imgSrcBaja} 
       width="1" 
       height="1" 
       border="0" />

    </>
  )
}