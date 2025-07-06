'use client';
import React from 'react';
import { motion } from 'framer-motion';


export default function Rates() {
    return (
        <section className="bg-[#94B0B0] px-6 md:px-12 py-8 md:py-15 text-black">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-6 text-center">
                <h2 className="text-2xl md:text-3xl">
                    Rates and Insurance
                </h2>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-[16px] md:text-lg">Individual Session - $200</p>
                    <p className="text-[16px] md:text-lg">Couples Session - $240</p>
                </div>

                <div className="flex flex-col items-center gap-4 text-[16px] md:text-lg max-w-[700px] mb-4 md:mb-8">
                    <p>
                        I accept private pay and can provide superbills for potential reimbursement through your insurance plan.
                    </p>
                    <p>
                        Currently out-of-network. Please verify your plan's out-of-network benefits prior to booking.
                    </p>
                </div>
                
            </motion.div>
        </section>
    );
}
