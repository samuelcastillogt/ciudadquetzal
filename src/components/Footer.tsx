import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-between items-center p-5 text-white flex-wrap'>
        <div>
            <ul>
                <li>
                    <Link href="/contacto">Contacto</Link>
                </li>
                <li>
                <Link href="/equipo">Acerca de nosotros</Link>
                </li>
            </ul>
        </div>
  <p>Una pagina de <a href="https://naughtydevgt.github.io/">Nauthy Dev</a> 2024</p>
</footer>
  )
}

export default Footer