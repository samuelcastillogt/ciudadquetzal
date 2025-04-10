import Link from 'next/link'
import React from 'react'

function BlogCard(props:any) {
    const {data} = props
  return (
    <div className='w-64 border-2 m-3 blogCard'>
        <img src={data.img} alt="" />
        <div className='p-5'>
        <p>{data.data.title}</p>
        <Link href={"/blog/" + data.data.id}>
            <button className='rounded-full bg-teal-900 text-white p-2 blogCard-btn'>Leer mas</button>
        </Link>
        </div>

    </div>
  )
}

export default BlogCard