import Header from "@/components/Header";
import NaveMenu from "@/components/NaveMenu";
import { Html, Head, Main, NextScript } from "next/document";
import { useStore } from "@/store";

export default function Document() {
  const {menu} = useStore((state:any)=> state)
  return (
    <Html lang="es">
           <Head>
           <link rel="icon" href="/divisa.png" />
           <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5314398130823639"
     crossOrigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T93H5FDG');
            `,
          }}
        />
                <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0SQNFDN2BF');          
            `,
          }}
        />
      </Head>
      <body className="antialiased">
      <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T93H5FDG"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
