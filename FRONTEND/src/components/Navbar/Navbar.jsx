// ─────────────────────────────────────────────────────────
// COMPONENT: Navbar
// Reusable top navigation bar. Pass `links` array for tabs.
// ─────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar({ links = [], showBack = false }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Brand */}
        <Link to="/" className={styles.brand}>
          Talen<span>tra</span>
        </Link>

        {/* Desktop nav links */}
        {links.length > 0 && (
          <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
            {links.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          {showBack && (
            <button className={styles.backBtn} onClick={() => navigate('/')}>
              ← Back
            </button>
          )}
          {links.length > 0 && (
            <button
              className={styles.hamburger}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className={menuOpen ? styles.barOpen : ''}></span>
              <span className={menuOpen ? styles.barOpen : ''}></span>
              <span className={menuOpen ? styles.barOpen : ''}></span>
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}
