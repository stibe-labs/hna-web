import styles from './Hero.module.css';


export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer} animate-fade-up`}>
        <div className={styles.heroContent}>
          <div className={styles.tagWrapper}>
            <div className="tag">Holistic Network of Accounting LLP</div>
          </div>

          <h1 className={styles.title}>
            Your Complete Business & Financial <span className={styles.titleAccent}>Partner</span>
          </h1>

          <p className={styles.subtitle}>
            Integrated accounting, taxation, compliance, outsourcing, and technology solutions for businesses that want clearer operations and confident growth.
          </p>

        </div>
      </div>
    </section>
  );
}
