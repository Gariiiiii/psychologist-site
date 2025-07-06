'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
    }, [isOpen]);


    return (
        <section className="relative h-screen w-full overflow-hidden pt-30 px-7 md:px-14 pb-7 md:pb-10 bg-light-accent">

            <div className="absolute top-0 left-0 w-full z-10 px-4 md:px-14 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                    src="/logo-transparent.png" 
                    alt="Logo"
                    width={70}       
                    height={70}
                    className="object-contain"
                    priority
                    />
                    <span className="text-gray-800 text-lg leading-snug">
                    Dr. Serena Blake, PsyD <br /> Clinical Psychologist
                    </span>
                </div>
                <div className="md:hidden cursor-pointer z-50"
                    onClick={() => setIsOpen(!isOpen)}>
                    <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 bg-light-accent z-[60] transition-opacity duration-300 ease-in-out overflow-hidden">
                    </div>
                )}

            </div>


            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 overflow-hidden pt-30 px-5 md:px-14 pb-5 md:pb-10">
                    <source src="/ocean-waves.mp4" type="video/mp4" />

                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 flex flex-col gap-y-2 md:gap-y-4 items-center justify-center h-full text-[#FEFEFE] text-center px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-medium">
                    Psychological Care for
                </h1>
                <h2 className="text-4xl md:text-6xl font-serif font-medium mt-2">
                    Growth, Healing, and Resilience
                </h2>
                <p className="mt-6 text-lg max-w-2xl font-light">
                    Offering in-person and virtual therapy sessions for adults in Los Angeles and across California.
                </p>
                <a href="#contact" className="mt-8 px-5 md:px-10 py-5 md:py-8 rounded-tr-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-bl-[50%] uppercase site-bg-color cursor-pointer text-white text-sm font-semibold tracking-wide hover:opacity-80 transition-all ease-in-out duration-300">
                    Schedule a Consultation
                </a>
            </div>
        </section>
    );
}
