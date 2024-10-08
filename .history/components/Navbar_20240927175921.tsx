"use client"

import React, { useState, useEffect } from "react"
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs"
import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileNav from "./MobileNav"
import Image from "next/image"
import dokmaiwithtext from "@/assets/images/dokmaiwithtext.png"

const Navbar = () => {
  const navButtons = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Payment",
      url: "/payment",
    },
    {
      title: "What's On Netflix",
      url: "/what-is-on-netflix",
    },
  ]

  const path = usePathname()

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme")
      return storedTheme !== null ? storedTheme : "dark"
    }
    return "dark" // Default theme for server-side rendering
  })
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

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
      className={`flex items-start justify-center w-full pt-5 transition-transform duration-500 z-50 transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      } z-10`}
    >
      <div className='w-fit gap-10 backdrop-blur-sm dark:bg-dark-600/50 bg-gray-200/50 rounded-3xl md:rounded-2xl py-1 flex px-6 justify-between duration-1000 items-center shadow-lg shadow-black/25 dark:shadow-black/70'>
        <Link href='/' className='flex select-none items-center gap-1 py-3'>
          <Image
            width={60}
            height={60}
            src={dokmaiwithtext}
            alt='Footer Picture'
            className='duration-700'
          />
        </Link>
        <div className='flex items-center justify-between gap-5 lg:gap-10'>
          <div className='max-md:hidden flex lg:text-md'>
            <div className='flex lg:gap-7 gap-5 items-center'>
              {navButtons.map((nav, i) => (
                <Link
                  href={nav.url}
                  key={i}
                  className={`dark:text-gray-400 flex-col-reverse py-[3px] px-[10px] rounded-full md:text-sm font-medium group duration-200 ${
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
          </div>
          <div className='h-10 w-[1px] bg-dark-500 md:hidden' />
          <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-5'>
            <button
              onClick={handleThemeSwitch}
              className='relative items-center justify-center p-2 transition-transform duration-500 md:bg-black/5 dark:hover:bg-white/10 hover:bg-black/5 rounded-full'
            >
              <BsSunFill className='absolute text-lg opacity-0 dark:opacity-100 lg:text-xl duration-500 text-dark-800 dark:text-gray-300' />
              <BsFillMoonStarsFill className='text-lg dark:opacity-0 lg:text-xl duration-500 text-dark-800 dark:text-gray-300' />
            </button>
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
