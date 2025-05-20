//src/components/home/testimonial/Testimonial.jsx

'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './testimonial.css'
import BrandIdentites from './BrandIdentites';

const testimonials = [
    {
        image: '/assets/images/home/testimonials/avatar1.png',
        name: 'Jason Mercer',
        position: 'CEO',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius error deserunt possimus, similique debitis odit beatae commodi ut nostrum maiores mollitia! Corrupti accusantium minus totam fugiat magni nam tenetur.",

    },
    {
        image: '/assets/images/home/testimonials/avatar2.png',
        name: 'Riley Heart',
        position: 'COO',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius error deserunt possimus, similique debitis odit beatae commodi ut nostrum maiores mollitia! Corrupti accusantium minus totam fugiat magni nam tenetur.",
    },
    {
        image: '/assets/images/home/testimonials/avatar3.png',
        name: 'Rajeev Singh',
        position: 'Founder',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius error deserunt possimus, similique debitis odit beatae commodi ut nostrum maiores mollitia! Corrupti accusantium minus totam fugiat magni nam tenetur.",
    },
    {
        image: '/assets/images/home/testimonials/avatar4.png',
        name: 'Nova Ryze',
        position: 'CEO',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius error deserunt possimus, similique debitis odit beatae commodi ut nostrum maiores mollitia! Corrupti accusantium minus totam fugiat magni nam tenetur.",
    },
];


const logos = [
    '/assets/images/home/testimonials/arabian.png',
    '/assets/images/home/testimonials/caropticz.png',
    '/assets/images/home/testimonials/persist.png',
    '/assets/images/home/testimonials/voxy.png',
];
function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showReview, setShowReview] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowReview(true), 2000);
        const timer2 = setTimeout(() => {
            setShowReview(false);
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [activeIndex]);

    const current = testimonials[activeIndex];
    const reviewBg = activeIndex % 2 === 0 ? 'bg-[#FFF5DE]' : 'bg-[#FCA311]';

    return (
        <section className='w-full bg-white  py-10'>
            <div className="px-10">
                <div className="flex items-center justify-between gap-4">
                    <div className="feedbacks relative w-4/12 h-[460px] rounded-[35px]">
                        <div className="client_img w-full h-full flex items-center justify-center">
                            <Image
                                src={current.image}
                                width={1000}
                                height={1000}
                                alt="client"
                                title="client"
                                className="w-full h-full object-cover  rounded-[35px] "
                            />
                        </div>
                        {showReview &&
                            (<div className={`review absolute top-0 left-0 w-full h-full  bg-primary rounded-[35px] ${reviewBg}`}>
                                <div className=" px-6  pt-8">
                                    <div className='clinet_info'>
                                        <h1 className='client_name text-[52px] font-semibold font-workSans text-black leading-none'>
                                            {current.name}
                                        </h1>
                                        <div className="client_designation">
                                            <p className='text-black text-[30px] tracking-[-3px] font-workSans font-[300]'>{current.position}</p>
                                        </div>
                                    </div>
                                    <div className="client_review mt-4">
                                        <p className='text-black text-[22px] font-workSans text-justify font-[300] leading-[1.8] '>{current.review}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="our_clients w-8/12 bg-black rounded-[35px] ">
                        <div className='flex flex-col items-start justify-between  ps-10 py-6'>
                            <div className="details">
                                <h4 className=' text-[80px] font-impact tracking-normal leading-none'>
                                    <span className='text-[#FCA311] block'>Trusted <span className='text-[#FFF5DE]'>By</span></span>
                                    <span className='text-[#FCA311]'>Leading <span className='text-[#FFF5DE]'>Brands</span></span>

                                </h4>
                                <div className="desc pt-4">
                                    <p className='text-white text-[20px] font-workSans font-[300] text-justify max-w-[75%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            {/* Logos Marquee */}
                            <div className="clients_logo pt-10 pb-6 w-full overflow-hidden relative">
                                <div className="logo-track flex gap-20 animate-scroll-logos">
                                    {[...logos, ...logos].map((src, idx) => (
                                        <div key={idx} className="logo-item group relative hover:scale-110 transition-all duration-300">
                                            <Image
                                                src={src}
                                                alt={`brand-logo-${idx}`}
                                                width={1000}
                                                height={1000}
                                                className="w-[120px] h-[120px] object-contain opacity-100   transition-opacity duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
               <div className='px-10'> <BrandIdentites/></div>
            </div>
        </section>
    )
}

export default Testimonial