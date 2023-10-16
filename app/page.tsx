import Image from 'next/image';
import Cars from '@/assets/cars.png';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <h1>DMV - Inspecciones y aseguranzas</h1>
      <Image
        src={Cars}
        alt='Cars'
        width={500}
        height={150}
      />
      <Footer />
    </main>
  );
}
