import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Home";
import QuoteSection from "@/components/Quote";
import Rates from "@/components/Rates";
import Services from "@/components/Services";
import TherapyIntro from "@/components/TherapyIntro ";

export default function Home() {
  return (
    <main>
        <Hero />
        <About />
        <TherapyIntro />
        <Services />
        <Rates />
        <FAQ />
      <Contact />
      <QuoteSection />
      <Footer />
    </main>
  );
}
