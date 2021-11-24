import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Blockquote from "../components/home/Blockquote";
import Blog from "../components/home/Blog";
import Hero from "../components/home/Hero";
import NewSletter from "../components/home/NewSletter";
import Pricing from "../components/home/Pricing";
import Collapse from "../components/home/Questions";
import SecondaryCard from "../components/home/SecondaryCard";
import Start from "../components/home/Start";
import Team from "../components/home/Team";
import Head from "next/head";

const index = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Head>
        <title>OYEAH!!</title>
      </Head>
      <Header />
      <Hero />
      <Collapse />
      <Blockquote />
      <Start />
      <SecondaryCard />
      <Pricing />
      <Team />
      <Blog />
      <NewSletter />
      <Footer />
    </div>
  );
};

export default index;
