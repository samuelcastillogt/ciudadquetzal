import BlogCard from '@/components/BlogCard';
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
  const rels = data.filter((i:any)=> i.data.labels[0] == result.data.labels[0]) 
  const match = result.data.content.match(/<p>(.*?)<\/p>/i)
  const descripcion = match != undefined ? match[1].replace(/<\/?[^>]+(>|$)/g, "") : "Conoce un poco mas sobre Ciudad Quetzal en nuestra web."
  const response = {desc: descripcion, post: result, rels}

  return { props: { data: response }}
}
function Post({data}:any) {
  const route = useParams()
  const {desc, post, rels} = data
console.log(post)
  return (
    <>
    <Head>
      <title>{post && post.data.title}</title>
      <meta name="description" content={post && desc}/>
      <link rel='image_src' href={post.img}/>
    </Head>
    
    <div className='p-5 flex flex-col justify-center items-center post-body w-3/4 mx-auto border-b-4'>
      {post && <HtmlRender htmlString={post.data.content} />}
      <div className="fb-share-button" data-href={"https://www.ciudadquetzal.com/blog/" + post.data.id} data-layout="" data-size=""><a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ciudadquetzal.com%2Fblog%2F" + post.data.id} className="fb-xfbml-parse-ignore"><img src="https://www.gsrefriaire.com/wp-content/uploads/2017/09/comparte_face.png" className='w-32'/></a></div>
      </div>

      <h2 className='text-center'>Post Relacionados</h2>

    <div className='flex flex-wrap p-5 justify-center items-center post-body w-3/4 mx-auto'>
      {rels.map((i:any)=> <BlogCard data={i} key={i.img}/>)}
    </div>
    </>
    
  )
}

export default Post