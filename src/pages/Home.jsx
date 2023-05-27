import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Investors from "../components/Investors";
import Section1 from "../components/Section1";

const Home = () => {
  return (
    <main className="px-10 overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Hero />
      <Investors />
      <Section1/>
    </main>
  );
};

export default Home;
