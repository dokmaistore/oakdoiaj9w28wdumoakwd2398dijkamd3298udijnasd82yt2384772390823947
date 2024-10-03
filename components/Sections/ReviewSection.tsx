import React from "react"

import { Reviews } from "@/components/Reviews"
import { FiveStarsReview, FiveStarsReview2 } from "@/constant"
import SubTitle from "../SubTitle"

const ReviewSection = () => {
  return (
    <>
      <SubTitle
        title='เครดิต'
        buttonMore='View More Credits'
        urlButtonMore={"/testimonials"}
        className='mt-40'
      />
      <section
        id='5StarsReviews'
        className='h-[40rem] w-screen px-5 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden'
      >
        <Reviews reviewsData={FiveStarsReview} direction='right' speed='slow' />
        <Reviews reviewsData={FiveStarsReview2} direction='left' speed='slow' />
      </section>
    </>
  )
}

export default ReviewSection
