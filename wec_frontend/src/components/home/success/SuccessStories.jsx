"use client"
import Image from 'next/image'
import React from 'react'

function SuccessStories() {
  return (
    <section className='w-full ' >
      <div className="px-10 pt-40">
        <div className='container'>
          <h1 className='text-white font-workSans text-[80px] leading-none tracking-[-3px]'>
            <span className='text-primary'>Success</span> Stories  <br />
            We've Helped Write
          </h1>
          <div className="w-full  grid lg:grid-cols-12 grid-cols-1 gap-4 pt-20">
            <div className="col-span-4 flex flex-col gap-4">
              <div className="w-full h-[250px] border border-white bg-black rounded-[35px] overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/images/home/success-stories/arabian_smell_logo.png"
                  width={1000}
                  height={1000}
                  alt="hero"
                  title="hero"
                  className=' w-[200px]'
                />
              </div>
              <div className="w-full h-auto border border-white rounded-[35px]  overflow-hidden">
                <Image
                  src="/assets/images/home/success-stories/img1.png"
                  width={1000}
                  height={1000}
                  alt="hero"
                  title="hero"
                  className='w-full h-full'
                />
              </div>
            </div>
            <div className="col-span-8 flex flex-col gap-4">
              <div className='grid md:grid-cols-12 grid-cols-1 gap-4'>
                <div className="md:col-span-6 w-full rounded-[35px] overflow-hidden border border-white h-[520px]">
                  <Image
                    src="/assets/images/home/success-stories/img2.png"
                    width={1000}
                    height={1000}
                    alt="hero"
                    title="hero"
                    className='w-full h-full'
                  />
                </div>
                <div className="md:col-span-6 w-full rounded-[35px] overflow-hidden border border-white h-[520px]">
                  <Image
                    src="/assets/images/home/success-stories/img3.png"
                    width={1000}
                    height={1000}
                    alt="hero"
                    title="hero"
                    className='w-full h-full'
                  />
                </div>
              </div>
              <div className='grid md:grid-cols-12 grid-cols-1 gap-4'>
                <div className="md:col-span-4 w-full rounded-[35px] overflow-hidden border border-white">
                  <Image
                    src="/assets/images/home/success-stories/img4.png"
                    width={1000}
                    height={1000}
                    alt="hero"
                    title="hero"
                    className='w-full h-full'
                  />
                </div>
                <div className="md:col-span-4 w-full rounded-[35px] overflow-hidden border border-white">
                  <Image
                    src="/assets/images/home/success-stories/img5.png"
                    width={1000}
                    height={1000}
                    alt="hero"
                    title="hero"
                    className='w-full h-full'
                  />
                </div>
                <div className="md:col-span-4 w-full rounded-[35px] overflow-hidden border border-white">
                  <Image
                    src="/assets/images/home/success-stories/img6.jpg"
                    width={1000}
                    height={1000}
                    alt="hero"
                    title="hero"
                    className='w-full h-full'
                  />
                </div>
              </div>
            </div>

          </div>
          <h1 className='text-[160px] text-[#FCA311]/18 font-impact w-max text-center  tracking-[-3px]'>
            Crafted with Passion
          </h1>

        </div>


      </div>
    </section>
  )
}

export default SuccessStories