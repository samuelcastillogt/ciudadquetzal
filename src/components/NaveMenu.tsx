import { useStore } from '@/store'
import Link from 'next/link'
import React from 'react'

function NaveMenu() {
    const {setMenu} = useStore((state:any)=> state)
  return (
    <div className='fixed bg-black top-0 h-full w-full z-50 flex flex-col items-center justify-center'>
        <h2>Secciones</h2>
        {window.location.pathname != "/" && <Link href="/" onClick={()=> setMenu(false)}>Inicio</Link>}
        <Link href="/blog" onClick={()=> setMenu(false)}>Blog</Link>
        <Link href="/mercadito" onClick={()=> setMenu(false)}>Mercadito</Link>
    </div>
  )
}

export default NaveMenu