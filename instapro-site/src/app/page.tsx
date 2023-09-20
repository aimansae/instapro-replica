// to render homepage
'use client';
import Main from '@components/Main';
import NavBar from '@components/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar href={''} />
      <Main />
    </div>
  );
};

export default Home;
