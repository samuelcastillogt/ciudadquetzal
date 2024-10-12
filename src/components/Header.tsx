"use client"
import { useStore } from '@/store';
import Link from 'next/link';
import React from 'react'
import { MdMenu } from "react-icons/md";

function Header() {
  const {setMenu} = useStore((state:any)=> state)
  const openMenu = ()=> alert(true)
  return (
    <div className="header">
    <img
      alt="ciudad quetzal"
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggZrG_auFVoULXLv1P1Eflu9B1Y68e-LjqoriWM2e49D9Lo95Cl4pxqIvAN3MykIxAatdiVeiskR19Sn9_uKtHBaeHQ2RAqpuRdXLzC6heezuTvvK5_RtWREaW0dqwrc8VKAEtItkF0X_t6GtghjHKmfOV44qsjEoF7RVVB-8xQWCnwUxgQ_7X6_IXbFI/s500/adaptive-icon2-removebg-preview.png"
    />
    <h1 className="text-white font-bold text-2xl"> Ciudad Quetzal</h1>
    <div className="menu bg-red" >
      <div className='text-white menu flex flex-col items-center justify-center' onClick={()=> console.log(true)}>
        <div className='bg-red'>
          <MdMenu size={40} onClick={()=> setMenu(true)}/>
        </div>

        </div>
    </div>
  </div>
  )
}

export default Header