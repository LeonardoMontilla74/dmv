import styles from '@/components/Pages.module.css';

export default function About() {
  return (
    <article
      id="about"
      aria-label='Sobre nosotros'
      className={styles.article}
    >
      <section className={styles.container}>
        <div className={styles.cardAbout}>
          <p>Somos una empresa que ofrece servicios de asesoría sobre seguros, dmv, inspecciones
            y placas temporales en Estados Unidos. . Nos enorgullece ofrecer un servicio
            personalizado y adaptado a las necesidades individuales de cada cliente.
            Contamos con un equipo de profesionales capacitados y con experiencia en el sector,
            que le brindarán la mejor atención y solución a sus
            necesidades. Nuestra misión es ayudarle a proteger su patrimonio y su tranquilidad,
            ofreciéndole las mejores opciones de cobertura y precio. Estamos comprometidos con la
            calidad, la honestidad y la satisfacción de nuestros clientes.
          </p>
        </div>
      </section>
    </article>
  );
}
