import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import About from '@/components/About';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Services />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}
