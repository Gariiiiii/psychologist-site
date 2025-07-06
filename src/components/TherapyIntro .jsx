'use client';
import React from 'react';
import { motion } from 'framer-motion';


export default function TherapyIntro() {
    return (
        <section className="bg-[#F3F0E8] px-6 md:px-20 py-5 md:py-16">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center">

                <h2 className="text-3xl md:text-4xl text-center text-[#41413f] mb-6 leading-relaxed">
                    Therapy can be a space where you invest in yourself—
                    <br className="hidden md:block" />
                    one of the highest forms of self-care.
                </h2>
                <p className="text-[#41413f] text-md md:text-lg mx-auto leading-relaxed">
                    You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues,
                    or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it alone.
                    Therapy offers you the time and space to work toward wellness and peace.
                </p>
            </motion.div>

            <hr className="mt-12 border-t border-[#7E7E6B]" />
        </section>
    );
}
