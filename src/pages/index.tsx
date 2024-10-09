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
    </div>
  );
}
