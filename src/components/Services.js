import { BriefcaseIcon, ChartIcon, ClipboardIcon, LaptopIcon, LedgerIcon, ScaleIcon } from './Icons';
import styles from './Services.module.css';
import FadeIn from './FadeIn';

const services = [
  {
    title: 'Accounting & Bookkeeping',
    icon: LedgerIcon,
    items: [
      'Complete accounting solutions',
      'Maintenance of books of accounts',
      'Financial reporting and analysis',
      'Cost control and profit optimization',
    ],
  },
  {
    title: 'Tax Consulting & Compliance',
    icon: ScaleIcon,
    items: [
      'Income tax planning and filing',
      'GST registration, filing, and advisory',
      'TDS compliance and returns',
      'Tax optimization strategies',
    ],
  },
  {
    title: 'Financial Management',
    icon: ChartIcon,
    items: [
      'Budgeting and forecasting',
      'Cash flow management',
      'Business performance analysis',
      'Strategic financial planning',
    ],
  },
  {
    title: 'Statutory Compliance Services',
    icon: ClipboardIcon,
    items: [
      'ROC compliance for companies and LLPs',
      'Labour law compliance',
      'Audit coordination and support',
      'Regulatory filings and documentation',
    ],
  },
  {
    title: 'Business Process Outsourcing',
    icon: BriefcaseIcon,
    items: [
      'End-to-end finance outsourcing',
      'Payroll processing',
      'Vendor and receivable management',
      'Back-office operations support',
    ],
  },
  {
    title: 'Application Development',
    icon: LaptopIcon,
    items: [
      'Custom software solutions',
      'Employee productivity tracking systems',
      'Workflow automation tools',
      'HR and operational efficiency solutions',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <FadeIn direction="up" className={styles.sectionHeader}>
          <span className="tag">High-priority services</span>
          <h2 className={styles.heading}>Our <span className="text-gradient">Ecosystem</span></h2>
          <p className={styles.subheading}>Comprehensive solutions tailored for business growth, compliance, and day-to-day operational clarity.</p>
        </FadeIn>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.title} direction="up" delay={idx * 100} className={`glass ${styles.serviceCard}`}>
                <div className={styles.icon}>
                  <Icon />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <ul className={styles.serviceList}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
