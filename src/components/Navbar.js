'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.navbarWrapper} ${hidden ? styles.hidden : ''}`}>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo-clean.webp" alt="HNA Logo" width={150} height={40} style={{ objectFit: 'contain' }} />
          </Link>
          
          <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
            <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="#serve" onClick={() => setMenuOpen(false)}>Who We Serve</Link>
            <Link href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>

          <div className={styles.navActions}>
            <button 
              className={styles.mobileToggle} 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
