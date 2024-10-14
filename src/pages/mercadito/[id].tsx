import React from 'react'
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
    <div className='flex justify-around items-center p-5 flex-wrap h-full'>
        <img src={data.imagen} className='w-1/2'/>
        <div className='w-1/2 p-5'>
          <p className='text-2xl font-bold'>{data.nombre}</p>
          <p>{data.descripcion}</p>
          <p>Categoria: {data.categoria}</p>
          <p>{data.direccion}</p>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11719.130395997185!2d-90.57552308064162!3d14.697871601010174!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2sgt!4v1728946484304!5m2!1ses!2sgt" style={{border:0, width: "100%"}}  loading="lazy"></iframe>
          <a href={`https://www.google.com/maps/@${data.lat},${data.lng}`}>Ver en mapa</a> */}
        </div>
        
    </div>
    </>
    
  )
}

export default BusinesPage