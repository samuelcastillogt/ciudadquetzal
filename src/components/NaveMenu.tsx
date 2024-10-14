import { useStore } from '@/store'
import Link from 'next/link'
import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

function NaveMenu() {
    const {setMenu} = useStore((state:any)=> state)
  return (
    <div className='fixed bg-black top-0 h-full w-full z-50 flex flex-col items-center justify-center text-2xl'>
        <h2 className='text-white my-5'>Secciones</h2>
        {window.location.pathname != "/" && <Link href="/" onClick={()=> setMenu(false)}>Inicio</Link>}
        <Link href="/blog" onClick={()=> setMenu(false)}>Blog</Link>
        <Link href="/mercadito" onClick={()=> setMenu(false)}>Mercadito</Link>
        <IoMdCloseCircleOutline color={"red"} size={40} onClick={()=> setMenu(false)} style={{"cursor":"pointer", "margin": "20px 0"}}/>

    </div>
  )
}

export default NaveMenu