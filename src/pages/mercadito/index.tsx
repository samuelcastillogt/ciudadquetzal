import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { apiService } from '@/services/api.service'
import { useStore } from '@/store'
import BusinessCard from '@/components/BusinessCard'
function index() {
    const [filtro, setFiltro] = useState<string>("todos")
    const {busines, categories} = useStore((state:any )=> state)
  return (
    <>
    <Head>
      <title>Mercadito Digital</title>
      <meta name="description" content="Encuentra de forma facil los negocio de emprendedores locales."/>
    </Head>
      <div className='hero flex justify-center items-center flex-col'>
        <h2 className="text-2xl font-bold text-white mx-2">Mercado Digital de Ciudad Quetzal</h2>
        <p className='text-white mx-2'>Filtrar por categoria</p>
        {
            categories.length > 0 && <select onChange={e => setFiltro(e.target.value)} className='rounded text-2xl p-5'>
                <option key="todos" value="todos">Todos</option>
                {categories.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
        }

        </div>  
        <div className='flex flex-wrap justify-around items-center p-5'>
        {
            busines && busines.length > 0 && filtro == "todos" && busines.map((i:any)=> {
                 return <BusinessCard id={i.id} data={i.data} key={i.id}/>
            }) || busines.map((i:any)=> {
                if(i.data.categoria == filtro){
                    return <BusinessCard id={i.id} data={i.data} key={i.id}/>
                }
           })
        }
        </div>

    </>

  )
}

export default index