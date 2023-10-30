import Image from 'next/image';
import cars from '@/assets/cars.png';
import styles from '@/components/Pages.module.css';

export default function Services() {
  return (
    <article id="services" className={styles.article}>

      <section className={styles.cardServices}>

        <span>
          <h3>Asesoramiento en tramites de renovación del DMV.</h3>
          <p>Nos encargamos de los trámites tediosos, inspecciones,
            renovación de sticker, aseguranzas,
            permisos temporales, títulos y mucho más... </p>
        </span>

        <span>
          <strong className={styles.strong}>Para todo tipo de vehículos</strong>
          <Image
            src={cars}
            alt='todo tipo de vehiculos'
            width={450}
            height={180}
          />
        </span>

      </section>
    </article>
  );
}
