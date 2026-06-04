import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import styles from './Contact.module.css';
import FadeIn from './FadeIn';

const infoItems = [
  {
    label: 'Phone',
    icon: PhoneIcon,
    lines: ['+91 80756 50719', '+91 75588 08911'],
  },
  {
    label: 'Email',
    icon: MailIcon,
    lines: ['info@hnatax.in'],
  },
  {
    label: 'Location',
    icon: MapPinIcon,
    lines: ['Kaloor, SRM Road', 'Ernakulam, Kerala 682018'],
  },
];

const quickLinks = [
  {
    label: 'Call',
    href: 'tel:+918075650719',
    icon: PhoneIcon,
  },
  {
    label: 'Email',
    href: 'mailto:info@hnatax.in',
    icon: MailIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/918075650719',
    icon: WhatsAppIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactGrid}>
          <FadeIn direction="left" className={styles.contactInfo}>
            <div className="tag">Let&apos;s Talk</div>
            <h2 className={styles.heading}>Let&apos;s Build Your Business with <span className="text-gradient">Confidence</span></h2>
            <p className={styles.subheading}>
              Reach the HNA team for accounting, taxation, compliance, outsourcing, and technology support.
            </p>

            <div className={styles.infoList}>
              {infoItems.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <FadeIn key={item.label} direction="up" delay={idx * 150} className={styles.infoItem}>
                    <div className={styles.icon}>
                      <Icon />
                    </div>
                    <div>
                      <p><strong>{item.label}</strong></p>
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200} className={`glass ${styles.contactPanel}`}>
            <span className={styles.panelLabel}>Direct contact</span>
            <h3 className={styles.panelTitle}>Talk to HNA without the extra steps.</h3>
            <p className={styles.panelText}>
              Fast, simple communication for questions, consultations, and ongoing business support.
            </p>

            <nav className={styles.quickLinks} aria-label="Direct contact shortcuts">
              {quickLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={styles.quickLink}
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </nav>

            <dl className={styles.metaList}>
              <div>
                <dt>Website</dt>
                <dd>www.hnatax.in</dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd>Kaloor, Ernakulam</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Accounting, tax, compliance, BPO, and software solutions</dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
