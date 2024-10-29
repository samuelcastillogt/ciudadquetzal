import type {WebSite, Graph} from 'schema-dts';
import localFont from "next/font/local";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Header from "@/components/Header";
import { apiService } from "@/services/api.service";
import BlogCard from "@/components/BlogCard";
import Head from "next/head";

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
  const data:any = await apiService.getPosts()
  return { props: { dataPosts: data }}
}
export default function Home({dataPosts}: any) {
  return (
    <>
    <Head>
      <title>Ciudad Quetzal</title>
      <meta name="description" content="Sitio web no oficial sobre Ciudad Quetzal" />
    </Head>
    <script
          dangerouslySetInnerHTML={{
            __html: `
            <script type="application/ld+json">
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Ciudad Quetzal",
              "alternateName": "Sitio web sobre Ciudad Quetzal",
              "url": "https://avesexoticas.org"
            } 
            </script>        
            `,
          }}
        />
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Slider posts={data} />
      <div className="p-5 text-center">
        <p>
          Bienvenidos a <b>CiudadQuetzal.com</b> una pagina para mostrar nuestra
          cultura, tradiciones y valores.{" "}
        </p>
        <p>
          <b>Ciudad Quetzal</b> es una vibrante comunidad situada al norte del
          departamento de Guatemala. Conocida por su cercanía a la naturaleza y
          su ambiente tranquilo, esta colonia ha crecido rápidamente en los
          últimos años, convirtiéndose en un lugar ideal para familias y
          emprendedores que buscan un espacio en desarrollo y conexión con el
          entorno urbano.
        </p>
        <div className="flex flex-wrap items-center justify-center">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgAhc2-RWsoS1iyMcxE-TUShIOhY04jCsy9FhSgCSqszOYq3d1rS9RkllKWPJspTwvHMLIjk9gQCaD4SG1pQ-1SRLSzWOf7Lj7TLgtP47stoiRXsJv6TzeAOS6Ab4exyWJS2Za7RGcV0zI5DNT1iBJ9gtdxTkE2uAFv9hv2TPRacvPSWbeN7l9sVTNVzTo"
            alt="ciudad quetzal"
            title="ciudad quetzal"
          />
          <div className="p-5 w-80">
            <h2>Ubicación Estratégica de Ciudad Quetzal</h2>
            <p>
              Ubicada a solo 30 kilómetros de la Ciudad de Guatemala,{" "}
              <b>Ciudad Quetzal</b> ofrece una excelente conexión con la
              capital, haciendo que los desplazamientos sean rápidos y cómodos.
              Su cercanía a importantes vías de comunicación la convierte en una
              opción atractiva para quienes desean vivir en un entorno más
              natural, pero con fácil acceso a los servicios y oportunidades de
              la ciudad.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="p-5 w-80">
            <h2>Historia y Desarrollo de Ciudad Quetzal</h2>
            <p>
              Originalmente una pequeña aldea, Ciudad Quetzal ha experimentado
              un notable crecimiento en las últimas dos décadas. Hoy en día,
              cuenta con una infraestructura básica que sigue en expansión,
              gracias a proyectos comunitarios y apoyo municipal. Este constante
              desarrollo ha mejorado la calidad de vida de sus habitantes,
              atrayendo nuevos residentes y negocios.
            </p>
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE3RXYcSigthFTraDQV3w-uBP6hG9yN3M8eaMg7yPxGl9i79_cQrln1E2mjCIBLw501zfNnuokJn39NfY3ANZ42YjNxddikR_5O-z7mf2TuvgevKZwp7Q44CL_Wyey9gSxPqcAkZL7zz0/s0/ciudad+quetzal.jpg"
            alt="ciudad quetzal"
            title="ciudad quetzal"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhkk6mV5IBIAgEWs5-sHCe65r74A_UVXFtJdaCM2Q67zIL-zpnRZ7KLjYuWvpOqa1dFke12H-ZjsqpDTz4rajkojCYxQ-qOyVCcWGDoAVBIkuPvPrXO7ifXCjEs9F-nq6e58rAfyPz7jjTvLUutSv5ed3ncOVwfiLfCmT1uPpWHymmCWxagn07s7lPwj5g"
            alt="ciudad quetzal"
            title="ciudad quetzal"
          />
          <div className="p-5 w-80">
            <h2>Atractivos de Ciudad Quetzal</h2>
            <p>
              Rodeada de paisajes naturales y áreas verdes, Ciudad Quetzal es
              ideal para quienes disfrutan de la tranquilidad del campo. Entre
              sus principales atractivos están los senderos para caminatas, la
              proximidad a montañas y la fauna local. Además, la comunidad
              organiza ferias locales y actividades culturales, fortaleciendo el
              sentido de pertenencia entre sus residentes.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="p-5 w-80">
            <h2>Vivienda y Oportunidades en Ciudad Quetzal</h2>
            <p>
              Ciudad Quetzal ofrece una variedad de opciones de vivienda a
              precios accesibles. Tanto casas familiares como terrenos en venta
              están disponibles para quienes buscan un nuevo hogar o inversión.
              Además, las oportunidades de emprendimiento están en aumento, con
              nuevos comercios y servicios que comienzan a establecerse en la
              zona.
            </p>
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjxshslqEZdMdbvjNEhu_Sj1orSpQrjjxRIjvCbbi6a_Z_yAmmB0ZU9Dh79Qe6c6wmztvuBJphJkMfL-1QPTrgkKCxiXwBAbwdBGj6v34s5zLHmWaAr8vTTVdEmnWbXTy0T8b1MmtMmV-aEZ4yDjTNAwe4in4tlOfwOE6GIWdgY8iT8iuHNPoQQhaSYUXY"
            alt="ciudad quetzal"
            title="ciudad quetzal"
          />
        </div>

        <img
          src="https://blogger.googleusercontent.com/img/a/AVvXsEinvsGCZJYJTiE6CFKLp4Wm5QDo4Xj0oCbKHYqNpiLk7bZh76TJqWhqPD0UNm-b34rJ84ZQzFYwOHedKlrJ_fOCH3ehZfT2lSjekqTbp43TGeVCIvpKxfFsGAq6dHdHi7Y8--31aJ6OZb2AwclAPJjUfJwXJb35vJ39losKLhOsLDyVC6r3foa4l131d0Y"
          alt="ciudad quetzal"
          title="ciudad quetzal"
          style={{ display: "flex", margin: "0 auto", padding: "5px" }}
        />

        <h2>Servicios Disponibles en Ciudad Quetzal</h2>
        <p>
          A medida que crece, <b>Ciudad Quetzal</b> ha visto un aumento en la
          oferta de servicios esenciales. Actualmente, la comunidad cuenta con
          escuelas, centros de salud, tiendas de conveniencia y transporte
          público eficiente, lo que facilita la vida diaria de sus habitantes.
        </p>
        <div className="flex flex-wrap items-center justify-center">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgaU0PhV050VDvEWScsi57rPvEHbTGZ8oUY1lvvWBU2imPzXGGE6NYpzfPZadzuW5CLszW-hSfpq69Rxq61vFTPnULhWASXmE27wpkTsGmUT4Cn8gQavUVuGv45gydf_uBm-CzHVls91xGx38GJV8-v8DHIHk9C10N25iqHv4E_E7In4za42-tx-2gsZbQ"
            alt="ciudad quetzal"
            title="ciudad quetzal"
          />
          <div className="p-5 w-80">
            <h2>Un Futuro Prometedor</h2>
            <p>
              <b>Ciudad Quetzal</b> se perfila como una de las colonias con
              mayor potencial de desarrollo en la región. Con planes de mejora
              en infraestructura y una comunidad activa en su progreso, esta
              colonia ofrece un entorno prometedor para quienes buscan calidad
              de vida y oportunidades de crecimiento.
            </p>
          </div>
        </div>

        <p className="text-2xl font-bold text-center">
          ¡Descubre todo lo que Ciudad Quetzal tiene para ofrecer!
        </p>
        <div className="flex flex-wrap items-center justify-center">
          {
            dataPosts.length > 0 && dataPosts.map((i:any) => <BlogCard data={i} key={i.id}/> )
          }
        </div>
      </div>
    </div>
    </>
    
  );
}
