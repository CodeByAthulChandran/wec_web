'use client'
import Image from 'next/image'
import React from 'react'

function WhyChooseUs() {
    return (
        <section className='why-choose-us w-full bg-white min-h-[100vh] py-10'>
            <div className="px-10">
                <div className="flex gap-4 py-10">
                    <div className="left-section relative  bg-black w-2/3 rounded-[35px] px-8">
                        <div className='group'>
                            <h5 className='text-white font-impact text-[400px] leading-none group-hover:translate-x-[76%] z-30 transition-all duration-200'>Why</h5>
                            <div className=" w-[580px] absolute top-[21%] right-0  translate-x-[68%] group-hover:-translate-x-[50%] transition-all duration-200">
                                <Image
                                    src="/assets/images/home/eye.png"
                                    width={1000}
                                    height={300}
                                    alt="hero"
                                    title="hero"
                                    className='w-full h-[260px] '
                                />
                            </div>
                        </div>
                        <h6 className='text-white font-workSans text-[220px] font-[300] leading-none'>Choose</h6>
                    </div>
                    <div className="right-section w-1/3  bg-black rounded-[35px] flex items-center flex-col  justify-end group">

                        <h6 className='text-primary font-workSans text-[220px] px-8 font-[300] leading-none '>
                            us
                            <span className='text-white font-workSans text-[220px] font-[300]'>?</span></h6>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs