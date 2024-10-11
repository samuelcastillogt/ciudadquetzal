import React from 'react'
import { useRouter } from 'next/router'
import { useStore } from '@/store'
import { apiService } from '@/services/api.service'
import Head from 'next/head'
export async function getServerSideProps(datal:any){
    const {data}:any = await apiService.getBusines(datal.query.id)
    return { props: { data }}
}
function BusinesPage({data}: any) {
  return (
    <>
    <Head>
        <title>{data.nombre}</title>
        <meta name="description" content={data.descripcion}/>
        <meta name="keywords" content={data.descripcion} />
        <link rel='image_src' href={data.imagen}/>
    </Head>
    <div>
        <img src={data.imagen} />
        <p>{data.nombre}</p>
    </div>
    </>
    
  )
}

export default BusinesPage