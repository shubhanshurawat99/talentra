// VIEW: OurExpertise
import React from 'react';
import { EXPERTISE_AREAS } from '../../../models/contentModel';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ExpertiseCard from '../../../components/ExpertiseCard/ExpertiseCard';
import styles from './OurExpertise.module.css';

export default function OurExpertise() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="What We Do"
          title="Our Expertise"
          subtitle="We specialize in strategic talent acquisition across three high-impact domains."
        />
        <div className={styles.grid}>
          {EXPERTISE_AREAS.map(area => (
            <ExpertiseCard key={area.title} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
