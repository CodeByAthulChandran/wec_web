"use client"

import Image from 'next/image'
import React from 'react'

function Review() {
    const reviewers = [
        {
            src: "/assets/images/home/review/avatar1.png",
            zIndex: '50',
        },
        {
            src: "/assets/images/home/review/avatar2.png",
            zIndex: '-1',
        },
        {
            src: "/assets/images/home/review/avatar3.png",
            zIndex: '50',
        },
        {
            src: "/assets/images/home/review/avatar4.png",
            zIndex: '-1',
        },
    ]
    return (
        <section className='py-8 '>
            <div className="container">
                <div className=" px-4 flex items-center justify-start gap-3">
                    <div className="left-container md:w-1/2 border-4 border-white rounded-[45px] h-[200px] flex items-center justify-center">
                        <div className="flex items-center justify-between w-full px-10">
                            <div className="image-container">
                                <Image
                                    src="/assets/images/common/wec_logo2.png"
                                    width={1000}
                                    height={1000}
                                    alt="wec-logo"
                                    title="wec-logo"
                                    className="w-[150px]"
                                />
                            </div>
                            <div className="text-content text-[26px] leading-[30px] text-white font-workSans font-normal uppercase">
                                <span>Crafting</span> <br />
                                <span>Vision</span> <br />
                                <span>Digitally</span> <br />
                            </div>
                        </div>
                    </div>
                    <div className="right-container md:w-1/2 bg-primary rounded-[45px] h-[200px] flex items-center justify-center">
                        <div className="flex items-center justify-start ps-16 w-full">
                            <div className="reviews-container ">
                                <h4 className='text-[50px] leading-[55px]'>Reviews</h4>
                                <div className="img-container flex items-center justify-between">
                                    <div className='w-[70px] h-[70px] z-50  '>
                                        <Image
                                            src={'/assets/images/home/review/avatar1.png'}
                                            width={1000}
                                            height={1000}
                                            className='w-[70px] h-[70px] object-cover object-top rounded-full shadow-[0px_12px_5px_0px_rgba(0,0,0,0.29)]'
                                            alt=''
                                            title=''
                                        />
                                    </div>
                                    <div className='w-[70px] h-[70px] z-20 -translate-x-[10px]  '>
                                        <Image
                                            src={'/assets/images/home/review/avatar2.png'}
                                            width={1000}
                                            height={1000}
                                            className='w-[70px] h-[70px] object-cover object-top rounded-full shadow-[0px_12px_5px_0px_rgba(0,0,0,0.29)]'
                                            alt=''
                                            title=''
                                        />
                                    </div>
                                    <div className='w-[70px] h-[70px] z-50 -translate-x-[20px]  '>
                                        <Image
                                            src={'/assets/images/home/review/avatar3.png'}
                                            width={1000}
                                            height={1000}
                                            className='w-[70px] h-[70px] object-top object-cover rounded-full shadow-[0px_12px_5px_0px_rgba(0,0,0,0.29)]'
                                            alt=''
                                            title=''
                                        />
                                    </div>
                                    <div className='w-[70px] h-[70px]  z-20 -translate-x-[30px]  '>
                                        <Image
                                            src={'/assets/images/home/review/avatar4.png'}
                                            width={1000}
                                            height={1000}
                                            className='w-[70px] h-[70px] object-top object-cover  rounded-full shadow-[0px_12px_5px_0px_rgba(0,0,0,0.29)]'
                                            alt=''
                                            title=''
                                        />
                                    </div>


                                </div>
                            </div>
                            <div className="rating bg-[#FFF5DF] rounded-[25px] px-8">
                                <span className='text-[70px] font-workSans font-[400] text-black text-center'>4.9/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review