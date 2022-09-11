import React from "react";
import styles from "./partners.module.css";

import Access from "../../assets/Access_Bank_plc_Logo 1.png";
import Provid from "../../assets/pro-logo01 1.png";
import Zeneth from "../../assets/logo 1.png";
import Accelerex from "../../assets/Logo 01 1.png";
import Unified from "../../assets/logo9 1.png";
import Interswitch from "../../assets/pngwing 2.png";
import Nibis from "../../assets/nibss 1.png";
import Asino from "../../assets/kisspng-aisinoco-ltd-beijing-business-point-of-sale-beijing-city-5b22fc5b600f43 1.png";
import Next from "../../assets/NEXGO-Logo_blue-2 1.png";
import Horizon from "../../assets/cropped-icon-logo-white 1.png";

function Index() {
  return (
    <div className="pt-10">
      <div className={`${styles.imgs} lg:px-20 px-5`}>
        <div>
          <div
            className={`${styles.partnerHead} lg:w-1/2 w-full hidden lg:block`}
          >
            <h3 className={`${styles.partners}`}>Our Partners</h3>
            <h1 className={`${styles.ourPartners}`}>
              Our Partners Solving Problem Is Possible Through Partnerships
            </h1>
          </div>
          <div
            className={`${styles.img} flex flex-wrap items-center w-full justify-center  md:gap-x-20 md:py-10 gap-x-10`}
          >
            <div className={`${styles.imgCard} w-40`}>
              <img src={Access} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Provid} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Zeneth} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Accelerex} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Unified} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Interswitch} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Nibis} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Asino} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Next} alt="" />
            </div>
            <div className={`${styles.imgCard} w-40`}>
              <img src={Horizon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
