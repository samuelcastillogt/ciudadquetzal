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
  const result = data.find((i:any)=> i.data.id == datal.query.post)
  const match = result.data.content.match(/<p>(.*?)<\/p>/i)
  const descripcion = match != undefined ? match[1].replace(/<\/?[^>]+(>|$)/g, "") : "Conoce un poco mas sobre Ciudad Quetzal en nuestra web."
  const response = {desc: descripcion, post: result}

  return { props: { data: response }}
}
function Post({data}:any) {
  const route = useParams()
  const {desc, post} = data
  return (
    <>
    <Head>
      <title>{post && post.data.title}</title>
      <meta name="description" content={post && desc}/>
      <link rel='image_src' href={post.img}/>
    </Head>
    <div className='p-5 flex justify-center items-center post-body w-3/4 mx-auto'>{post && <HtmlRender htmlString={post.data.content} />}</div>
    </>
    
  )
}

export default Post