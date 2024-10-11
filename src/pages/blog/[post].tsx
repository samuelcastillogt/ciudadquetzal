import { apiService } from '@/services/api.service';
import { useStore } from '@/store'
import Head from 'next/head';
import { useRouter, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
function HtmlRender({ htmlString }:any) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
}
export async function getServerSideProps(datal:any){
  const data = await apiService.getPosts()
  console.log(data)
  return { props: { data }}
}
function Post({data}:any) {
  const route = useParams()
  const [post, setPost] = useState<any>(undefined)
  const [desc, setDesc] = useState<string>("Bienvenidos al Blog sobre Ciudad Quetzal.")
  console.log(data)

  useEffect(() => {
    if(data.length > 0){
      const result = data.find((i:any)=> i.data.id == route.post)
      console.log("aqui"+result.data.content)
      if(result){
        const match = result.data.content.match(/<p>(.*?)<\/p>/i)
        const descripcion = match[1].replace(/<\/?[^>]+(>|$)/g, "")
        setDesc(descripcion)
        setPost(result.data)
      }

    }
  }, [])
  return (
    <>
    <Head>
      <title>{post && post.title}</title>
      <meta name="description" content={post && desc}/>
      <link rel='image_src' href={post.img}/>
    </Head>
    <div className='p-5 flex justify-center items-center post-body'>{post && <HtmlRender htmlString={post.content} />}</div>
    </>
    
  )
}

export default Post