// to render homepage
'use client';
import Main from '@components/Main';
import NavBar from '@components/NavBar';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return (
    <div>
      <NavBar href={''} />
      <Main />
    </div>
  );
};

export default Home;
