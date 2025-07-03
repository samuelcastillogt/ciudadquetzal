import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { apiService } from '@/services/api.service'
import { useStore } from '@/store'
import BusinessCard from '@/components/BusinessCard'
function index() {
  const [filtro, setFiltro] = useState<string>("todos");
  const { busines, categories } = useStore((state: any) => state);
  return (
    <>
      <Head>
        <title>Mercadito Digital</title>
        <meta name="description" content="Encuentra de forma facil los negocio de emprendedores locales." />
      </Head>
      <main className="container mx-auto max-w-5xl py-8 px-4">
        <section className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-primary">Mercado Digital de Ciudad Quetzal</h2>
          <p className="text-lg text-gray-700 mb-4">Filtrar por categoría</p>
          {categories.length > 0 && (
            <select
              onChange={e => setFiltro(e.target.value)}
              className="rounded-lg border border-primary text-lg md:text-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-accent bg-white text-primary shadow mb-4"
            >
              <option key="todos" value="todos">Todos</option>
              {categories.map((i: any) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          )}
        </section>
        <section>
          <div className="flex flex-wrap gap-6 justify-center items-stretch">
            {busines && busines.length > 0 && filtro === "todos"
              ? busines.map((i: any) => (
                  <BusinessCard id={i.id} data={i.data} key={i.id} />
                ))
              : busines.map((i: any) => {
                  if (i.data.categoria === filtro) {
                    return <BusinessCard id={i.id} data={i.data} key={i.id} />;
                  }
                  return null;
                })}
          </div>
        </section>
      </main>
    </>
  );
}

export default index