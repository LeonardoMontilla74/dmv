import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import styles from './Pages.module.css';
import Form from './Form';

export default function Contact() {
  return (
    <article
      id="contact"
      className={styles.article}
    >

      <section className={styles.container}>
        <div className={styles.cardContact}>
          <p>Si deseas contactarnos,
            puedes hacerlo a través de Facebook,
            WhatsApp o rellenando nuestro formulario web.
          </p>
          <strong>¡Estaremos encantados de atenderte y resolver tus dudas!</strong>

          <div className={styles.socialRed}>
            <Link
              href='https://www.facebook.com/profile.php?id=61552049453742'
              className={styles.link}
            >
              <BsFacebook size={50} />
            </Link>

            <Link
              href='+584166759414'
              type='tel'
              className={styles.link}
            >
              <BsWhatsapp size={50} />
            </Link>
          </div>

        </div>
      </section>

      <section className={styles.container}>
        <Form />
      </section>
    </article>
  );
}
