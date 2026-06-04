import { MailIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import styles from './ContactDock.module.css';

const contactLinks = [
  {
    label: 'Call',
    href: 'tel:+918075650719',
    className: styles.call,
    icon: PhoneIcon,
  },
  {
    label: 'Email',
    href: 'mailto:info@hnatax.in',
    className: styles.email,
    icon: MailIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/918075650719',
    className: styles.whatsapp,
    icon: WhatsAppIcon,
  },
];

export default function ContactDock() {
  return (
    <nav className={styles.dock} aria-label="Quick contact links">
      {contactLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`${styles.action} ${link.className}`}
            aria-label={link.label}
            data-label={link.label}
          >
            <Icon />
          </a>
        );
      })}
    </nav>
  );
}
