import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { MdGroups } from "react-icons/md"

export const menuFooter = [
  {
    url: "/about",
    title: "Tentang FPI Store",
  },
  {
    url: "/faq",
    title: "FAQ",
  },
  {
    url: "/cara-order",
    title: "Cara Order",
  },
  {
    url: "/blacklist",
    title: "Blacklist",
  },
]

export const navButtons = [
  {
    title: "เกี่ยวกับเรา",
    url: "/about-us",
  },
  {
    title: "เครดิต",
    url: "/testimonials",
  },
  {
    title: "Netflix News",
    url: "/netflix-news",
  },
  {
    title: "Movies or Series Recommendation",
    url: "/netflix-recommendation",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
  {
    title: "ข้อตกลงและเงื่อนไข",
    url: "/terms-and-conditions",
  },
  {
    title: "วิธีการสั่งซื้อ",
    url: "/how-to-order",
  },
]

export const contactsButton = [
  {
    url: "https://chat.whatsapp.com/INXaIq12j2bLch9sVslcfJ",
    icon: (
      <MdGroups className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl m-1 group-hover:text-primary' />
    ),
  },
  {
    url: "https://wa.me/6289684684684",
    icon: (
      <FaWhatsapp className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl m-1 group-hover:text-primary' />
    ),
  },
  {
    url: "https://www.facebook.com/groups/2404456753194087",
    icon: (
      <FaFacebookF className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl m-1 group-hover:text-primary' />
    ),
  },
  {
    url: "https://www.instagram.com/fpistore_net",
    icon: (
      <FaInstagram className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl m-1 group-hover:text-primary' />
    ),
  },
]
