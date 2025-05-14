import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import navLinks from '@/components/header/nav-links/navLinks'
function Header() {
  return (
    <header
      style={{ zIndex: "9999" }}
      className={"w-full top-0 left-0 z-[9999] transition duration-300 bg-black py-4  "}
    >
      <div className='container py-4 '>
        <nav className='bg-white rounded-[80px] py-2 px-4 '>
          <div className='container py-2 flex items-center justify-between'>
            <div className="logo-container px-4">
              <Link href="/">
                <Image
                  src="/assets/images/common/wec_logo.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className='w-[70px]'
                />
              </Link>
            </div>

            <div className="nav-links font-workSans text-[20px] font-normal flex items-center gap-10 ">
              {
                navLinks.map((link, index) => (

                  <Link
                    className='hover:text-[#FCA311] '
                    key={index}
                    href={link.path}>
                    {link.name}
                  </Link>
                )
                )
              }
            </div>

            <div className="btn-container pe-4 flex items-center gap-6">
              <button type='button' className='bg-primary px-6 py-2 font-workSans font-medium rounded-lg  '>
                Get Quote
              </button>
              <button type='button' className='p-3 py-1'>
                <Image
                  src="/assets/images/common/hamburger-menu.jpg"
                  alt="logo"
                  width={3640}
                  height={3640}
                  className='w-[30px]'
                />
              </button>
            </div>

          </div>
        </nav>
      </div>

    </header>
  )
}

export default Header