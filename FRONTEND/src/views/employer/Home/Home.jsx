// VIEW: Home (Employer) — Hero + Stats
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.badge}>Employer Solutions</div>
        <h1>
          Build Your <em>Dream Team</em><br />with Precision Hiring
        </h1>
        <p>
          We connect you with pre-vetted, high-impact talent — from individual
          contributors to C-suite leadership.
        </p>
        <Link to="/employer/contact" className={styles.cta}>
          Contact Us &nbsp;→
        </Link>

        
      </div>
    </section>
  );
}
