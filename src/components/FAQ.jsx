'use client';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react'; 
import { motion } from 'framer-motion';


const faqs = [
    {
        question: 'Do you accept insurance?',
        answer: 'No, but a superbill is provided for self-submission.',
    },
    {
        question: 'Are online sessions available?',
        answer: 'Yes—all virtual sessions via Zoom.',
    },
    {
        question: 'What is your cancellation policy?',
        answer: '24-hour notice required.',
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F3F0E8] px-6 md:px-16 py-12 md:py-16 text-[#2F2F2F]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-8">
                <h2 className="text-3xl md:text-4xl text-teal-800">
                    Frequently Asked Questions
                </h2>

                <div className="w-full max-w-3xl flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-teal-800">Therapy</h3>

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-[#3C5064] pb-2 transition-all duration-300">
                            <button
                                className="flex items-start justify-between w-full gap-4 cursor-pointer text-left text-teal-800 font-light text-lg focus:outline-none"
                                onClick={() => toggleFAQ(index)} >
                                    
                                <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 rounded-full border border-teal-800 flex items-center justify-center mt-1 shrink-0">
                                        <ChevronRight className={`transition-transform duration-300 ${
                                            activeIndex === index ? 'rotate-90' : ''
                                        }`} size={18} />
                                    </div>
                                    <span>{faq.question}</span>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out text-md text-teal-800 font-light mt-2 ${
                                activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0' }`} >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
  );
}
