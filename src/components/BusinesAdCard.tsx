import React from 'react'
import Link from "next/link"
import { IBusinessCard } from './BusinessCard'
function BusinesAdCard(props:IBusinessCard) {
    const {data, id} = props
    return (
      <div className='w-full border-2 flex items-center justify-around blogCard'>
          <img src={data.imagen} className='w-32'/>
          <div className='p-5'>
              <p>{data.nombre}</p>
              <Link href={"/mercadito/" + id}>
              <button className='rounded-full bg-teal-900 text-white p-2 blogCard-btn'>Ver Detalles</button>
              </Link>
              
          </div>
          
      </div>
    )
}

export default BusinesAdCard