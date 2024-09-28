import HeroSection from "@/components/HeroSection"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

export default function Home() {
  return (
    <div>
      <div className='w-full flex flex-col gap-10'>
        <div className='items-center justify-center flex flex-col h-[40rem] bg-red-600'>
          <TextHoverEffect />
        </div>
      </div>

      <HeroSection />
    </div>
  )
}
