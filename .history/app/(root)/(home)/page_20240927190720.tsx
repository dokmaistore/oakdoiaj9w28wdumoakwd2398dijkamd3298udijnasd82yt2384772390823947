import HeroSection from "@/components/HeroSection"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

export default function Home() {
  return (
    <div>
      <div className='w-full'>
        <TextHoverEffect text='DOKMAI' />
      </div>

      <HeroSection />
    </div>
  )
}
