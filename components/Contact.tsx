import Image from 'next/image';
import styles from './Pages.module.css';
import stylesW from './Whatsapp.module.css';
import WhatsappForm from './WhatsappForm';
import bmw from '@/assets/bmw.png';

export default function Contact() {
  return (
    <article
      id="contact"
      className={styles.article}
    >

      <section className={stylesW.container}>
        <div className={styles.cardContact}>
          <p>Si desea contactarnos,
            puede hacerlo a través de nuestras redes sociales,
            nuestro teléfono o nuestro formulario web.
          </p>
          <strong>¡Estaremos encantados de atenderle y resolver sus dudas!</strong>
          <Image
            src={bmw}
            alt='contactanos'
            width={150}
            height={120}
            className={styles.car}
          />
        </div>
      </section>

      <section className={stylesW.container}>
        <WhatsappForm />
      </section>
    </article>
  );
}
