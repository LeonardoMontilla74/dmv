import styles from './Pages.module.css';
import stylesW from './Whatsapp.module.css';
import WhatsappForm from './WhatsappForm';

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
        </div>
      </section>

      <section className={stylesW.container}>
        <WhatsappForm />
      </section>
    </article>
  );
}
