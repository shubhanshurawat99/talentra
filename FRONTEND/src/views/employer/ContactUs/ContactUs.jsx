// VIEW: ContactUs — wired to useRecruiterController
import React from 'react';
import { useRecruiterController } from '../../../controllers/recruiterController';
import { COMPANY } from '../../../models/contentModel';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import FormInput from '../../../components/FormInput/FormInput';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  const {
    fields, errors, submitted, loading,
    handleChange, handleSubmit, handleReset,
  } = useRecruiterController();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Get In Touch"
          title="Contact Us"
          subtitle="Tell us about your hiring needs and we'll be in touch within 24 hours."
        />

        <div className={styles.wrap}>
          {/* Contact Info Panel */}
          <div className={styles.info}>
            <h3>Let's start a conversation</h3>
            <p>Whether you have an urgent open role or planning future workforce needs, our team is ready to help you build the team that takes your company to the next level.</p>
            <div className={styles.details}>
             
            
             
              <div className={styles.detail}><span className={styles.detailIcon}>🕐</span><span>{COMPANY.hours}</span></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                <button className={styles.resetBtn} onClick={handleReset}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <div className={styles.row}>
                  <FormInput label="Company Name" name="company" value={fields.company} onChange={handleChange} placeholder="Acme Corp" error={errors.company} required />
                  <FormInput label="Contact Person Name" name="contactPerson" value={fields.contactPerson} onChange={handleChange} placeholder="Jane Doe" error={errors.contactPerson} required />
                </div>
                <div className={styles.row}>
                  <FormInput label="Email Address" name="email" type="email" value={fields.email} onChange={handleChange} placeholder="jane@acme.com" error={errors.email} required />
                  <FormInput label="Phone Number" name="phone" type="tel" value={fields.phone} onChange={handleChange} placeholder="+91 98765 43210" error={errors.phone} required />
                </div>
                <FormInput label="Message" name="message" as="textarea" value={fields.message} onChange={handleChange} placeholder="Tell us about your hiring requirements..." error={errors.message} required />
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
