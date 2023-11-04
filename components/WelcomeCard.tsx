/* eslint-disable max-len */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import family from '@/assets/family.jpg';
import styles from './WelcomeCard.module.css';

export default function WelcomeCard() {
  const [show, setShow] = useState(false);

  return (
    <section className={show ? styles.cardContainer : styles.notShow}>
      <div className={styles.card}>

        <>
          <Image
            src={family}
            alt='Conoce nuestros servicios presionando el boton'
            width={400}
            height={250}
            priority
          />
        </>

        <>
          <span>
            <p className={styles.title}>¡Hey! Conoce el servicio que necesitas...</p>
            <Link
              href='#services'
            >
              <center>
                <button
                  type="button"
                  className={styles.getButton}
                  onClick={() => setShow(false)}>
                  Aquí
                  <FaLongArrowAltRight className={styles.arrow} />
                </button>
              </center>
            </Link>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setShow(false)}>
              X
            </button>
          </span>
        </>
      </div>
    </section>
  );
}
