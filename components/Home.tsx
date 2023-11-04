import styles from '@/components/Home.module.css';

export default function Home() {
  return (
    <article id="home" className={styles.article}>

      <section className={styles.cardServices}>

        <span>
          <h3 className={styles.title}>Asesoramiento en tramites de renovación del DMV</h3>
          <p>Nos encargamos de los trámites tediosos, inspecciones,
            renovación de sticker, aseguranzas,
            permisos temporales, títulos y mucho más... </p>
          <strong className={styles.strong}>Para todo tipo de vehículos</strong>
        </span>

      </section>
    </article>
  );
}
