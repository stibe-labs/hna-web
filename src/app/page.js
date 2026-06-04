import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhoWeServe from '@/components/WhoWeServe';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ContactDock from '@/components/ContactDock';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhoWeServe />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <ContactDock />
    </>
  );
}
