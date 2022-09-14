import React from "react";
import styles from "./whoWeAre.module.css";
import WhoImg from "../../../assets/image 1.png";
import Image4 from "../../../assets/image 4.png";
import Image5 from "../../../assets/image 5.png";

function Index() {
  return (
    <div className=" pt-20">
      <div className="flex flex-col md:flex md:flex-row w-full md:gap-x-10 gap-y-5">
        <div className={`${styles.whoText} md:w-1/2 w-full px-5 lg:px-20`}>
          <h1 className="md:pb-10 pb-5">Who We Are</h1>
          <p>
            We are a technology company focused on – Payments, Financial
            Inclusion and Retail Solutions. We hope to cover Africa with our
            blue print. Today we have successfully established our presence in
            Nigeria and Ghana with a combined staff strength of 10 wonderful
            team members and a total combined experience of over 40 years in
            banking, payments, project management, technology solutions,
            customer service and core marketing
          </p>
        </div>
        <div className="md:w-1/2 w-full px-5 md:px-0">
          <img src={WhoImg} alt="" />
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-row w-full md:gap-x-10 gap-y-5 py-10 ">
        <div className={`${styles.whoText} md:w-1/2 w-full md:px-20 px-5`}>
          <h1 className="pb-5 md:pb-10">Our Vision</h1>
          <p>
            To be the leading provider of payments in Africa and a disruptor in
            financial inclusion and retail solutions. We hope to achieve this
            through strategic partnership and innovation. We are a global
            company in Africa connecting Africa
          </p>
        </div>
        <div
          className={`${styles.whoText} md:w-1/2 w-full  md:pr-20 px-5 md:px-0`}
        >
          <h1 className="pb-5 md:pb-10">Our Presence</h1>
          <p>
            Nigeria - Registered as Connectpoint Technology Solutions limited
            Ghana – Registered as Dimension logic Technologies We are moving
            into other African Countries with Strategic Partnerships
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-row w-full md:gap-x-10 gap-y-5 py-10 items-center">
        <div className={`${styles.whoText} md:w-1/2 w-full md:px-20 px-5`}>
          <img src={Image4} alt="" />
        </div>
        <div
          className={`${styles.whoText} md:w-1/2 w-full  md:pr-20 px-5 md:px-0`}
        >
          <h1 className="pb-5 md:pb-10 w-80">
            We empower businesses to provide financial services within their
            communities
          </h1>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex md:flex-row w-full md:gap-x-10 gap-y-5 py-10  items-center  ">
        <div className={`${styles.whoText}   md:w-1/2 w-full md:px-20 px-5`}>
          <h1 className="pb-5 md:pb-10 w-80">
            We empower businesses to provide financial services within their
            communities
          </h1>
        </div>
        <div
          className={`${styles.whoText} md:w-1/2 w-full  md:pr-20 px-5 md:px-0`}
        >
          <img src={Image5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;
