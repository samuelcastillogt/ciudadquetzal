import BlogCard from '@/components/BlogCard';
import BusinesAdCard from '@/components/BusinesAdCard';
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
  const {busines} = useStore((store:any)=> store)
  const [ad, setAd] = useState<any>()
  const {desc, post, rels} = data
  useEffect(()=>{
    if(ad == undefined){
      setAd(busines[Math.round(Math.random()* ((busines.length-1) - 0))])
    }
  },[busines])
  return (
    <>
    <Head>
      <title>{post && post.data.title}</title>
      <meta name="description" content={post && desc}/>
      <link rel='image_src' href={post.img}/>
      <link rel='cannonical' href={'https://www.ciudadquetzal.com/blog/' + post.data.id} />
    </Head>
    
    <div className='p-5 flex flex-col justify-center items-center post-body w-3/4 mx-auto border-b-4'>
      {post && <HtmlRender htmlString={post.data.content} />}

      <div className="fb-share-button" data-href={"https://www.ciudadquetzal.com/blog/" + post.data.id} data-layout="" data-size=""><a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ciudadquetzal.com%2Fblog%2F" + post.data.id} className="fb-xfbml-parse-ignore"><img src="https://www.gsrefriaire.com/wp-content/uploads/2017/09/comparte_face.png" className='w-32'/></a></div>
      <div className='m-5'>
        <h3 className='text-center'>Conoce nuestro mercadito Digital</h3>
        {
          ad != undefined && <BusinesAdCard id={ad.id} data={ad.data} key={ad.id}/>
        }
      </div>
      </div>

      <h2 className='text-center'>Post Relacionados</h2>

    <div className='flex flex-nowrap overflow-x-scroll p-5  w-3/4 mx-auto md:flex-wrap md:justify-center md:items-center ' >
      {rels.map((i:any, index: number)=> {if(index <= 2){ return <BlogCard data={i} key={i.img}/>}})}
    </div>
    </>
    
  )
}

export default Post