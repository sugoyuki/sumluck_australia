'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Reasons from '@/components/Reasons';
import TargetUsers from '@/components/TargetUsers';
import OnlineIntro from '@/components/OnlineIntro';
import ConsultationFlow from '@/components/ConsultationFlow';
import ConsultationMenu from '@/components/ConsultationMenu';
import MedicalInterpreters from '@/components/MedicalInterpreters';
import MedicalAdvisor from '@/components/MedicalAdvisor';
import CitiesCoverage from '@/components/CitiesCoverage';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import PageTop from '@/components/PageTop';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TargetUsers />
      <OnlineIntro />
      <ConsultationFlow />
      <ConsultationMenu />
      <Reasons />
      <MedicalInterpreters />
      <MedicalAdvisor />
      <CitiesCoverage />
      <FAQ />
      <CTA />
      <Footer />
      <PageTop />
    </>
  );
}