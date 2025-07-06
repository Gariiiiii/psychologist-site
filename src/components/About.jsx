'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-[#FEFEFE] px-2 md:px-12 pt-12 md:pt-20 pb-16">
          <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-20 px-4 md:px-12">
            <div className="md:hidden w-full text-left">
                <h2 className="text-2xl md:hidden font-semibold text-[#7E7E6B] font-serif">
                    About Dr. Serena Blake
                </h2>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 py-0 px-10 md:px-12 md:p-0 flex justify-center">
                <Image
                    src="/portrait-Dr.-Serena-Blake.jpg"
                    alt="Dr. Serena Blake"
                    width={400}
                    height={500}
                    className="object-cover"
                    priority
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16">
                <h2 className="hidden md:block text-2xl font-semibold text-[#7E7E6B] mb-6 font-serif">
                    About Dr. Serena Blake
                </h2>
                <p className="leading-relaxed mb-4 text-[#7E7E6B]">
                    Dr. Serena Blake, PsyD, is a licensed clinical psychologist based in Los Angeles, California. With eight years of professional experience and over 500 sessions conducted, she offers therapy that is grounded in evidence-based practices and guided by empathy and individualized care.
                </p>
                <p className="leading-relaxed text-[#7E7E6B] mb-4">
                    Dr. Blake blends cognitive-behavioral therapy and mindfulness techniques to support adults navigating anxiety, trauma, and relationship challenges. Her work is centered on creating a calm, supportive space where clients feel seen, understood, and empowered to heal and grow.
                </p>
                <p className="text-[#7E7E6B] leading-relaxed mb-4">
                    She sees clients both in-person at her Maplewood Drive office and virtually through Zoom, allowing for flexibility based on your needs and preferences.
                </p>
                <p className="text-[#7E7E6B] leading-relaxed mb-4">
                    Her areas of focus include anxiety and stress management, relationship counseling, and trauma recovery.
                </p>

                <div className="text-[#7E7E6B] leading-relaxed mb-4">
                    <p>
                    <strong>Office Hours:</strong><br />
                    In-person: Tue & Thu, 10 AM–6 PM<br />
                    Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
                    </p>
                    <p>
                    <strong>Experience:</strong> 8 years, 500+ sessions
                    </p>
                </div>
  

              </div>
              
        </motion.div>

        <hr className="mt-20 border-t border-[#7E7E6B]" />
  
    </section>
  );
}
