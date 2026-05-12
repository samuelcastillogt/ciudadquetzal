"use client"
import { useStore } from '@/store';
import Link from 'next/link';
import React from 'react'
import { MdMenu } from "react-icons/md";

function Header() {
  const { setMenu } = useStore((state: any) => state);
  return (
    <header className="header flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          alt="Ciudad Quetzal logo"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggZrG_auFVoULXLv1P1Eflu9B1Y68e-LjqoriWM2e49D9Lo95Cl4pxqIvAN3MykIxAatdiVeiskR19Sn9_uKtHBaeHQ2RAqpuRdXLzC6heezuTvvK5_RtWREaW0dqwrc8VKAEtItkF0X_t6GtghjHKmfOV44qsjEoF7RVVB-8xQWCnwUxgQ_7X6_IXbFI/s500/adaptive-icon2-removebg-preview.png"
          className="h-12 w-12"
        />
        <Link href="/">
          <span className="text-2xl tracking-tight text-black">Ciudad Quetzal</span>
        </Link>
      </div>
      <button
        className="flex items-center justify-center border border-black bg-white p-2 transition hover:bg-black hover:text-white"
        aria-label="Abrir menú"
        onClick={() => setMenu(true)}
      >
        <MdMenu size={32} className="text-current" />
      </button>
    </header>
  );
}

export default Header
