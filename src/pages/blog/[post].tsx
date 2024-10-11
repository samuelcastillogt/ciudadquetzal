import { useStore } from '@/store'
import Head from 'next/head';
import { useRouter, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
function HtmlRender({ htmlString }:any) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
}

function Post() {
  const route = useParams()
  const [post, setPost] = useState<any>(undefined)
  const [desc, setDesc] = useState<string>("Bienvenidos al Blog sobre Ciudad Quetzal.")
  const  {posts} = useStore((state:any )=> state)

  useEffect(() => {
    if(posts.length > 0){
      const result = posts.find((i:any)=> i.data.id == route.post)
      console.log(result.data.content)
      if(result){
        const match = result.data.content.match(/<p>(.*?)<\/p>/i)
        const descripcion = match[1].replace(/<\/?[^>]+(>|$)/g, "")
        setDesc(descripcion)
        setPost(result.data)
      }

    }
  }, [posts])
  return (
    <>
    <Head>
      <title>{post && post.title}</title>
      <meta name="description" content={post && desc}/>
    </Head>
    <div className='p-5 flex justify-center items-center post-body'>{post && <HtmlRender htmlString={post.content} />}</div>
    </>
    
  )
}

export default Post