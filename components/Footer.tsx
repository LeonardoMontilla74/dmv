import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
import styles from '@/components/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.listFooter}>
        <li>Todos los derechos reservados {' '}
          <AiOutlineCopyrightCircle /> | {' '}
          <span>2023</span>
        </li>
        <li>
          <Link href='https://www.facebook.com/profile.php?id=61552049453742'
            target='_blank'
            className={styles.link}
          >
            <BsFacebook size={22} /> {' '}
            Visítanos en facebook
          </Link>
        </li>
      </ul>
      <div>
        <Link
          href='https://leonardomontilla.vercel.app'
          target='_blank'
          className={styles.link}
        >
          Sitio desarrollado por Leonardo Montilla
        </Link>
      </div>
    </footer>
  );
}
