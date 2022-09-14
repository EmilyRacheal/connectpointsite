import React from "react";
import Navbar from "../../components/Navbar/index";
import ContactHero from "./contactHero/index";
import Benefits from "./Benefits/index";
import Map from "./Map/index";

function Index() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Benefits />
      <Map />
    </div>
  );
}

export default Index;
