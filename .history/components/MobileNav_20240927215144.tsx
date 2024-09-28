/* eslint-disable @typescript-eslint/no-unused-vars */
import { navButtons } from "@/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiOutlineMenu } from "react-icons/ai"
import { Roboto } from "next/font/google"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

const roboto = Roboto({
  weight: ["900"],
  style: ["normal"],
  subsets: ["latin"],
})

const MobileNav = () => {
  const path = usePathname()
  return (
    <Drawer>
      <DrawerTrigger className='hidden max-md:flex dark:hover:bg-white/10 hover:bg-black/5 rounded-full p-2'>
        <AiOutlineMenu className='duration-500 text-dark-800 dark:text-dark-300 text-3xl' />
      </DrawerTrigger>
      <DrawerContent className='bg-gray-200 dark:bg-dark-600 border-none px-5 pb-5 gap-10'>
        <div className='gap-5 flex flex-col justify-start items-start'>
          {navButtons.map((nav, i) => (
            <Link
              href={nav.url}
              key={i}
              className={`dark:text-gray-400 flex-col-reverse py-[3px] px-[10px] rounded-full md:text-sm font-medium group duration-200 w-fit ${
                path === nav.url
                  ? "font-black transition-transform duration-700 "
                  : ""
              }${
                path === nav.url
                  ? " dark:text-primary text-primary bg-primary/20"
                  : " hover:dark:text-primary hover:text-primary hover:bg-primary/20"
              }`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <div className='flex flex-col justify-end items-end'>
          <p className='font-mono text-xs tracking-widest'>
            Indonesian Biggest Netflix Seller
          </p>
          <span className='font-fpifont __stroke text-6xl'>FPISTORE</span>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNav
