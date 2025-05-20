import Faq from "@/components/home/faq/Faq";
import Hero from "@/components/home/hero/Hero";
import OurServices from "@/components/home/our-services/OurServices";
import Review from "@/components/home/review/Review";
import Service from "@/components/home/services/Service";
import SuccessStories from "@/components/home/success/SuccessStories";
import Testimonial from "@/components/home/testimonial/Testimonial";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Review />
      <Service />
      <OurServices />
      <WhyChooseUs />
      <Testimonial />
      <SuccessStories />
      <Faq />
    </>
  );
}
