"use client"
import React from 'react'

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="bg-white px-4 min-h-[70vh] rounded-[75px] flex flex-col items-center justify-center">
          <h3 className='text-[90px] font-workSans font-[300] -tracking-[3px] uppercase'>We Build</h3>
          
          <h1 className='font-bold text-[160px] font-impact group flex items-center justify-center'>
            <span>SOLU</span>
            <span className="relative inline-block w-[0px] h-[0px] group-hover:w-[300px] group-hover:h-[120px] bg-[#FCA311] rounded-[80px] group-hover:mx-6 transition-all duration-700 ease-in-out"></span>
            <span>TION</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
