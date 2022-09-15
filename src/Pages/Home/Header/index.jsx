import React from "react";
import styles from "./header.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

function Index() {
  return (
    <div className={`${styles.containerHeight} `}>
      <div
        className={`${styles.containerH} lg:flex py-12 lg:py-0 lg:flex-row flex gap-x-7 flex-col w-full  pl-[5%] pr-[5%] lg:pr-0 items-center`}
      >
        <div
          className={`${styles.headText} lg:w-1/2 w-full text-center lg:text-left`}
        >
          <h1 className=" w-full lg:w-[80%]">
            Easy Payment At Your Finger Tip
          </h1>
          <p className="lg:w-[70%] lg:py-10 py-5 w-full">
            Cpoint Pay offers you the best payment experience at your
            convenient. Transfer money, pay bills and topup your airtime and
            data from Cpoint app to earn instant cashbacks.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              className={`${styles.becomeBtn} md:px-7 md:py-2 px-5 py-2 flex items-center justify-center gap-x-2 text-base`}
            >
              <span>
                <BsArrowRightShort size={25} color={"#028BBE"} />
              </span>
              Become An Agent
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-x-3 mb-7 lg:mb-0  lg:mt-20 mt-9">
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
            src="https://techtalks2022.vietnamworks.com/?utm_content=Q&utm_source=GGD&utm_medium=TaG&utm_campaign=TT22&gclid=Cj0KCQjw94WZBhDtARIsAKxWG-_qRI5e4L8DpqRJQC-GBp3sQyyP3vF5pFudNv0CL9zXWtAvja5AgSMaAmPEEALw_wcB"
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
