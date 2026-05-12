import { useStore } from '@/store'
import Link from 'next/link'
import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

function NaveMenu() {
  const { setMenu } = useStore((state: any) => state);
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/blog', label: 'Blog' },
    { href: '/mercadito', label: 'Mercadito' },
    { href: '/equipo', label: 'Acerca de Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.9)]">
      <div className="flex min-w-[260px] flex-col items-center gap-6 border border-[#e0e0e0] bg-white px-8 py-10">
        <h2 className="mb-2 text-3xl tracking-tight text-black">Secciones</h2>
        <nav className="flex flex-col gap-4 w-full">
          {links.map(link => (
            (link.href !== '/' || window.location.pathname !== '/') && (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenu(false)}
                className="px-4 py-2 text-center text-lg text-black transition hover:bg-black hover:text-white md:text-xl"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <button
          aria-label="Cerrar menú"
          onClick={() => setMenu(false)}
          className="mt-4 flex items-center gap-2 border border-black bg-black px-4 py-2 text-white transition hover:opacity-85"
        >
          <IoMdCloseCircleOutline size={32} />
          <span className="hidden md:inline font-semibold">Cerrar</span>
        </button>
      </div>
    </div>
  );
}

export default NaveMenu
