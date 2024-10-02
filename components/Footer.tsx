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
    <footer className='flex justify-center items-center w-full '>
      <div className='flex w-ful flex-col justify-center __container items-center px-5 xl:px-0'>
        <div className='flex w-full flex-col lg:text-end lg:justify-between lg:flex-row gap-3 bg-dark-700 py-5 mt-24 px-5'>
          <Image
            src={dokmaiwhitewithtext}
            alt='Footer Image - Dokmai Store'
            className='opacity-80'
            height={50}
          />
          <p className='text-xs font-aktivGroteskLight'>
            <strong>Netflix Premium</strong> คุณภาพสูง ราคาถูก
            พร้อมรับประกันตลอดชีพจาก <br />
            <strong>Dokmai Store</strong> แพลตฟอร์มดิจิทัลชั้นนำของไทย
            <strong>บริการรวดเร็ว</strong> ดูหนังและซีรีส์ได้เต็มอิ่มทุกเวลา
          </p>
        </div>
        <div className='flex items-start md:items-center sm:flex-row flex-col-reverse justify-between md:p-0 px-5 pt-5 w-full border-t-[1px] border-dark-500'>
          <p className='text-dark-100 font-aktivGroteskLight py-5'>
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
          className='opacity-80'
        />
      </div>
    </footer>
  )
}

export default Footer
