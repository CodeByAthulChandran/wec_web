"use client"
import React from 'react'

function Hero() {
  return (
    <section>
        <div className="container">
                <div className="bg-white px-4 min-h-[70vh] rounded-[75px] flex flex-col items-center justify-center">
                    <h3 className='text-[90px] font-workSans font-[300]  -tracking-[3px] uppercase'>We Build</h3>
                    <h1 className='font-bold text-[160px] group font-impact'>
                        <span>SOLU</span> 
                        <span className='w-[300px] h-[120px] hidden rounded-[80px] bg-secondary group-hover:inline-block transition delay-[0.5s]  '></span>
                        <span>TION</span>
                    </h1>
                </div>
        </div>
    </section>
  )
}

export default Hero