'use client';
import BlueSection from '@components/BlueSection';
import Footer from '@components/Footer';
import HowitWorks from '@components/HowitWorks';
import Main from '@components/Main';
import NavBar from '@components/NavBar';
import ProfessionalsSection from '@components/ProfessionalsSection';
import ReviewData from '@components/ReviewData';
import SummerSection from '@components/SummerSection';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return (
    <>
      <NavBar href={''} />
      <Main />
      <HowitWorks />
      <SummerSection />
      <ProfessionalsSection showMore={false} />
      <BlueSection />
      <ReviewData />
      <Footer />
    </>
  );
};

export default Home;
