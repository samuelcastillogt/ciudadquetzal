import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
    <Head>
        <title>Contactanos</title>
        <meta name="description" content="Contactanos para obtener mas inforcacion sobre colaboraciones." />
    </Head>
        <div className='flex justify-center items-center flex-col p-5'>
          <h2>Gracias por desear contactarnos.</h2>
          <form action="https://formsubmit.co/e48c3885996d64ec008d6871eb94b147" method="POST" className='flex justify-center items-center flex-col p-5'>
          {/* <div className='flex justify-center items-center flex-col p-5'> */}
            <input type="text" placeholder='Nombre' className='border-black border-2 rounded-lg p-2 w-96' name="nombre"/>
            <input type="email" placeholder='Email' className='border-black border-2 rounded-lg p-2 w-96' name="email"/>
            <textarea name="mensaje" placeholder='Mensaje' className='border-black border-2 rounded-lg p-2 w-96' id="" cols="30" rows="5"></textarea>
            <button className='border-black border-2 rounded-lg p-2 w-96 bg-green-800 text-white' type='submit'>Enviar</button>
            <input type="hidden" name="_next" value="https://ciudadquetzal.com"></input>
            {/* <input type="hidden" name="_captcha" value="false"></input> */}
          
          {/* </div> */}
          </form>
        </div>
    </>

  )
}

export default index