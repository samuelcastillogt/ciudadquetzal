import type {WebSite, Graph} from 'schema-dts';
import localFont from "next/font/local";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { apiService } from "@/services/api.service";
import BlogCard from "@/components/BlogCard";
import Head from "next/head";
import { useEffect, useRef } from 'react';
import { useAdSlot } from '@/hooks/useAdSlot';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const data = [
  {
    title: "Mercadito Digital",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPPEp20h1cYB3-lltdK_w2IdRtYjEpDzGtw&s",
    url: "/mercadito",
  },
  {
    title: "Imprenta aqui en la Quetzal",
    img: "https://gestagrup.com/wp-content/uploads/2017/02/imprenta-barcelona.jpg",
    url: "https://www.ciudadquetzal.com/mercadito/sprKwS6U4LzT2azblKRA",
  },
  {
    title: "Nuestro Blog",
    img: "https://img.freepik.com/vector-gratis/propietario-pequena-empresa-dandose-mano-prestamista_74855-20379.jpg",
    url: "/blog",
  },
];
const GGraph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.ciudadquetzal.com',
      url: 'https://www.ciudadquetzal.com/',
      name: "Pagina sobre Ciudad Quetzal, un colonia de Guatemala en crecimiento",
      inLanguage: 'es',
      isPartOf: {
        '@id': 'https://www.ciudadquetzal.com',
      },
      about: {'@id': 'https://www.ciudadquetzal.com/equipo'},
      mainEntity: {'@id': 'https://www.ciudadquetzal.com/'},
    },
  ],
};
export async function getServerSideProps(){
  const dataPosts:any = await apiService.getPosts()
  return { props: { dataPosts }}
}
export default function Home({dataPosts}: any) {
  // Usamos solo un bloque responsive y el hook centralizado para inicializarlo
  const adResponsiveRef = useRef<HTMLDivElement | null>(null);
  useAdSlot(adResponsiveRef);
  return (
    <>
      <Head>
        <title>Ciudad Quetzal</title>
        <meta name="description" content="Sitio web no oficial sobre Ciudad Quetzal" />
        <link rel="canonical" href="https://www.ciudadquetzal.com" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="container mx-auto max-w-4xl py-8 px-4">
          <Slider posts={data} />
          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">Bienvenidos a CiudadQuetzal.com</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">Un espacio para descubrir la cultura, tradiciones y oportunidades de nuestra comunidad.</p>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgAhc2-RWsoS1iyMcxE-TUShIOhY04jCsy9FhSgCSqszOYq3d1rS9RkllKWPJspTwvHMLIjk9gQCaD4SG1pQ-1SRLSzWOf7Lj7TLgtP47stoiRXsJv6TzeAOS6Ab4exyWJS2Za7RGcV0zI5DNT1iBJ9gtdxTkE2uAFv9hv2TPRacvPSWbeN7l9sVTNVzTo"
                alt="Ciudad Quetzal"
                className="rounded-lg shadow-md w-full md:w-72"
              />
              <div className="text-left max-w-md">
                <h2 className="text-2xl font-bold mb-2 text-primary">Ubicación Estratégica</h2>
                <p className="text-gray-600">A solo 30 km de la Ciudad de Guatemala, Ciudad Quetzal ofrece una excelente conexión con la capital y un entorno natural ideal para familias y emprendedores.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
              <div className="text-left max-w-md">
                <h2 className="text-2xl font-bold mb-2 text-primary">Historia y Desarrollo</h2>
                <p className="text-gray-600">De aldea a comunidad en crecimiento, Ciudad Quetzal ha mejorado su infraestructura y calidad de vida gracias al esfuerzo de sus habitantes y proyectos comunitarios.</p>
              </div>
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE3RXYcSigthFTraDQV3w-uBP6hG9yN3M8eaMg7yPxGl9i79_cQrln1E2mjCIBLw501zfNnuokJn39NfY3ANZ42YjNxddikR_5O-z7mf2TuvgevKZwp7Q44CL_Wyey9gSxPqcAkZL7zz0/s0/ciudad+quetzal.jpg"
                alt="Historia Ciudad Quetzal"
                className="rounded-lg shadow-md w-full md:w-72"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhkk6mV5IBIAgEWs5-sHCe65r74A_UVXFtJdaCM2Q67zIL-zpnRZ7KLjYuWvpOqa1dFke12H-ZjsqpDTz4rajkojCYxQ-qOyVCcWGDoAVBIkuPvPrXO7ifXCjEs9F-nq6e58rAfyPz7jjTvLUutSv5ed3ncOVwfiLfCmT1uPpWHymmCWxagn07s7lPwj5g"
                alt="Atractivos Ciudad Quetzal"
                className="rounded-lg shadow-md w-full md:w-72"
              />
              <div className="text-left max-w-md">
                <h2 className="text-2xl font-bold mb-2 text-primary">Atractivos Naturales</h2>
                <p className="text-gray-600">Disfruta de senderos, áreas verdes y actividades culturales que fortalecen el sentido de comunidad y la calidad de vida.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
              <div className="text-left max-w-md">
                <h2 className="text-2xl font-bold mb-2 text-primary">Vivienda y Oportunidades</h2>
                <p className="text-gray-600">Opciones de vivienda accesibles y oportunidades de emprendimiento hacen de Ciudad Quetzal un lugar ideal para invertir y crecer.</p>
              </div>
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjxshslqEZdMdbvjNEhu_Sj1orSpQrjjxRIjvCbbi6a_Z_yAmmB0ZU9Dh79Qe6c6wmztvuBJphJkMfL-1QPTrgkKCxiXwBAbwdBGj6v34s5zLHmWaAr8vTTVdEmnWbXTy0T8b1MmtMmV-aEZ4yDjTNAwe4in4tlOfwOE6GIWdgY8iT8iuHNPoQQhaSYUXY"
                alt="Vivienda Ciudad Quetzal"
                className="rounded-lg shadow-md w-full md:w-72"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgaU0PhV050VDvEWScsi57rPvEHbTGZ8oUY1lvvWBU2imPzXGGE6NYpzfPZadzuW5CLszW-hSfpq69Rxq61vFTPnULhWASXmE27wpkTsGmUT4Cn8gQavUVuGv45gydf_uBm-CzHVls91xGx38GJV8-v8DHIHk9C10N25iqHv4E_E7In4za42-tx-2gsZbQ"
                alt="Futuro Ciudad Quetzal"
                className="rounded-lg shadow-md w-full md:w-72"
              />
              <div className="text-left max-w-md">
                <h2 className="text-2xl font-bold mb-2 text-primary">Un Futuro Prometedor</h2>
                <p className="text-gray-600">La comunidad y sus proyectos de infraestructura hacen de Ciudad Quetzal una colonia con gran potencial de desarrollo y calidad de vida.</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-center p-5 text-primary">¡Descubre todo lo que Ciudad Quetzal tiene para ofrecer!</p>
          </section>
          <section id="blog-container">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Últimos Artículos del Blog</h2>
            {/* Bloque responsive full-width: ciudadQuetzalTest (único anuncio en home) */}
            <div className="my-6 w-full" ref={adResponsiveRef}>
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-5314398130823639"
                data-ad-slot="4863618907"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {dataPosts.length > 0 && dataPosts.map((i:any) => <BlogCard data={i} key={i.data.id}/> )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

