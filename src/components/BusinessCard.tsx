import Link from 'next/link'
import React from 'react'
export interface IBusinessCard{
    id: string
    data: any
}
function BusinessCard(props:IBusinessCard) {
    const {data, id} = props
  return (
    <div className='w-64 border-2 m-3'>
        <img src={data.imagen} />
        <div className='p-5'>
            <p>{data.nombre}</p>
            <Link href={"/mercadito/" + id}>
            <button className='rounded-full bg-teal-900 text-white p-2'>Ver Detalles</button>
            </Link>
            
        </div>
        
    </div>
  )
}

export default BusinessCard