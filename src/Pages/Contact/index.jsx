import React from "react";
import Navbar from "../../components/Navbar/index";
import ContactHero from "./contactHero/index";
import Benefits from "./Benefits/index";
import Map from "./Map/index";
import Footer from "../../components/Footer";

function Index() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Benefits />
      <Map />
      <Footer />
    </div>
  );
}

export default Index;
