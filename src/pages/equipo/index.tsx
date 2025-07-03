import Head from 'next/head'
import React from 'react'


function index() {
  return (
    <>
      <Head>
        <title>Sobre CiudadQuetzal.com</title>
        <meta name="description" content="Conoce el propósito, valores y equipo detrás de CiudadQuetzal.com, la plataforma que busca transformar la percepción de nuestra comunidad." />
      </Head>
      <main className="container mx-auto max-w-3xl py-10 px-4">
        <section className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">Sobre CiudadQuetzal.com</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            <a href="https://ciudadquetzal.com" className="underline text-accent font-semibold">CiudadQuetzal.com</a> es una plataforma digital creada por y para los vecinos de Ciudad Quetzal. Nuestro objetivo es transformar la percepción de nuestra colonia, mostrando su lado humano, sus historias de superación y el talento de su gente.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Creemos que Ciudad Quetzal es mucho más que las noticias negativas. Queremos ser un altavoz para las voces locales, visibilizar a los emprendedores, compartir recursos útiles y construir una comunidad digital positiva, inclusiva y accesible para todos, especialmente para personas mayores.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Nuestro equipo multidisciplinario une experiencia en desarrollo web, diseño de experiencia de usuario, comunicación y gestión de contenido, con un profundo amor por nuestra comunidad. Todos somos vecinos comprometidos con el cambio.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Nuestro Equipo</h2>
          <div className="flex flex-wrap gap-8 justify-center items-stretch">
            {/* Samuel Castillo */}
            <div className="blogCard w-80 flex flex-col shadow-lg border border-gray-100 hover:shadow-xl transition rounded-xl overflow-hidden bg-white items-center">
              <img
                src="https://media.licdn.com/dms/image/C5603AQF03ZuPz3osHw/profile-displayphoto-shrink_200_200/0/1655422681539?e=2147483647&v=beta&t=lOgevz7rh8fZtFDTxpODwW5Gt-__0Cw3x0omr7XVPxk"
                alt="Samuel Castillo"
                className="h-40 w-40 object-cover rounded-full mt-6 shadow-md border-4 border-primary view-transition-image"
              />
              <div className="p-6 flex flex-col flex-1 justify-between text-center">
                <h3 className="font-bold text-xl text-primary mb-1 view-transition-text">Samuel Castillo</h3>
                <p className="text-gray-700 mb-2">Full Stack Developer &amp; Fundador</p>
                <p className="text-gray-500 text-sm mb-4">Apasionado por la tecnología y el impacto social. Samuel lidera el desarrollo de la plataforma y la visión de accesibilidad digital para todos los vecinos.</p>
                <a href="https://www.linkedin.com/in/samuelcastillogt/" target="_blank" rel="noopener noreferrer">
                  <button className="blogCard-btn w-full mt-2">LinkedIn</button>
                </a>
              </div>
            </div>
            {/* Esli Diaz */}
            <div className="blogCard w-80 flex flex-col shadow-lg border border-gray-100 hover:shadow-xl transition rounded-xl overflow-hidden bg-white items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/C4D03AQGoT5OmiCqSxg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1555704389027?e=1735171200&v=beta&t=O3Nb7Yy3kTmSS25LcKZWP5yE-03j_6n0HEM_hvbNQbQ"
                alt="Esli Diaz"
                className="h-40 w-40 object-cover rounded-full mt-6 shadow-md border-4 border-primary view-transition-image"
              />
              <div className="p-6 flex flex-col flex-1 justify-between text-center">
                <h3 className="font-bold text-xl text-primary mb-1 view-transition-text">Esli Diaz</h3>
                <p className="text-gray-700 mb-2">UI Designer &amp; Co-Fundadora</p>
                <p className="text-gray-500 text-sm mb-4">Especialista en diseño accesible y experiencia de usuario. Esli aporta creatividad y empatía para que la web sea fácil de usar para todos.</p>
                <a href="https://www.linkedin.com/in/esli-diaz-damazo?originalSubdomain=gt" target="_blank" rel="noopener noreferrer">
                  <button className="blogCard-btn w-full mt-2">LinkedIn</button>
                </a>
              </div>
            </div>
            {/* Marvin Vasquez */}
            <div className="blogCard w-80 flex flex-col shadow-lg border border-gray-100 hover:shadow-xl transition rounded-xl overflow-hidden bg-white items-center">
              <img
                src="https://scontent.faqb1-2.fna.fbcdn.net/v/t39.30808-6/343339488_1104970687118040_970525395765693610_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=haFAPBZO_5AQ7kNvgGV3cSZ&_nc_zt=23&_nc_ht=scontent.faqb1-2.fna&_nc_gid=A9MdoGh4chb2l1TXUPXXQuQ&oh=00_AYDPKSuRqnO8C1jt2ZHp8LmZGlnZ88iJT639EJW1X-ZIjA&oe=671DB926"
                alt="Marvin Vasquez"
                className="h-40 w-40 object-cover rounded-full mt-6 shadow-md border-4 border-primary view-transition-image"
              />
              <div className="p-6 flex flex-col flex-1 justify-between text-center">
                <h3 className="font-bold text-xl text-primary mb-1 view-transition-text">Marvin Vasquez</h3>
                <p className="text-gray-700 mb-2">Content Manager</p>
                <p className="text-gray-500 text-sm mb-4">Responsable de la comunicación y las historias locales. Marvin conecta a la comunidad a través de contenido relevante y positivo.</p>
                <a href="https://www.linkedin.com/in/esli-diaz-damazo?originalSubdomain=gt" target="_blank" rel="noopener noreferrer">
                  <button className="blogCard-btn w-full mt-2">LinkedIn</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default index