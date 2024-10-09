import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero";

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

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <Hero title="Ciudad Quetzal" subTitle="Bienvenidos a nuestro hogar"/>
      <div className="p-5 text-center">
        <p>Bienvenidos a <b>CiudadQuetzal.com</b> una pagina para mostrar nuestra cultura, tradiciones y </p>
      </div>
      <div style={{width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.8)", position: "fixed", top: "0", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <p className="text-white text-5xl font-bold">Estamos remodelando pronto estaremos de vuelta</p>
      </div>
    </div>
  );
}
