/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16 md:pb-0">
      <Header />
      <Hero />
      <Mission />
      <AboutUs />
      <Services />
      <AboutMe />
      <Footer />
      <MobileNav />
    </div>
  );
}
