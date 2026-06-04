import { BuildingIcon, ChartIcon, CheckIcon, RocketIcon, ShieldIcon, UsersIcon } from './Icons';
import styles from './WhyChooseUs.module.css';
import FadeIn from './FadeIn';

const reasons = [
  {
    title: 'Holistic Model',
    description: 'A complete service model under one roof for financial, compliance, and operational support.',
    icon: BuildingIcon,
  },
  {
    title: 'Experienced Professionals',
    description: 'Guided by experts with practical knowledge, business context, and industry experience.',
    icon: UsersIcon,
  },
  {
    title: 'Technology-Driven',
    description: 'Smart systems and modern software that simplify day-to-day business operations.',
    icon: RocketIcon,
  },
  {
    title: 'Cost-Effective',
    description: 'Outsourcing strategies designed to improve efficiency and protect operating margins.',
    icon: ChartIcon,
  },
  {
    title: 'Reliable Support',
    description: 'Dependable, compliant support that keeps your business ready for the next step.',
    icon: ShieldIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={styles.whySection}>
      <div className="container">
        <FadeIn direction="up" className={styles.header}>
          <div className="tag">The HNA Advantage</div>
          <h2 className={styles.heading}>Why Choose <span className="text-gradient">Us</span></h2>
          <p className={styles.subheading}>The advantages of partnering with a holistic financial network.</p>
        </FadeIn>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;

            return (
              <FadeIn key={reason.title} direction="up" delay={idx * 100} className={`glass ${styles.reasonCard}`}>
                <div className={styles.iconBox}>
                  <Icon />
                </div>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonText}>{reason.description}</p>
                <CheckIcon className={styles.cornerIcon} />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
