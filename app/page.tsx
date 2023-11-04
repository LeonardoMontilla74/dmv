import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import About from '@/components/About';
import WelcomeCard from '@/components/WelcomeCard';
import Home from '@/components/Home';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <WelcomeCard />
      <Home />
      <Services />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}
