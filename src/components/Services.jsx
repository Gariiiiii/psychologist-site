'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


// 👇 Data Array
const services = [
  {
    title: 'Anxiety & Stress Management',
    description: 'Anxiety and chronic stress can affect sleep, relationships, and overall well-being. Therapy offers a space to understand thought patterns, learn evidence-based coping tools like mindfulness and CBT, and regain a sense of balance and clarity.',
    image: '/stress-management.jpg',
    alt: 'Anxiety and Stress Management',
  },
  {
    title: 'Relationship Counseling',
    description: 'Relationship challenges—whether with a partner, family member, or friend—can bring emotional strain and disconnection. In therapy, we explore communication patterns, attachment dynamics, and the emotional needs that shape your relationships.',
    image: '/relationship-counselling.jpg',
    alt: 'Relationship Counseling',
  },
  {
    title: 'Trauma Recovery',
    description: 'Healing from trauma involves creating safety, building emotional resilience, and making sense of painful experiences. Therapy provides a compassionate space to process trauma and move toward restoration, meaning, and strength.',
    image: '/trauma-recovery.jpg',
    alt: 'Trauma Recovery',
  },
];

export default function Services() {
  return (
    <section className="bg-[#F3F0E8] px-6 md:px-12 py-8">
      <div className="text-center mb-18">
        <h2 className="text-3xl md:text-4xl font-serif text-[#41413F]">Areas of Focus</h2>
      </div>

       <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-stretch justify-center gap-15">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center flex-1 px-4"
          >
            <div className="w-65 h-65 rounded-full overflow-hidden shadow-sm mb-6">
              <Image
                src={service.image}
                alt={service.alt}
                width={260}
                height={260}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-[#41413F] mb-3">
              {service.title}
            </h3>
            <p className="text-[#41413F] text-md leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
