"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileNav from "./MobileNav"
import Image from "next/image"
import dokmaiwithtext from "@/assets/images/dokmaiwithtext.png"
import dokmailogo from "@/assets/images/dokmailogo.png"
import { navButtons } from "@/constant"

const Navbar = () => {
  const path = usePathname()

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false)
  const [visible, setVisible] = useState(true)
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const isScrollingDown = prevScrollPos < currentScrollPos
    if (currentScrollPos <= 0) {
      // If at the top of the page, make the navbar always visible
      setVisible(true)
      setScrollToTopVisible(false)
    } else {
      setVisible(isScrollingDown)
      setScrollToTopVisible(currentScrollPos > 350)
    }
    setPrevScrollPos(currentScrollPos)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <nav
      className={`fixed flex flex-col items-start justify-center top-0 left-0 w-full transition-transform duration-500 z-50 transform  ${
        visible ? "translate-y-0" : "-translate-y-full"
      } z-10`}
    >
      <div className='w-full gap-10 bg-dark-800 py-5 flex px-10 lg:px-60 justify-between duration-1000 items-center '>
        <Link href='/' className='flex select-none items-center gap-1 w-fit'>
          <Image
            width={100}
            height={100}
            src={dokmaiwithtext}
            alt='Dokmai Store'
            className='duration-700 hidden lg:block'
          />
          <Image
            width={60}
            height={60}
            src={dokmailogo}
            alt='Dokmai Store'
            className='duration-700 lg:hidden'
          />
        </Link>
        <div className='flex items-center justify-end gap-5'>
          <div className='justify-end items-center gap-3'>
            <Link href='https://dokmaistore.mysellix.io' className=''>
              Buy Now
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
      <div className='w-full gap-10 pt-2 flex px-10 lg:px-60 justify-between duration-1000 items-center'>
        <div className='flex w-full justify-between items-center bg-dark-800/50 backdrop-blur max-md:hidden lg:text-md p-2'>
          <div className=' w-full flex gap-5 justify-between items-center text-white'>
            {navButtons.map((nav, i) => (
              <Link
                href={nav.url}
                key={i}
                className={`text-light-200  border-b-[1px] border-primary flex-col-reverse py-[3px] px-[10px] rounded-sm md:text-sm font-medium group duration-200 ${
                  path === nav.url
                    ? "font-black transition-transform duration-700 "
                    : ""
                }${path === nav.url ? " text-primary" : " hover:text-primary"}`}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
