import React from 'react'
import Image from "next/image";
export interface IHero{
    title: string
    subTitle?: string
}
function Hero(props:IHero) {
    const {title, subTitle} = props
  return (
    <div className='hero flex flex-col items-end justify-end p-5 text-right text-white'>
        <img alt="ciudad quetzal" width={100} height={100} src="https://static.vecteezy.com/system/resources/thumbnails/036/698/508/small/ai-generated-woman-using-mobile-phone-while-standing-on-transparent-background-ai-generated-png.png"/>
        <h1>{title}</h1>
        {subTitle && <p className='text-5xl font-bold text-white'>{subTitle}</p>}
    </div>
  )
}

export default Hero