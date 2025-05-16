import Faq from "@/components/home/faq/Faq";
import Hero from "@/components/home/hero/Hero";
import OurServices from "@/components/home/our-services/OurServices";
import Review from "@/components/home/review/Review";
import Service from "@/components/home/services/Service";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <>
        <Hero/>
        <Review/>
        <Service/>
        <OurServices/>
        <WhyChooseUs/>
        <Faq/>  
    </>
  );
}
