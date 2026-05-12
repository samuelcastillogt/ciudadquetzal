import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="mt-8 w-full bg-black px-5 py-12 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <ul className="flex gap-6 mb-2 md:mb-0">
          <li>
            <Link href="/contacto" className="text-sm tracking-[0.4px] hover:underline">Contacto</Link>
          </li>
          <li>
            <Link href="/equipo" className="text-sm tracking-[0.4px] hover:underline">Acerca de nosotros</Link>
          </li>
        </ul>
        <p className="text-sm text-white/80">Una pagina de <a href="https://naughtydevgt.github.io/" className="hover:underline">Nauthy Dev</a> 2024</p>
      </div>
    </footer>
  );
}

export default Footer
