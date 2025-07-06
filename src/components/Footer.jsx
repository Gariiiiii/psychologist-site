'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F3F0E8] text-center py-12 px-6 flex flex-col items-center gap-4">
      <h2 className="text-2xl md:text-3xl text-[#414135]">
        Dr. Serena Blake, PsyD, Clinical <br /> Psychologist
      </h2>

      <div className="text-[16px] md:text-lg text-[#414135] space-y-2">
        <p>
          <a
            href="mailto:serena@blakepsychology.com"
            className="underline hover:text-gray-900"
          >
            serena@blakepsychology.com
          </a>
        </p>
        <p>
          Phone: <span className="underline">(323) 555-0192</span> Fax: (323) 555-0193
        </p>
        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm text-[#414135] mt-2">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="#" className="hover:underline">Privacy Policy</Link>
        <Link href="#" className="hover:underline">Good Faith Estimate</Link>
      </div>

      <a
        href="#"
        className="mt-4 underline text-md text-[#414135] hover:text-black"
      >
        Client Portal
      </a>

      <p className="text-lg text-[#7E7E6B] mt-6">
        © 2025 Dr. Serena Blake. All rights reserved.
      </p>
    </footer>
  );
}
