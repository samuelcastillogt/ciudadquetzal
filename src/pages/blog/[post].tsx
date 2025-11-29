import BlogCard from '@/components/BlogCard';
import BusinesAdCard from '@/components/BusinesAdCard';
import { apiService } from '@/services/api.service';
import { useStore } from '@/store'
import Head from 'next/head';
import { useRouter, useParams } from 'next/navigation'
import { useEffect as useViewEffect } from 'react';
import React, { useEffect, useState } from 'react'
function HtmlRender({ htmlString }: any) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
}
export async function getServerSideProps(datal: any) {
  const data = await apiService.getPosts()
  const result = data.find((i: any) => i.data.id == datal.query.post)
  const rels = data.filter((i: any) => i.data.labels[0] == result.data.labels[0])
  const match = result.data.content.match(/<p>(.*?)<\/p>/i)
  const descripcion = match != undefined ? match[1].replace(/<\/?[^>]+(>|$)/g, "") : "Conoce un poco mas sobre Ciudad Quetzal en nuestra web."
  const response = { desc: descripcion, post: result, rels }
  return { props: { data: response } }
}
function Post({ data }: any) {
  const { busines } = useStore((store: any) => store)
  const [ad, setAd] = useState<any>()
  const { desc, post, rels } = data
  useEffect(() => {
    if (ad == undefined) {
      setAd(busines[Math.round(Math.random() * ((busines.length - 1) - 0))])
    }
  }, [busines])

  // Inicializar adsbygoogle para bloques in-article en esta página (cliente)
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.warn('Adsense init error on post page', e);
    }
  }, []);

  // View Transition API para animar el cambio de página
  useViewEffect(() => {
    if (typeof window !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(() => {});
    }
  }, []);
  return (
    <>
      <Head>
        <title>{post && post.data.title}</title>
        <meta name="description" content={post && desc} />
        <link rel='image_src' href={post.img} />
        <link rel='cannonical' href={'https://www.ciudadquetzal.com/blog/' + post.data.id} />
        <style>{`
          .post-body p {
            margin-bottom: 1.2em;
            color: #22223b;
            font-size: 1.15rem;
            line-height: 1.8;
            font-family: 'Inter', 'Segoe UI', Arial, Helvetica, sans-serif;
          }
          .post-body h1, .post-body h2, .post-body h3 {
            color: #436850;
            font-weight: 700;
            margin: 1.5em 0 0.7em 0;
            font-family: 'Inter', 'Segoe UI', Arial, Helvetica, sans-serif;
          }
          .post-body h1 { font-size: 2.2rem; }
          .post-body h2 { font-size: 1.7rem; }
          .post-body h3 { font-size: 1.3rem; }
          .post-body ul, .post-body ol {
            margin: 1em 0 1em 2em;
            color: #22223b;
            font-size: 1.1rem;
          }
          .post-body li {
            margin-bottom: 0.5em;
          }
          .post-body img {
            max-width: 100%;
            border-radius: 0.75rem;
            margin: 1.5em auto;
            display: block;
            box-shadow: 0 2px 12px rgba(67,104,80,0.08);
          }
          .post-body blockquote {
            border-left: 4px solid #4ecdc4;
            background: #f8fafc;
            color: #22223b;
            padding: 1em 1.5em;
            margin: 1.5em 0;
            font-style: italic;
            border-radius: 0.5em;
          }
          .post-body a {
            color: #4ecdc4;
            text-decoration: underline;
            transition: color 0.2s;
          }
          .post-body a:hover {
            color: #22223b;
          }
          .post-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5em 0;
            background: #fff;
            border-radius: 0.5em;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(67,104,80,0.08);
          }
          .post-body th, .post-body td {
            padding: 0.75em 1em;
            border: 1px solid #e5e7eb;
            text-align: left;
          }
        `}</style>
      </Head>
      <div className="relative bg-cover bg-center h-48 flex justify-center items-center transition-all duration-500 view-transition-image" style={{ backgroundImage: `url(${post.img})` }}>
        <div className="absolute inset-0 backdrop-filter backdrop-blur-md"></div>
        <h1 className='text-white text-center text-4xl font-bold z-40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-all duration-500 view-transition-text'>{post && post.data.title}</h1>
      </div>


      <div className='p-5 flex flex-col justify-center items-center post-body w-3/4 mx-auto border-b-4'>
        <div>

        </div>
        {post && <HtmlRender htmlString={post.data.content} />}

        {/* AdSense in-article (post) */}
        <div className="my-6 w-full flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-5314398130823639"
            data-ad-slot="7377125003"
          ></ins>
        </div>

        <div className="fb-share-button BlogCard" data-href={"https://www.ciudadquetzal.com/blog/" + post.data.id} data-layout="" data-size=""><a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ciudadquetzal.com%2Fblog%2F" + post.data.id} className="fb-xfbml-parse-ignore"><img src="https://www.gsrefriaire.com/wp-content/uploads/2017/09/comparte_face.png" className='w-32' /></a></div>
        <div className='m-1'>
          <h3 className='text-center'>Conoce nuestro mercadito Digital</h3>
          {
            ad != undefined && <BusinesAdCard id={ad.id} data={ad.data} key={ad.id} />
          }
        </div>
      </div>

      <h2 className='text-center'>Post Relacionados</h2>

      <div
        className="flex flex-nowrap gap-4 overflow-x-auto p-5 w-full max-w-5xl mx-auto md:flex-wrap md:justify-center md:items-center"
        id="container"
      >
        {rels.map((i: any, index: number) =>
          index <= 2 ? (
            <div className="min-w-[260px] max-w-xs flex-shrink-0 md:flex-shrink md:w-80">
              <BlogCard data={i} key={i.img} />
            </div>
          ) : null
        )}
      </div>
    </>

  )
}

export default Post