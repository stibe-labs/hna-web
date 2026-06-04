import styles from './About.module.css';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* About Content */}
          <FadeIn direction="right" className={styles.content}>
            <h2 className={styles.heading}>About <span className="text-gradient">HNA</span></h2>
            <p className={styles.text}>
              Holistic Network of Accounting LLP is committed to supporting businesses with end-to-end financial and operational solutions.
            </p>
            <p className={styles.text}>
              From bookkeeping and tax compliance to process outsourcing and employee optimization tools, we help organizations streamline operations and focus on growth.
            </p>
          </FadeIn>

          {/* Mission Card - Glassmorphism */}
          <FadeIn direction="left" delay={200} className={`glass ${styles.missionCard}`}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              To simplify business operations by integrating accounting, compliance, and technology into one seamless and efficient solution.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
