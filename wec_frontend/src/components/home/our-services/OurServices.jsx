import Image from 'next/image';
import React from 'react'

function OurServices() {

    const services = [
        {
            title: "Web Design & Dev",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Branding & Identity",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Mobile App Development",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Digital Marketing",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Corporate Solutions",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Tech Solutions & Consulting",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Cloud & DevOps",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Creative Design",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "E-commerce Solutions",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Business Automation",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Consulting & Strategy",
            description: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Ongoing Support & Maintenance",
            description: "Lorem Ipsum is simply dummy text of the printing",
        }
    ]
    return (
        <section className='min-h-screen pt-8 pb-40'>
            <div className="relative">

                <div className="absolute top-[400px] -left-[500px] w-[1000px] h-[1200px] rounded-full z-[-1] opacity-50 blur-[80px] bg-[radial-gradient(circle,_#1020A6_0%,_transparent_100%)]"></div>

                <div className="absolute bottom-0 -right-[500px] w-[1000px] h-[1200px] rounded-full z-[-1] opacity-50 blur-[80px] bg-[radial-gradient(circle,_#1020A6_0%,_transparent_100%)]"></div>

                <div className="container pb-10">
                    <h1 className='text-[100px] -tracking-[5px] leading-[1.1] font-[300]'>
                        <span className='uppercase font-workSans text-white'>
                            Empowering Efficiency
                        </span> <br />
                        <span className='font-impact text-primary me-4 tracking-normal'>IT Solutions</span>
                        <span className='font-workSans text-white'>FOR</span> <br />
                        <span className='font-workSans text-white uppercase'>the next Gen</span>
                    </h1>
                </div>

                {/* services list from 1 to 6 */}
                <div className="service-lists pt-20  overflow-hidden">
                    {
                        services.slice(0, 6).map((service, index) => {
                            const isReversed = Math.floor(index / 3) % 2 !== 0;
                            const isEven = index % 2 === 0;
                            const bgColor = isEven ? 'bg-[#FCA311]' : 'bg-[#FFF5DE]';
                            return (
                                <div key={index} className="relative group overflow-hidden">
                                    {/* background overlay that slides in */}
                                    <div className={`absolute top-0 ${isReversed ? 'left-0' : 'right-0'} w-0 group-hover:w-full h-full ${bgColor} transition-all duration-500 ease-in-out z-0`}></div>

                                    <div className={`service relative z-10 flex ${isReversed ?
                                        'flex-row-reverse' : 'flex-row'} justify-between items-center py-6 px-10 border-b border-[#4D4D4D] text-white group-hover:text-black transition-colors duration-500`}>

                                        <div className={`flex  ${isReversed ? 'justify-end text-end' : 'justify-start text-start'}`}>
                                            <p className="font-workSans max-w-[70%]">
                                                {service.description}
                                            </p>
                                        </div>

                                        <h4 className="uppercase text-[60px] text-end font-[300] tracking-[-5px] whitespace-nowrap">{service.title}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="hero-section container flex items-center justify-center w-full pt-40 pb-20 select-none">
                    <div className="hero-container relative w-[80%] bg-[#FFF5DE] rounded-[35px] h-[450px] ">
                        <div className="title pt-10">
                            <h1 className="flex flex-col leading-none ps-20 tracking-[-2px]">
                                <span className="text-[#FCA311] font-impact text-[180px] ">
                                    Solution
                                </span>
                                <span className="text-black font-workSans text-[50px] ms-24">
                                    That Drive
                                </span>
                                <span className="text-black font-impact text-[180px] -mt-10">
                                    Success
                                </span>
                            </h1>
                        </div>
                        <div className="hero_image  absolute bottom-0 right-[26px]">
                            <Image
                                className='w-full object-cover h-[600px]'
                                src={'/assets/images/home/all-services-hero.png'}
                                width={1000}
                                height={1000}
                                alt="hero"
                                title="hero"
                            />
                        </div>
                    </div>
                </div>

                {/* services list from 7 to 12*/}
                <div className="service-lists pt-20">
                    {
                        services.slice(6, 12).map((service, index) => {
                            const isReversed = Math.floor(index / 3) % 2 !== 0;
                            const isEven = index % 2 === 0;
                            const bgColor = isEven ? 'bg-[#FCA311]' : 'bg-[#FFF5DE]';
                            return (
                                <div key={index} className="relative group overflow-hidden">
                                    {/* background overlay that slides in */}
                                    <div className={`absolute top-0 ${isReversed ? 'left-0' : 'right-0'} w-0 group-hover:w-full h-full ${bgColor} transition-all duration-500 ease-in-out z-0`}></div>

                                    <div className={`service relative z-10 flex ${isReversed ?
                                        'flex-row-reverse' : 'flex-row'} justify-between items-center py-6 px-4 border-b border-[#4D4D4D] text-white group-hover:text-black transition-colors duration-500`}>

                                        <div className={`flex  ${isReversed ? 'justify-end text-end' : 'justify-start text-start'}`}>
                                            <p className="font-workSans max-w-[70%]">
                                                {service.description}
                                            </p>
                                        </div>

                                        <h4 className="uppercase text-[60px] text-end font-[300] tracking-[-5px] whitespace-nowrap">{service.title}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default OurServices