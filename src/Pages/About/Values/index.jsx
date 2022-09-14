import React from "react";
import styles from "./values.module.css";
import Integrity from "../../../assets/Vector (1).svg";
import Bar from "../../../assets/Vector (2).svg";

function Index() {
  return (
    <div>
      <div className="lg:px-20 px-5 pb-0 md:pb-10">
        <div
          className={`${styles.coreTxt} flex  items-center justify-center md:py-7 pb-5`}
        >
          <h1>Our Core Values</h1>
        </div>
        <div className="flex flex-col md:flex md:flex-row items-center justify-between gap-y-5 md:gap-x-36">
          <div className={`${styles.firstW} md:w-1/2 w-full`}>
            <div className="px-7 py-10 flex flex-col  text-center  justify-center lg:text-left lg:justify-start">
              <div className="flex flex-col lg:flex lg:flex-row justify-center items-center md:text-left md:justify-start">
                <div
                  className={`${styles.Integrity} flex  items-center justify-center`}
                >
                  <img src={Integrity} alt="" />
                </div>
              </div>
              <h2 className={`${styles.interTxt} font-bold text-xl py-5`}>
                Integrity
              </h2>
              <p className={`${styles.interTxt} text-lg`}>
                Our Integrity is the foundation on which we build relationships
                and trust, Our word is our bond, in all our endeavors we strive
                for transparency, openness and accountability.
              </p>
            </div>
          </div>
          <div className={`${styles.firstW} w-full md:w-1/2`}>
            <div className="px-7 py-10 flex flex-col  text-center  justify-center lg:text-left lg:justify-start">
              <div className="flex flex-col lg:flex lg:flex-row justify-center items-center md:text-left md:justify-start">
                <div
                  className={`${styles.bar} flex items-center justify-center`}
                >
                  <img src={Bar} alt="" />
                </div>
              </div>
              <h2 className={`${styles.interTxt} font-bold text-xl py-5`}>
                Growth
              </h2>
              <p className={`${styles.interTxt} text-lg`}>
                We believe in progress not just for us as an organization but
                also progress for all our Agents, hence we strive to create
                better opportunities for them, by continually giving access to
                innovative and robust financial services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
