"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    const faqData = [
        {
            question: "What services do you provide?",
            answer:
                "We provide a range of web development and branding services tailored to your business needs.",
        },
        {
            question: "How long does a project take?",
            answer: "It depends on the scope, but typically we deliver within 2–4 weeks.",
        },
        {
            question: "What is lorem ipsum?",
            answer: "Yes, we offer ongoing support and maintenance packages.",
        },
        {
            question: "What is lorem ipsum?",
            answer: "Yes, we offer ongoing support and maintenance packages.",
        },
        {
            question: "What is lorem ipsum?",
            answer: "Yes, we offer ongoing support and maintenance packages.",
        }
    ];

    return (
        <section className="w-full py-6 relative overflow-hidden">
            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="rotate-90 absolute left-[-10%] z-[-1] top-0 scale-[1.78] w-full h-full"
            >
                <source src="/assets/video/faq/faq_bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="container relative z-10 h-full">
                <h4 className="uppercase text-white text-[40px] font-[300] py-10">Faq</h4>

                <div className="grid md:grid-cols-12 col-span-1 w-full items-center justify-center h-full gap-4">
                    {/* Left circle box */}
                    <div className="md:col-span-4 col-span-1">
                        <div className="flex items-center justify-center h-full">
                            <div className="" />
                            <Image
                                src="/assets/images/home/faq/faq.png"
                                width={1000}
                                height={1000}
                                alt="hero"
                                title="hero"
                                className="w-[400px] hover:bg-white duration-500 transition-all rounded-[133px] border-[1.11px] border-white"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-1"></div>

                    {/* FAQ Section */}
                    <div className="md:col-span-7 col-span-1 ">
                        <div className="space-y-4">
                            {faqData.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className={`border-b border-white px-8 transition-all duration-300 ease-in-out z-[9999]  ${isOpen
                                            ? "bg-[#FF9900] text-black py-10"
                                            : "bg-black py-4"
                                            }`}
                                    >
                                        <button
                                            className="w-full text-left flex justify-between items-center text-xl font-medium focus:outline-none"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            {/* FAQ Question */}
                                            <span
                                                className={`tracking-[-3px] text-[45px] font-[300] font-workSans ${isOpen ? "text-black font-[400]" : "text-white"
                                                    }`}
                                            >
                                                {faq.question}
                                            </span>
                                            <span
                                                className={`text-[30px] ${isOpen ? "text-black" : "text-white"
                                                    }`}
                                            >
                                                {isOpen ? <FaMinus /> : <FaPlus />}
                                            </span>
                                        </button>

                                        {/* FAQ Answer */}
                                        <div
                                            className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen
                                                ? "max-h-[500px] opacity-100 scale-100 py-8"
                                                : "max-h-0 opacity-0 scale-95 py-0"
                                                }`}
                                        >
                                            <p className="text-black text-[30px] font-[400] font-workSans tracking-[-3px]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
