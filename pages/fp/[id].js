import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css' 
import { Item } from '@/components/Item'
import Pag404 from '@/components/Pag404'
import { useRouter } from 'next/router'
import Image from 'next/image'

 
const inter = Inter({ subsets: ['latin'] });

export default function Home({data, id}) {

  const router = useRouter();
  const myKeywords = data[0].alt.split(", ", 20);  
  
  return (
    <>
      <Head>
        <title>ZavanLink</title>
        <meta name="keywords" content={`${myKeywords}`} />   
        <meta name="description" content={`${data[0].alt}`} />
        <meta name="author" content="Jorge Peraza - Zavanaf" />  
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
        <meta property='og:image' content={`${data[0].imgSrc}` }/>        
       {/*  <link rel="icon" href="/favicon.ico" /> */}
        <link rel="shortcut icon" type="image/x-icon" href="/zavan-link.ico" />    
      </Head>

      <div className={styles.encabezado}>
      
        <Image src='/zavan-link.png' className={styles.logo} width={100} height={100} alt='Logo Zavan Recomend' />       
        <h1 className={styles.h1}>¡Descuento especial! ahora más barato que nunca</h1>
      </div>      

      <div className={styles.container}>     
        {data.length >= 1 ? <Item data={data} /> : <Pag404 />}        
      </div>
      
    </>
  )
}

 export async function getServerSideProps({query: {id}}){  

  const res = await fetch(`${process.env.HOST_URL}/api/afilis/?id=${id}`)
  const data = await res.json(); 

   return {
    props: {data }
  }
}  