import Head from 'next/head'
import { Inter } from 'next/font/google'
 import styles from '@/styles/Home.module.css' 
import { Item } from '@/components/Item'
import Pag404 from '@/components/Pag404'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] });

export default function Home({data, id}) {

  const router = useRouter();
  const myKeywords = data[0].alt.split(" ", 20);
  console.log(data);
  
  return (
    <>
      <Head>
        <title>Recommended by ZAVAN</title>
        <meta name="keywords" content={`${myKeywords}`} />   
        <meta name="description" content={`${data[0].alt}`} />
        <meta name="author" content="Jorge Peraza - Zavanaf" />  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.h1}>RECOMENDADO</h1>

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