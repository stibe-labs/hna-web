import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          
          <div className={styles.footerBrand}>
            <Image src="/logo-clean.webp" alt="HNA Logo" width={180} height={48} style={{ objectFit: 'contain' }} />
            <p className={styles.footerText}>
              Holistic Network of Accounting LLP<br />
              Your complete business and financial partner.
            </p>
            <div className={styles.association}>
              <span className={styles.assocText}>In association with</span>
              <Image src="/Stibe-logo.png" alt="Stibe Logo" width={420} height={140} style={{ objectFit: 'contain', objectPosition: 'left center', marginLeft: '-45px', marginTop: '-20px' }} />
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Our Services</Link></li>
              <li><Link href="#serve">Who We Serve</Link></li>
              <li><Link href="#why-us">Why Choose Us</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>Services</h4>
            <ul>
              <li>Accounting & Bookkeeping</li>
              <li>Tax Consulting</li>
              <li>Statutory Compliance</li>
              <li>Business Process Outsourcing</li>
            </ul>
          </div>
          
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Holistic Network of Accounting (HNA) LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
