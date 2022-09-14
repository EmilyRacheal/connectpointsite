import React from "react";
import Navbar from "../../components/Navbar/index";
import Header from "./Header/index";
import Services from "./Services/index";
import AppDownload from "../../components/AppDownload/index";
import Partners from "../../components/Partners/index";
import Footer from "../../components/Footer/index";

function Index() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <AppDownload />
      <Partners />
      <Footer />
    </div>
  );
}

export default Index;
