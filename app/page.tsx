import Main from '@/src/layouts/main/';

const Home = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Main />
    </>
  );
};

export default Home;
