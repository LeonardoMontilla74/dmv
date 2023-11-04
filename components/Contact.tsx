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
          <p>Si desea contactarnos,
            puede hacerlo a través de nuestras redes sociales,
            nuestro teléfono o nuestro formulario web.
          </p>
          <strong>¡Estaremos encantados de atenderle y resolver sus dudas!</strong>
        </div>
      </section>

      <section className={styles.container}>
        <Form />
      </section>
    </article>
  );
}
