import React from 'react'
import { apiService } from '@/services/api.service'
import Head from 'next/head'
export async function getServerSideProps(datal:any){
    const {data}:any = await apiService.getBusines(datal.query.id)
    return { props: { data }}
}
function BusinesPage({ data }: any) {
  return (
    <>
      <Head>
        <title>{data.nombre} | Mercadito Ciudad Quetzal</title>
        <meta name="description" content={data.descripcion} />
        <meta name="keywords" content={data.descripcion} />
        <link rel="image_src" href={data.imagen} />
        <link rel="canonical" href={"https://www.ciudadquetzal.com/mercadito/" + data.id} />
      </Head>
      <main className="container mx-auto max-w-4xl py-10 px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 transition-all">
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
            <img
              src={data.imagen}
              alt={data.nombre}
              className="rounded-xl shadow-md object-cover w-full max-w-xs h-64 md:h-80 transition-all duration-500 view-transition-image bg-gray-50"
              style={{ border: '4px solid var(--color-primary, #0ea5e9)' }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-between h-full min-w-0">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 view-transition-text">{data.nombre}</h1>
            <p className="text-base md:text-lg text-gray-700 mb-4 line-clamp-5">{data.descripcion}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">{data.categoria}</span>
              {data.direccion && (
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{data.direccion}</span>
              )}
            </div>
            {/* Futuro: productos/ofertas aquí */}
            <div className="mt-4">
              {/* <iframe src="https://www.google.com/maps/embed?..." ... ></iframe> */}
              {data.lat && data.lng && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${data.lat},${data.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-accent underline hover:text-primary text-sm mt-2"
                >
                  Ver en mapa
                </a>
              )}
            </div>
          </div>
        </div>
        {/* Espacio para productos/ofertas en el futuro */}
        {/* Espacio para productos/ofertas en el futuro */}
        {/*
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-primary">Productos y Ofertas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Aquí se mostrarán los productos 
            </div>
          </section>
        */}
      </main>
    </>
  );
}

export default BusinesPage