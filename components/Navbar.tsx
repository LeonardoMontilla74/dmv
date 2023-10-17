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
          priority
          className={styles.logo}
        />
      </Link>
      <ul className={styles.listItems}>
        <li>
          <Link
            href='#services'
            className={styles.link}>
            Servicios
          </Link>
        </li>
        <li>
          <Link
            href='#contact'
            className={styles.link}>
            Contáctanos
          </Link>
        </li>
        <li>
          <Link
            href='#about'
            className={styles.link}>
            Sobre Nosotros
          </Link>
        </li>
      </ul>
    </nav>
  );
}
