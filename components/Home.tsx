import { FaLongArrowAltRight } from 'react-icons/fa';
import styles from '@/components/Home.module.css';

export default function Home() {
  return (
    <article id="home" className={styles.article}>

      <section className={styles.cardServices}>

        <span>
          <h3 className={styles.title}>Asesoramiento en trámites de renovación del
            <br />
            <strong className={styles.strong}>DMV</strong>
          </h3>
        </span>

        <button
          type="button"
          className={styles.buttonCotizar}
        >
          Solicitar cotización
          <FaLongArrowAltRight className={styles.arrow} />
        </button>
      </section>
    </article>
  );
}
