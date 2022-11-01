import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Copied Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Main */}

      <Main />

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Home;
