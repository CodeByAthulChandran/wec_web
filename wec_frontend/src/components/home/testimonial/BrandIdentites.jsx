import Image from 'next/image'
import React from 'react'

function BrandIdentites() {
    return (
        <section className='py-30 '>
            <div className="relative w-full flex  items-center justify-start gap-4 " >
                <div className="circle absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] rounded-full bg-white overflow-hidden p-3">
                    <video
                        autoPlay

                        loop
                        playsInline
                        className="w-full h-full rounded-full object-cover object-center scale-[1.78]"
                    >
                        <source src="/assets/video/brand/brand_circle.mp4" type="video/mp4" />
                    </video>


                </div>

                {/* Left Section */}
                <div className="left-col flex flex-col gap-4 w-3/12">
                    <div className="w-full rounded-[35px] h-[300px] bg-[#FFF5DE] flex items-center justify-center ">
                        <div className='w-full  flex items-center justify-center'>
                            <Image
                                src='/assets/images/home/brand/mockup1.png'
                                width={1000}
                                height={1000}
                                alt='mockup_1'
                                title='mockup_1'
                                className='w-full object-contain scale-[1.3]'
                            />
                        </div>
                    </div>
                    <div className="w-full rounded-[35px] flex items-center flex-col gap-4">
                        <div className="w-full  bg-black h-[150px] rounded-[35px] overflow-hidden">
                            <Image
                                src='/assets/images/home/brand/mockup2.png'
                                width={1000}
                                height={1000}
                                alt='mockup_1'
                                title='mockup_1'
                                className='w-full -translate-y-[35%]  object-bottom  scale-[1.1]  object-cover'
                            />
                        </div>
                        <div className='w-full h-[150px] rounded-[35px] overflow-hidden'>
                            <Image
                                src='/assets/images/home/brand/mockup3.png'
                                width={1000}
                                height={1000}
                                alt='mockup_1'
                                title='mockup_1'
                                className='w-full object-center object-cover transform translate-y-[-16%] '
                            />
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="center-col w-6/12 flex flex-col gap-4">
                    <div className="w-full rounded-[35px] h-[300px] bg-gradient-to-b from-[black]  to-[#1020A6]  flex items-start    justify-center">
                        <h1 className='text-white leading-none pt-6 text-center'>
                            <span className='text-[42px] tracking-[-3px]'>Crafting Iconic</span> <br />
                            <span className='font-impact text-[52px]'>Brand Identities</span>
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2 h-[310px] bg-gradient-to-bl from-[#1020A6] to-black  rounded-[35px]"></div>
                        <div className="w-1/2 h-[310px] bg-gradient-to-br from-[#1020A6] to-black bg-green-500 rounded-[35px]"></div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-col flex flex-col gap-4 w-3/12">
                    <div className="w-full rounded-[35px]   flex items-center flex-col gap-4">
                        <div className="relative w-full h-[150px] rounded-[35px] overflow-hidden">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-[35px]  z-[-1] object-cover object-center"
                            >
                                <source src="/assets/video/brand/col3_video1.mp4" type="video/mp4" />
                            </video>
                            <div className='absolute top-[14px] left-[20px] tracking-[-1px] text-white font-workSans text-[30px] leading-none'>
                                <span className='text-white font-workSans'>Get a</span> <br />
                                <span className='text-white font-workSans'>Consultation</span>
                            </div>
                        </div>
                        <div className='w-full h-[150px] bg-[#0D3749]  rounded-[35px] overflow-hidden'>
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-[35px]  z-[-1] object-center object-contain    "
                            >
                                <source src="/assets/video/brand/wec_logo_mockup.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="w-full rounded-[35px] h-[300px] bg-[#FFF5DE] flex items-center justify-center hover:bg-[#FCA311] transition-all duration-500">
                        <div className='w-full  flex items-center justify-center'>
                            <Image
                                src='/assets/images/home/brand/mockup4.png'
                                width={1000}
                                height={1000}
                                alt='mockup_4'
                                title='mockup_4'
                                className='w-full object-contain scale-[1.3]'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BrandIdentites