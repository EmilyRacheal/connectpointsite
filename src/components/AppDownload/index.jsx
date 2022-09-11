import React from "react";
import styles from "./appdownload.module.css";
import Phone from "../../assets/App-3-1 1.png";
import GoogleBtn from "../../assets/google play button.svg";

function Index() {
  return (
    <div className={`${styles.container} md:px-20 px-5 w-full pt-10`}>
      <div className="flex flex-col md:flex md:flex-row items-center justify-between md:gap-x-5 gap-y-5">
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img src={Phone} alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <button className={`${styles.downloadBtn} px-10 text-white py-2`}>
            Download App
          </button>
          <h1 className={`${styles.easyPay} py-5 md:py-0 md:pt-5`}>
            Easy Payment At Your Finger Tip
          </h1>
          <p className={`${styles.payOffer} py-5`}>
            Cpoint Pay offer you the best payment experience at your convinient.
            Trasfer money, pay bills and topup your airtime and data from Cpoint
            app to earn instant cashbacks
          </p>
          <button>
            <img src={GoogleBtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
