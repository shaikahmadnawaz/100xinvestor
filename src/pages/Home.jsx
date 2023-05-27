import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Investors from "../components/Investors";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="px-10 overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Hero />
      <Investors />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
};

export default Home;
