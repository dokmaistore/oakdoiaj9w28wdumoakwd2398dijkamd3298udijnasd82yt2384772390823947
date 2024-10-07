/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next"
import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export const metadata: Metadata = {
  title: "แอพพรีเมียมคุณภาพสูง | Dokmai Store",
  description:
    "แพลตฟอร์มสินค้าดิจิทัลที่ดีที่สุดในประเทศไทย สำหรับทุกคนที่ต้องการบัญชีแอพพรีเมียมในราคาถูกและคุณภาพดี ไม่ว่าจะเป็น Netflix Premium, Amazon Prime Video หรือบริการอื่น ๆ ที่ Dokmai Store เราเป็นผู้ขายอันดับหนึ่งในไทย พร้อมการันตีคุณภาพการใช้งานตลอดอายุการใช้งาน ด้วยบริการที่เชื่อถือได้ ตอบกลับลูกค้าอย่างรวดเร็วภายใน 10 นาที และไม่เกิน 24 ชั่วโมง พร้อมช่วยแก้ไขปัญหาทุกอย่างเพื่อให้คุณได้รับประสบการณ์การใช้งานที่ดีที่สุด",
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
  },
  keywords:
    "Netflix Premium, บัญชี Netflix, บริการสตรีมมิ่ง, ดูหนังออนไลน์, ดูซีรีส์, บัญชีราคาถูก, Dokmai Store, ซื้อ Netflix ราคาถูก, บัญชี Netflix ราคาถูก, บัญชี Netflix คุณภาพดี, บริการลูกค้าไว, Netflix Premium, Netflix, Premium, Netflix Account, Account, Netflix Access, Dokmai, Store, Dokmai Store, Digital Product, Premium App, Streaming Service, Service, Streaming, Movie, Movies, Series, Action, Comedy, Drama, Romantic, Watching, Netflix Series, Netflix Movie, Cheap, Cheap Price, High Quality, Good Quality, Quality, amazon prime video, prime video, Fast Service, Fast Response, Trustable, Reliable, Affordable, เน็ตฟลิกซ์พรีเมียม, เน็ตฟลิกซ์, พรีเมียม, บัญชีเน็ตฟลิกซ์, บัญชี, แอคเค้าท์เน็ตฟลิกซ์,  แอคเค้าท์, เน็ตฟลิกซ์ Access, ดอกไม้สโตร์, ดอกไม้, สโตร์, ร้านค้า, สินค้าดิจิทัล, สินค้าดิจิตอล, แอพพรีเมียม, บริการสตรีมมื่ง, บริการ, สตรีมมิ่ง, หนัง, ดูหนัง, ซีรีย์, ดูซีรีย์, ดู, ซีรีย์เน็ตฟลิกซ์, ซีรีย์ Netflix, Series เน็ตฟลิกซ์, หนังเน็ตฟลิกซ์, หนัง Netflix, ราคาถูก, ราคาดี, ถูก, คุณภาพดี, คุณภาพสูง, คุณภาพ, บริการเร็ว, บริการไว, บริการดี, ตอบเร็ว, ตอบไว, น่าเชื่อถือ, เชื่อถือได้",
  openGraph: {
    type: "website",
    url: "https://www.dokmaistore.com",
    title: "แอพพรีเมียมคุณภาพสูง | Dokmai Store",
    description:
      "แพลตฟอร์มสินค้าดิจิทัลที่ดีที่สุดในประเทศไทย สำหรับทุกคนที่ต้องการบัญชีแอพพรีเมียมในราคาถูกและคุณภาพดี ไม่ว่าจะเป็น Netflix Premium, Amazon Prime Video หรือบริการอื่น ๆ ที่ Dokmai Store เราเป็นผู้ขายอันดับหนึ่งในไทย พร้อมการันตีคุณภาพการใช้งานตลอดอายุการใช้งาน ด้วยบริการที่เชื่อถือได้ ตอบกลับลูกค้าอย่างรวดเร็วภายใน 10 นาที และไม่เกิน 24 ชั่วโมง พร้อมช่วยแก้ไขปัญหาทุกอย่างเพื่อให้คุณได้รับประสบการณ์การใช้งานที่ดีที่สุด",
    images: [
      {
        url: "https://www.dokmaistore.com/images/og-dokmaistore.webp",
        width: 1200,
        height: 630,
        alt: "Netflix Premium คุณภาพสูง ราคาถูก ที่ Dokmai Store",
      },
    ],
    siteName: "Dokmai Store",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DokmaiStore",
    title: "แอพพรีเมียมคุณภาพสูง | Dokmai Store",
    description:
      "แพลตฟอร์มสินค้าดิจิทัลที่ดีที่สุดในประเทศไทย สำหรับทุกคนที่ต้องการบัญชีแอพพรีเมียมในราคาถูกและคุณภาพดี ไม่ว่าจะเป็น Netflix Premium, Amazon Prime Video หรือบริการอื่น ๆ ที่ Dokmai Store เราเป็นผู้ขายอันดับหนึ่งในไทย พร้อมการันตีคุณภาพการใช้งานตลอดอายุการใช้งาน ด้วยบริการที่เชื่อถือได้ ตอบกลับลูกค้าอย่างรวดเร็วภายใน 10 นาที และไม่เกิน 24 ชั่วโมง พร้อมช่วยแก้ไขปัญหาทุกอย่างเพื่อให้คุณได้รับประสบการณ์การใช้งานที่ดีที่สุด",
    images: [
      {
        url: "https://www.dokmaistore.com/images/og-dokmaistore.webp",
        alt: "Netflix Premium คุณภาพสูง ราคาถูก ที่ Dokmai Store",
      },
    ],
  },
  alternates: {
    canonical: "https://www.dokmaistore.com",
    languages: {
      "th-TH": "https://www.dokmaistore.com/th",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <head>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-X6ZTVB6G8L'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X6ZTVB6G8L');
            `,
          }}
        />
      </head>
      <body className='font-aktivGroteskRegular min-h-screen bg-dark-800 text-light-200 overflow-x-hidden'>
        <Navbar />
        <div className='flex flex-col justify-start items-center w-full min-h-screen py-10 pt-20'>
          {children}
        </div>
        <Footer />
        {/* <div className='w-full font-aktivGroteskBold h-5 fixed bottom-0 flex justify-center items-center bg-cyan-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-orange-500 2xl:bg-red-500 '>
          <p className='hidden sm:block md:hidden'>sm</p>
          <p className='hidden md:block lg:hidden'>md</p>
          <p className='hidden lg:block xl:hidden'>lg</p>
          <p className='hidden xl:block 2xl:hidden'>xl</p>
          <p className='hidden 2xl:block'>2xl</p>
        </div> */}
      </body>
    </html>
  )
}
