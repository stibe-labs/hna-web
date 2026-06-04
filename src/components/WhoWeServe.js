import { CheckIcon } from './Icons';
import styles from './WhoWeServe.module.css';
import FadeIn from './FadeIn';

const audiences = [
  'Startups',
  'Small and medium businesses',
  'Companies and LLPs',
  'Growing enterprises',
  'Businesses seeking reliable outsourcing and compliance support',
];

export default function WhoWeServe() {
  return (
    <section id="serve" className={styles.serveSection}>
      <div className={`container ${styles.serveContainer}`}>
        <FadeIn direction="right" className={styles.textContent}>
          <span className="tag">Who We Serve</span>
          <h2 className={styles.heading}>Built for <span className="text-gradient">Growing Teams</span></h2>
          <p className={styles.description}>
            We partner with businesses at every stage of their growth journey, providing tailored support for financial and operational challenges.
          </p>
        </FadeIn>

        <div className={styles.listContainer}>
          {audiences.map((audience, idx) => (
            <FadeIn key={audience} direction="up" delay={idx * 100} className={`glass ${styles.serveItem}`}>
              <div className={styles.checkIcon}>
                <CheckIcon />
              </div>
              <span>{audience}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
