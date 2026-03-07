// VIEW: AboutUs — About Talentra + What Makes Us Different + Leadership
import React from 'react';
import { ABOUT, DIFFERENTIATORS, TEAM_OVERVIEW, FOUNDERS } from '../../../models/contentModel';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import DiffItem from '../../../components/DiffItem/DiffItem';
import FounderCard from '../../../components/FounderCard/FounderCard';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <>
      {/* ── About Talentra ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <div className={styles.sectionLabel}>About Talentra</div>
              <h2 className={styles.introTitle}>A Specialized Talent Solutions Partner</h2>
              {ABOUT.intro.map((para, i) => <p key={i} className={styles.introPara}>{para}</p>)}
            </div>
            <div className={styles.focusCard}>
              <div className={styles.focusIcon}>🎯</div>
              <h3>Our Focus</h3>
              <p className={styles.focusSub}>We specialize in strategic talent acquisition across:</p>
              <ul className={styles.focusList}>
                {ABOUT.focus.map(item => (
                  <li key={item}>
                    <span className={styles.dot}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <SectionHeader
            label="Why Talentra"
            title="What Makes Us Different"
            subtitle="We don't just fill roles — we act as strategic talent advisors for your business."
          />
          <div className={styles.diffList}>
            {DIFFERENTIATORS.map(d => (
              <DiffItem key={d.number} number={d.number} title={d.title} body={d.body} />
            ))}
          </div>
        </div>
      </section>

      
      {/* ── Leadership ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            label="Our Team"
            title="Leadership"
            subtitle="Talentra is led by a founding team that combines strong technical understanding with a structured, quality-first approach to talent acquisition. The team works closely with clients and candidates to ensure every hiring engagement is handled with speed, transparency, and precision."
          />
          <div className={styles.foundersGrid}>
            {FOUNDERS.map(f => (
              <FounderCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>
      {/* ── Our Team Overview ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <SectionHeader
            label={TEAM_OVERVIEW.title}
            title={TEAM_OVERVIEW.subtitle}
            subtitle="Our collective experience spans recruitment, consulting, and corporate leadership, enabling us to deliver exceptional talent solutions."
          />
          <div className={styles.teamOverviewCard}>
            <div className={styles.teamOverviewIcon}>👥</div>
            <div className={styles.teamOverviewContent}>
              {TEAM_OVERVIEW.description.map((para, i) => (
                <p key={i} className={styles.teamOverviewPara}>{para}</p>
              ))}
              <div className={styles.teamStrengths}>
                <h4>Our Core Strengths</h4>
                <div className={styles.strengthsGrid}>
                  {TEAM_OVERVIEW.strengths.map((strength, i) => (
                    <div key={i} className={styles.strengthItem}>
                      <span className={styles.strengthIcon}>✓</span>
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
