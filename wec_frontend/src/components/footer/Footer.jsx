"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
function Footer() {
  const data = [
    {
      footerLinks: [
    [
      { name: "Plans & Pricing", link: "#" },
      { name: "Personal AI Manager", link: "#" },
      { name: "AI Business Writer", link: "#" }
    ],
    [
      { name: "Plans & Pricing", link: "#" },
      { name: "Personal AI Manager", link: "#" },
      { name: "AI Business Writer", link: "#" }
    ],
    [
      { name: "Blog", link: "#" },
      { name: "Careers", link: "#" },
      { name: "News", link: "#" }
    ],
    [
      { name: "Documentation", link: "#" },
      { name: "Papers", link: "#" },
      { name: "Press Conferences", link: "#" }
    ]
  ],
      socialMediaLinks: [
        { name: "Twitter", link: "#", icon: <FaXTwitter size={22} /> },
        { name: "Facebook", link: "#", icon: <FaFacebookF size={22} /> },
        { name: "Pinterest", link: "#", icon: <FaPinterest size={22} /> },
        { name: "Instagram", link: "#", icon: <FaInstagram size={22} /> },
      ],
    },
  ];
  return (
    <footer className='w-full bg-black min-h-[80vh] '>
       <h1 className='text-[236px] lg:block hidden font-impact tracking-[6px] text-center text-white !m-0 !p-0 '>Webeyecraft</h1>
      <div className="container">
        <div className="row1 w-full  flex flex-col md:flex-row border-b border-white/32 justify-between items-end pb-10 ">
          <div className="logo-container lg:mb-0 mb-10">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/common/wec_logo2.png"
              alt="Logo"
              className='md:w-[190px] w-[120px]  object-contain'
            />
            <p className='max-w-[70%] font-workSans text-[16px] py-2 font-[400] text-[#FFFFFFD1]'>
              We growing up your business with personal AI manager.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-10 md:w-[60%] w-full pb-4 justify-between '>
            <div className="use-cases flex flex-col gap-4 text-left">
              <h1 className="font-medium text-[#FFFFFFD1] text-[14px]">Platform</h1>
              <ul className=" flex flex-col gap-4 text-[14px]">
                {data[0].footerLinks[0].map((services, index) => (
                  <Link
                    key={index + "xyz"}
                    href={services.link}
                    title={services.name}
                    className='text-[16px] text-[#FFFFFFD1] font-workSans font-[400]  hover:text-[#FCA311] transition-all duration-300'
                  >
                    {services.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="use-cases flex flex-col gap-4 ">
              <h1 className="font-medium text-[#FFFFFFD1] text-[14px]">Platform</h1>
              <ul className=" flex flex-col gap-4 text-[14px]">
                {data[0].footerLinks[1].map((services, index) => (
                  <Link
                    key={index + "xyz"}
                    href={services.link}
                    title={services.name}
                    className='text-[16px] text-[#FFFFFFD1] font-workSans font-[400]  hover:text-[#FCA311] transition-all duration-300'
                  >
                    {services.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="use-cases flex flex-col gap-4 ">
              <h1 className="font-medium text-[#FFFFFFD1] text-[14px]">Company</h1>
              <ul className=" flex flex-col gap-4 text-[14px]">
                {data[0].footerLinks[2].map((services, index) => (
                  <Link
                    key={index + "xyz"}
                    href={services.link}
                    title={services.name}
                    className='text-[16px] text-[#FFFFFFD1] font-workSans font-[400]  hover:text-[#FCA311] transition-all duration-300'
                  >
                    {services.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="use-cases flex flex-col gap-4 ">
              <h1 className="font-medium text-[#FFFFFFD1] text-[14px]">Resources</h1>
              <ul className=" flex flex-col gap-4 text-[14px]">
                {data[0].footerLinks[3].map((services, index) => (
                  <Link
                    key={index + "xyz"}
                    href={services.link}
                    title={services.name}
                    className='text-[16px] text-[#FFFFFFD1] font-workSans font-[400]  hover:text-[#FCA311] transition-all duration-300'
                  >
                    {services.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

        </div>
        {/* row2 */}
        <div className="row2  flex flex-col md:flex-row border-b border-white/32 justify-between items-center py-15">
          <div className="left-section">
            <p className='lg:w-[58%] w-full mb-6 lg:mb-0 font-workSans text-[24px] leading-[32px]   font-semibold text-white'>
              Join our newsletter to keep up to date with us!
            </p>
          </div>
          <div className="right-section">
            <div className='flex flex-col md:flex-row gap-4'>

              <div className='relative'>
                <span className='absolute top-[50%] left-[20px] translate-y-[-50%]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.0002 10.0003C12.3013 10.0003 14.1668 8.13485 14.1668 5.83366C14.1668 3.53247 12.3013 1.66699 10.0002 1.66699C7.69898 1.66699 5.8335 3.53247 5.8335 5.83366C5.8335 8.13485 7.69898 10.0003 10.0002 10.0003Z" stroke="#FCA311" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333" stroke="#FCA311" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <input type="text" placeholder="Enter your email" className='subscribe-input md:w-[360px] pl-[52px] pr-[24px] py-[14px] rounded-[100px] placeholder:text-[#FCA311] text-white placeholder:text-[14px] placeholder:  border border-[#FCA311] ' />
              </div>

              <button className='bg-primary text-black font-workSans text-[14px] font-[500] py-[14px] px-[28px] rounded-[100px]'>
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* row3 */}
        <div className="row3  flex flex-col gap-10 md:flex-row justify-between items-center py-10">
          <div className="terms flex gap-4">
            <Link href="#" className='text-[#FFFFFFD1] text-[14px] font-workSans font-[400]'>
              Terms of Service
            </Link>
            <Link href="#" className='text-[#FFFFFFD1] text-[14px] font-workSans font-[400]'>
              Privacy Policy
            </Link>
            <Link href="#" className='text-[#FFFFFFD1] text-[14px] font-workSans font-[400]'>
              Cookies
            </Link>
          </div>
          <div className="social-media-links">
            <div className='flex gap-2 '>
              {data[0].socialMediaLinks.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className='text-[#FFFFFFD1] text-[16px] font-workSans font-[400] px-2'
                >
                  {item.icon}
                </Link>
              ))}

            </div>
          </div>
          <div className="copy-right">
            <span className='text-[14px] text-[#FFFFFFD1] font-[400] font-workSans'>© 2025 Webeyecraft Technologies pvt ltd</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer