import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-8 px-4 mt-8 rounded-t-xl shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <ul className="flex gap-6 mb-2 md:mb-0">
          <li>
            <Link href="/contacto" className="hover:underline hover:text-accent transition">Contacto</Link>
          </li>
          <li>
            <Link href="/equipo" className="hover:underline hover:text-accent transition">Acerca de nosotros</Link>
          </li>
        </ul>
        <p className="text-sm opacity-80">Una página de <a href="https://naughtydevgt.github.io/" className="hover:underline hover:text-accent transition">Nauthy Dev</a> 2024</p>
      </div>
    </footer>
  );
}

export default Footer