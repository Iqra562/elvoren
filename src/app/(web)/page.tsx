import FeaturedProducts from "@/components/features/home/FeaturedProducts";
import Slider from "@/components/features/home/HomeBanner";

export default function Page() {
  return (
    <section className="min-h-screen  space-y-20"> 
      <Slider />
      <FeaturedProducts/>
    </section>
  )
}