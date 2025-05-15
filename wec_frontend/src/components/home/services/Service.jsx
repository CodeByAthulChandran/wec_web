"use client"
import Image from 'next/image'
import React from 'react'

function Service() {
    return (
        <section className='pt-8 pb-40'>
            <div className="container">
                <div className="text-center border-b border-white">
                    <h2 className='text-center font-impact text text-[326px] leading-none  tracking-[10px] group'>
                        <span className='text-[#FFF5DE] group-hover:text-[#FCA311] transition duration-300'>Serv</span>
                        <span className='text-[#FCA311] group-hover:text-[#FFF5DE] duration-300'>ices</span>
                    </h2>
                </div>

                <div className="flex  pt-20 justify-between ">
                    <div className="left">
                        <div className="flex-col">
                            <div className=" border border-white hover:bg-[#FCA311] transition duration-900 rounded-[19.871px] pb-16 pt-4 ps-8 pe-4 group">
                                <span className='text-white font-workSans text-[76px] font-[300] block leading-none  group-hover:text-black'>Where</span>
                                <span className='text-white font-impact text-[76px] block leading-none  group-hover:text-black'> Creativity</span>
                                <span className='text-white font-impact text-[76px] block leading-none  group-hover:text-black'> Meet</span>
                                <span className='text-[#FCA311] font-workSans text-[76px] block leading-[0.8] font-[300] group-hover:text-white'>Results</span>
                            </div> 
                            <div className=" border-[0.532] hover:bg-[#FFF5DE] transition duration-700 border-[#FFF5DE] rounded-[19.871px] w-[162px] pt-14 pb-10 flex items-center justify-center mt-10 group ">
                                <div>
                                    <span className='text-white font-workSans text-[74px] block leading-[0.6] font-[400] group-hover:text-black'>174</span>
                                    <span className='text-white font-[400] font-workSans  block leading-none  text-[74px] tracking-[-5px] group-hover:text-black' >5+</span>
                                    <span className='text-[#FCA311] font-[400] font-workSans text-[20px] block leading-none  group-hover:text-black'>Clients</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right md:w-3/5 relative">
                        <Image 
                            src="/assets/images/home/service.png"
                            width={1000}
                            height={1000}
                            alt="hero"
                            title="hero"
                            className='w-full h-[620px]  rounded-md shadow-[0px_12px_5px_0px_rgba(0,0,0,0.29)]'
                        />
                        <div className=" absolute top-8 right-8 border-[0.346] hover:bg-[#FFF5DE] transition duration-700 border-[#FFF5DE] rounded-[9px] w-[104px] h-[135px] flex items-center justify-center  group ">
                                <div>
                                    <span className='text-white font-workSans text-[48px] block leading-[0.6] font-[400] group-hover:text-black'>174</span>
                                    <span className='text-white font-[400] font-workSans  block leading-none  text-[48px] tracking-[-5px] group-hover:text-black' >5+</span>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service