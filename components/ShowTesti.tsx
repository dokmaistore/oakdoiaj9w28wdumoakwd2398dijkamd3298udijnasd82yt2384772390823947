/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { timeAgo } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"
import { GoChevronRight } from "react-icons/go"
import { GoChevronLeft } from "react-icons/go"
import Loading from "@/components/Loading"
import { unstable_noStore as noStore } from "next/cache"

export default function ShowTesti({
  testimonials,
  paginations,
}: {
  testimonials: any[]
  paginations: boolean
}) {
  noStore()
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const [testimonialsCurrentPage, setTestimonialsCurrentPage] = useState(1)
  const [testimonialsIsLoading, setTestimonialsIsLoading] = useState(true)

  const startIndex = (testimonialsCurrentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentPageData = testimonials.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (testimonialsCurrentPage < totalPages) {
      setTestimonialsCurrentPage(testimonialsCurrentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (testimonialsCurrentPage > 1) {
      setTestimonialsCurrentPage(testimonialsCurrentPage - 1)
    }
  }

  useEffect(() => {
    const creditsimageUrl = testimonials
      .map((testimonial: any) => testimonial.creditsimageUrl)
      .filter((url: string) => url)

    const preloadImages = async () => {
      await Promise.all(
        creditsimageUrl.map((url: string) => {
          return new Promise<void>((resolve) => {
            const img = new window.Image()
            img.src = url
            img.onload = () => resolve()
            img.onerror = () => resolve()
          })
        })
      )
      setTestimonialsIsLoading(false)
    }

    preloadImages()
  }, [testimonials])

  if (testimonialsIsLoading) {
    return <Loading />
  }

  return (
    <div className='flex flex-col justify-center w-full h-full items-center'>
      <p className='text-light-300 mb-5 w-full text-start font-aktivGroteskMedium'>
        Total Transactions {testimonials.length}
      </p>
      <div className='flex w-fit h-full max-md:flex-col gap-4 pb-10'>
        {currentPageData.map((testimonial, index: number) => (
          <div
            key={index}
            className='relative flex flex-col items-center h-full w-full justify-center border-dark-500 border-[1px] rounded-2xl p-5 select-none'
          >
            <Image
              src={testimonial.creditsimageUrl}
              alt={`Credits Or Testimonial Of ${testimonial.item} | Dokmai Store`}
              width={350}
              height={350}
              className='rounded-xl overflow-hidden select-non w-full h-full'
              loading='lazy'
            />
            <span className='flex flex-col w-full justify-start gap-0 mt-3'>
              <p className='flex justify-start font-aktivGroteskBold px-2 py-1 text-light-100 text-xl'>
                {testimonial.posted}
              </p>
              <p className='flex justify-start font-aktivGroteskBold px-2 py-1 text-light-100 text-md -mt-2'>
                ({timeAgo(testimonial.posted)})
              </p>
              <p className='flex justify-start font-aktivGroteskLight px-2 py-1 text-light-100 text-xs'>
                {testimonial.item}
              </p>
            </span>
          </div>
        ))}
      </div>

      {paginations && (
        <div className='flex justify-between items-center py-3 gap-5 border-y-[1px] border-dark-500 text-light-400'>
          <button
            onClick={handlePreviousPage}
            disabled={testimonialsCurrentPage === 1}
            className='p-2 text-light-400 rounded-full border-[1px] border-light-400 disabled:opacity-30 active:bg-dark-600 active:border-light-100 '
            aria-label='Previous Page'
          >
            <GoChevronLeft />
          </button>

          <span className='flex gap-2 font-aktivGroteskRegular select-none'>
            Page{" "}
            <p className='font-aktivGroteskBold'>{testimonialsCurrentPage}</p>{" "}
            of
            <p className='font-aktivGroteskBold'>{totalPages}</p>
          </span>

          <button
            onClick={handleNextPage}
            disabled={testimonialsCurrentPage === totalPages}
            className='p-2 text-light-400 rounded-full border-[1px] border-light-400 disabled:opacity-30 active:bg-dark-600 active:border-light-100 '
            aria-label='Next Page'
          >
            <GoChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
