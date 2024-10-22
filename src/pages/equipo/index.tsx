import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
        <Head>
            <title>Acerca de nosotros</title>
            <meta name="description" content="Conoce nuestros objetivos, valores y visiones." />
        </Head>
    <div className='p-5 flex justify-center items-center flex-col'>
        <h2>Acerca de nosotros</h2>
        <p><a href="https://ciudadquetzal.com">CiudadQuetzal.com</a> es un proyecto creado con la finalidad de dar a conocer la realidad de Ciudad de Quetzal.</p>
        <p>Nuestro equipo esta conformado por un grupo de profesionales multidisciplinario que abarcan desde diseño de experiencia de usuarios hasta desarrolladores web y moviles. Todos vecinos de la colonia.</p>
        <p>Nuestro objetivo es brindar un altavoz para que al buscar el nombre de nuestra colonia en internet aparezca la imagen que todos tenemos de ella, mas que solo malas noticias, un lugar al que podemos llamar hogar.</p>
        <div className='flex justify-center items-center flex-col'>
            <h2>Nuestro Equipo</h2>
            <div className='flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center border-w-2 border-black'>
                <div className='rounded-full'>
                    <img className='rounded-full' src="https://media.licdn.com/dms/image/C5603AQF03ZuPz3osHw/profile-displayphoto-shrink_200_200/0/1655422681539?e=2147483647&v=beta&t=lOgevz7rh8fZtFDTxpODwW5Gt-__0Cw3x0omr7XVPxk" alt="" />
                </div>
                <div className='p-5 text-center'>
                    <p className='font-bold'>Samuel Castillo</p>
                    <p>Full Stack Developer</p>
                    <a  href="https://www.linkedin.com/in/samuelcastillogt/">
                        <div className="p-2 text-center bg-green-500 text-white rounded-full">
                            <p>LinkedIn</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center border-w-2 border-black'>
                <div className='rounded-full'>
                    <img className='rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGoT5OmiCqSxg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1555704389027?e=1735171200&v=beta&t=O3Nb7Yy3kTmSS25LcKZWP5yE-03j_6n0HEM_hvbNQbQ" alt="" />
                </div>
                <div className='p-5 text-center'>
                    <p className='font-bold'>Esli Diaz</p>
                    <p>UI Designer</p>
                    <a  href="https://www.linkedin.com/in/esli-diaz-damazo?originalSubdomain=gt">
                        <div className="p-2 text-center bg-green-500 text-white rounded-full">
                            <p>LinkedIn</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center border-w-2 border-black'>
                <div className='rounded-full'>
                    <img className='rounded-full w-32' src="https://scontent.faqb1-2.fna.fbcdn.net/v/t39.30808-6/343339488_1104970687118040_970525395765693610_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=haFAPBZO_5AQ7kNvgGV3cSZ&_nc_zt=23&_nc_ht=scontent.faqb1-2.fna&_nc_gid=A9MdoGh4chb2l1TXUPXXQuQ&oh=00_AYDPKSuRqnO8C1jt2ZHp8LmZGlnZ88iJT639EJW1X-ZIjA&oe=671DB926" alt="" />
                </div>
                <div className='p-5 text-center'>
                    <p className='font-bold'>Marvin Vasquez</p>
                    <p>Content Manager</p>
                    <a  href="https://www.linkedin.com/in/esli-diaz-damazo?originalSubdomain=gt">
                        <div className="p-2 text-center bg-green-500 text-white rounded-full">
                            <p>LinkedIn</p>
                        </div>
                    </a>
                </div>
            </div>
            </div>


        </div>
    </div>
    </>

  )
}

export default index