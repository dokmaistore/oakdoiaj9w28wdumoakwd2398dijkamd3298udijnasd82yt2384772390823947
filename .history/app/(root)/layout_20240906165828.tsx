import type { Metadata } from "next"
import "../../styles/globals.css"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Watch Series Now!",
  description: "watch series now website for payment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased font-wsnfont h-screen'>
        <div className='flex flex-col justify-center items-center w-full p-10'>
          {children}
        </div>
        <Footer />
        <div className='w-full h-2 fixed bottom-0 bg-green-500 sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-500' />
      </body>
    </html>
  )
}
