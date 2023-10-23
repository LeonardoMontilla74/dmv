import styles from './Pages.module.css';
import stylesW from './Whatsapp.module.css';
import WhatsappForm from './WhatsappForm';

export default function Contact() {
  return (
    <aside
      id="contact"
      className={styles.section}
    >
      <section className={stylesW.container}>
        <WhatsappForm />
      </section>
    </aside>
  );
}
