import React from "react";
import styles from "./header.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

function Index() {
  return (
    <div className={`${styles.containerHeight} `}>
      <div
        className={`${styles.containerH} lg:flex lg:flex-row flex flex-col   lg:justify-between w-full  lg:px-20 px-0 text-center items-center`}
      >
        <div
          className={`${styles.headText} lg:w-1/2 w-full px-5 text-center lg:text-left`}
        >
          <h1>Easy Payment At Your Finger Tip</h1>
          <p className="lg:w-1/2 lg:py-10 py-5 w-full">
            Cpoint Pay offers you the best payment experience at your
            convenient. Transfer money, pay bills and topup your airtime and
            data from Cpoint app to earn instant cashbacks.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              className={`${styles.becomeBtn} md:px-7 md:py-2 px-5 py-1 flex items-center justify-center gap-x-2 text-base`}
            >
              {" "}
              <span>
                <BsArrowRightShort size={25} color={"#028BBE"} />
              </span>{" "}
              Become An Agent
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-x-3 mt-10 pb-10 lg:pb-0">
            <span className={`${styles.leftArrow} py-1 px-1`}>
              <BsArrowLeftShort size={25} color={"#061240"} />
            </span>
            <span className={`${styles.rightArrow} py-1 px-1`}>
              <BsArrowRightShort size={25} color={"#061240"} />
            </span>
          </div>
        </div>
        <div className={`${styles} lg:w-1/2 w-full h-full`}>
          <iframe
            src="https://www.youtube.com/embed/uXWycyeTeCs"
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
            className={`${styles.videoPlay}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
