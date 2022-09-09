import React from "react";
import styles from "./header.module.css";
import { BsArrowRightShort } from "react-icons/bs";

function Index() {
  return (
    <div className="">
      <div className="flex  items-center justify-between w-full px-20">
        <div className={`${styles.headText} w-1/2`}>
          <h1>Easy Payment At Your Finger Tip</h1>
          <p className="w-1/2 py-10">
            Cpoint Pay offers you the best payment experience at your
            convenient. Transfer money, pay bills and topup your airtime and
            data from Cpoint app to earn instant cashbacks.
          </p>
          <button
            className={`${styles.becomeBtn} px-7 py-2 flex items-center justify-center gap-x-2 text-base`}
          >
            {" "}
            <span>
              <BsArrowRightShort size={25} color={"#028BBE"} />
            </span>{" "}
            Become An Agent
          </button>
        </div>
        <div className="w-1/2">
          <iframe
            width="860"
            height="417"
            src="https://www.youtube.com/embed/uXWycyeTeCs"
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
