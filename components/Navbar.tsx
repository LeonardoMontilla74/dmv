import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/Navbar.module.css';
import logo from '@/assets/DMV.png';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link
        href='/'
      >
        <Image
          src={logo}
          alt='logo'
          width={80}
          height={80}
          className={styles.logo}
        />
      </Link>
      <ul className={styles.listItems}>
        <li>Servicios</li>
        <li>Contáctanos</li>
        <li>Sobre Nosotros</li>
      </ul>
    </nav>
  );
}
