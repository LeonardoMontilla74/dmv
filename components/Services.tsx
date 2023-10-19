import Image from 'next/image';
import mustang from '@/assets/mustang.jpg';
import cars from '@/assets/cars.png';
import image_inspecciones from '@/assets/inspecciones.jpeg';
import image_aseguranzas from '@/assets/aseguranzas.jpeg';
import styles from '@/components/Pages.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>

      <div className={styles.cardServices}>
        <Image
          src={mustang}
          alt='mustang'
          width={300}
          height={200}
          className={styles.image}
        />

        <span className={styles.text}>
          <h3>Asesoramiento en tramites de renovación del DMV.</h3>
          <p>Hacemos todo tipo de trámites, inspecciones,
            renovación de sticker, aseguranzas,
            permisos temporales, títulos y más</p>
          <strong>Para todo tipo de vehículos</strong>

          <Image
            src={cars}
            alt='todo tipo de vehiculos'
            width={400}
            height={180}
          />
        </span>
        <div>
          <Image
            src={image_inspecciones}
            alt='inspecciones'
            width={180}
            height={200}
            className={styles.image}
          />
          <Image
            src={image_aseguranzas}
            alt='inspecciones'
            width={250}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
