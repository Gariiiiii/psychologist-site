'use client';
import { motion } from 'framer-motion';


export default function QuoteSection() {
  return (
    <>
        <section className="relative w-full h-[60vh] flex flex-col justify-center items-center px-6">
            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/bg-img.jpg')" }}> </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center gap-4 text-center text-black max-w-3xl">
                <p className="text-2xl md:text-3xl leading-relaxed">
                    “I have come to believe that caring for myself is not self-indulgent.
                    Caring for myself is an act of survival.”
                </p>
                <p className="text-md text-gray-700">— Audre Lorde</p>
            </motion.div>
        </section>
    </>
  );
}
