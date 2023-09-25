// to render homepage
'use client';
import HowitWorks from '@components/HowitWorks';
import Main from '@components/Main';
import NavBar from '@components/NavBar';
import ProfessionalsSection from '@components/ProfessionalsSection';
import SummerSection from '@components/SummerSection';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return (
    <div>
      <NavBar href={''} />
      <Main />
      <HowitWorks />
      <SummerSection />
      <ProfessionalsSection />
    </div>
  );
};

export default Home;
