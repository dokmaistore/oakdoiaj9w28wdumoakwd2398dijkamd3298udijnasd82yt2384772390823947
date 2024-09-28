// import HeroSection from "@/components/HeroSection"
import HeroSection from "@/components/HeroSection"
import {
  TextHoverEffect,
  TextHoverEffect,
} from "@/components/ui/text-hover-effect"

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className='flex justify-center items-center'>
        <TextHoverEffect text='DOKMAI' />
        <HeroSection />
      </div>
      {/* <HeroSection /> */}
    </main>
  )
}
