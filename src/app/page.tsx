'use client';
import BlueSection from '@components/BlueSection';
import Footer from '@components/Footer';
import HowitWorks from '@components/HowitWorks';
import Hero from '@components/Hero';
import NavBar from '@components/NavBar';
import ProfessionalsSection from '@components/ProfessionalsSection';
import ReviewData from '@components/ReviewData';
import SummerSection from '@components/SummerSection';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return (
    <>
      <NavBar href={''} />
      <main>
      <Hero />
      <HowitWorks />
      <SummerSection />
      <ProfessionalsSection showMore={false} />
      <BlueSection />
      <ReviewData />
      </main>
      <Footer />
    </>
  );
};

export default Home;
