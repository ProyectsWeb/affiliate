import Image from "next/image"
import styles from '@/styles/Home.module.css' 
import Link from "next/link"
import Head from "next/head"


export default function inicio (){
    return (
        <>    
         <Head>
         <title>ZavanLink</title>        
         <meta name="viewport" content="width=device-width, initial-scale=1" />     
         <link rel="shortcut icon" type="image/x-icon" href="/zavan-link.ico" />    
         </Head>   
        <div className={styles.encabezado}>
      
        <Image src='/zavan-link.png' className={styles.logo} width={100} height={100} alt='Logo Zavan Recomend' />       
        <h1 className={styles.h1}>¡Descuento especial! ahora más barato que nunca</h1>
        </div>
        <Link href={`${process.env.NEXT_PUBLIC_FRONT_URL}/fp/644e05d34ebaf5dd5f77606c`} className={styles.inicio} >Inicio</Link>
      </>    
    )
}