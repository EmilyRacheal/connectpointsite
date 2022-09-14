import React from "react";
import Navbar from "../../components/Navbar/index";
import Hero from "./Hero/index";
import WhoWeAre from "./WhoWeAre/index";
import Values from "./Values/index";
import AppDownload from "../../components/AppDownload/index";
import BecomeAgent from "./BecomeAgent/index";
import Footer from "../../components/Footer/index";

function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Values />
      <AppDownload />
      <BecomeAgent />
      <Footer />
    </div>
  );
}

export default Index;
