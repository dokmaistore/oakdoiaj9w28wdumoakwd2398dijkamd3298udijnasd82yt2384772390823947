"use client"

import React from "react"

const HeroSection = () => {
  return (
    <section
      id='HeroSection'
      className='flex flex-col justify-start items-center __container'
    >
      <div className='h-screen flex flex-col justify-start items-center text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-aktivGroteskMedium text-white mb-4'>
          Watch More Series, <br className='sm:hidden' /> Spend Less Money
        </h1>
        <p className='text-xl md:text-2xl text-gray-200 max-w-xl mx-auto mb-6 font-mono'>
          Get Netflix Premium and other top streaming apps without breaking the
          bank. Enjoy more shows and movies for less, only at Dokmai Store.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
