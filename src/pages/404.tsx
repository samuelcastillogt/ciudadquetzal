import Link from "next/link";

export default function Custom404() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-5 py-20 text-center text-black">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-black">404</p>
      <h1 className="mb-4 text-4xl text-black md:text-6xl">Pagina no encontrada</h1>
      <p className="mx-auto mb-8 max-w-xl text-lg text-neutral-700">
        La pagina que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="border border-black bg-black px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-black"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
