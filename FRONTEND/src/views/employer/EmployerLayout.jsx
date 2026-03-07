// ─────────────────────────────────────────────────────────
// VIEW: EmployerLayout.jsx
// Wraps all employer pages with Navbar + Footer.
// Add new employer tabs by updating EMPLOYER_LINKS below.
// ─────────────────────────────────────────────────────────

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Home        from './Home/Home';
import AboutUs     from './AboutUs/AboutUs';
import OurExpertise from './OurExpertise/OurExpertise';
import ContactUs   from './ContactUs/ContactUs';

export const EMPLOYER_LINKS = [
  { to: '/employer',           label: 'Home',          end: true },
  { to: '/employer/about',     label: 'About Us',      end: false },
  { to: '/employer/expertise', label: 'Our Expertise', end: false },
  { to: '/employer/contact',   label: 'Contact Us',    end: false },
];

export default function EmployerLayout() {
  return (
    <>
      <Navbar links={EMPLOYER_LINKS} showBack={true} />
      <Routes>
        <Route index           element={<Home />} />
        <Route path="about"     element={<AboutUs />} />
        <Route path="expertise" element={<OurExpertise />} />
        <Route path="contact"   element={<ContactUs />} />
        <Route path="*"         element={<Navigate to="/employer" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
