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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(67,104,80,0.97)] backdrop-blur-md">
      <div className="bg-white/90 rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center gap-6 border border-primary min-w-[260px]">
        <h2 className="text-primary text-3xl font-extrabold mb-2 tracking-tight">Secciones</h2>
        <nav className="flex flex-col gap-4 w-full">
          {links.map(link => (
            (link.href !== '/' || window.location.pathname !== '/') && (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenu(false)}
                className="text-lg md:text-xl font-semibold text-primary hover:text-accent transition px-4 py-2 rounded-lg hover:bg-accent/10 text-center"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <button
          aria-label="Cerrar menú"
          onClick={() => setMenu(false)}
          className="mt-4 flex items-center gap-2 text-red-600 hover:text-white hover:bg-red-600 transition px-4 py-2 rounded-full border border-red-200 bg-white/80 shadow"
        >
          <IoMdCloseCircleOutline size={32} />
          <span className="hidden md:inline font-semibold">Cerrar</span>
        </button>
      </div>
    </div>
  );
}

export default NaveMenu