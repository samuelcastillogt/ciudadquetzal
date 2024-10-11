import BlogCard from '@/components/BlogCard'
import { apiService } from '@/services/api.service'
import { useStore } from '@/store'
import React, { useEffect } from 'react'

function index() {
  const {posts} = useStore((state:any)=> state)
  return (
    <div className='flex flex-wrap justify-around items-center p-5'>
      {
        posts.lenght == 0 && <p>Cargando</p> || posts.map((i:any)=><BlogCard data={i} key={i.data.id}/>)
      }
    </div>
  )
}

export default index