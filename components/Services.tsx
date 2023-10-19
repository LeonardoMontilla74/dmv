import Image from 'next/image';
import cars from '@/assets/cars.png';
import styles from '@/components/Pages.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>

      <div className={styles.cardServices}>

        <span className={styles.frontCard}>
          <h3>Asesoramiento en tramites de renovación del DMV.</h3>
          <p>Hacemos todo tipo de trámites, inspecciones,
            renovación de sticker, aseguranzas,
            permisos temporales, títulos y más</p>
        </span>

        <div className={styles.backCard}>
          <span>
            <strong>Para todo tipo de vehículos</strong>
            <Image
              src={cars}
              alt='todo tipo de vehiculos'
              width={400}
              height={180}
            />
          </span>
        </div>

      </div>
    </section>
  );
}
