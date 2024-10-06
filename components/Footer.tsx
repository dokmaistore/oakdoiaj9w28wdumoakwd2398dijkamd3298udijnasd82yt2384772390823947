import Image from "next/image"
import React from "react"
import dokmaiwhitewithtext from "@/assets/images/dokmaiwhitewithtext.png"
import dokmaistorefooter from "@/assets/images/dokmaistorefooter.png"
import { MdAlternateEmail } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"
import { FaLine } from "react-icons/fa6"
import Link from "next/link"
import { footerButton } from "@/constant"

const contact = [
  {
    icon: <MdAlternateEmail />,
    url: "mailto:support@dokmaistore.com",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com/dokmaistore",
  },
  {
    icon: <FaXTwitter />,
    url: "https://x.com/DokmaiStore",
  },
  {
    icon: <FaFacebook />,
    url: "https://facebook.com/watchseriesnow01",
  },
  {
    icon: <FaLine />,
    url: "https://lin.ee/Ovlixv5",
  },
]

const Footer = () => {
  return (
    <footer className='flex justify-center items-center w-full bg-dark-800 z-[99999]'>
      <div className='flex w-ful flex-col justify-center __container items-center px-0 bg-dark-800'>
        <div className='flex w-full flex-col lg:justify-between lg:flex-row gap-3 bg-dark-700 py-5 mt-24 px-5'>
          <div className='flex flex-col gap-3'>
            <Image
              src={dokmaiwhitewithtext}
              alt='Footer Image - Dokmai Store'
              className='select-none'
              height={50}
            />
            <p className='text-xs font-aktivGroteskLight select-none'>
              <strong>Netflix Premium</strong> คุณภาพสูง ราคาถูก
              พร้อมรับประกันตลอดชีพจาก <br />
              <strong>Dokmai Store</strong> แพลตฟอร์มดิจิทัลชั้นนำของไทย
              <strong>บริการรวดเร็ว</strong> ดูหนังและซีรีส์ได้เต็มอิ่มทุกเวลา
            </p>
          </div>
          <div className='flex font-aktivGroteskRegular text-xs justify-start xl:justify-end items-start gap-5 underline'>
            {footerButton.map((contact, i) => (
              <Link
                href={contact.url}
                target='_blank'
                key={i}
                className='flex items-center text-light-50 hover:text-light-100 '
              >
                {contact.title}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex items-start md:items-center sm:flex-row flex-col-reverse justify-between md:p-0 px-5 pt-5 w-full border-t-[1px] border-dark-500'>
          <p className='text-dark-100 font-aktivGroteskLight py-5 select-none'>
            Copyright 2022, Dokmai Store. All rights reserved.
          </p>
          <li className='flex gap-5 items-center'>
            {contact.map((contact, i) => (
              <Link
                href={contact.url}
                target='_blank'
                key={i}
                className='text-light-700 hover:text-light-100 text-2xl'
              >
                {contact.icon}
              </Link>
            ))}
          </li>
        </div>
        <Image
          src={dokmaistorefooter}
          alt='Footer Image - Dokmai Store'
          className='select-none'
        />
      </div>
    </footer>
  )
}

export default Footer
