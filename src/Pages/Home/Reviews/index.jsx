import React from "react";
import styles from "./reviews.module.css";
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

function Index() {
  return (
    <div className={`${styles.reviewsBg}`}>
      <div className="lg:px-[10%] px-5 py-10">
        <div>
          <div className={`${styles.reviewTxt}`}>
            <h4>Reviews</h4>
            <h1>Listen To Our Agents Share Their Experience</h1>
          </div>
          <div className="">
            <div className=" overflow-scroll py-10 px-4 flex gap-x-10 items-center justify-center">
              <div
                className={`${styles.arrowForward} hidden  md:flex items-center justify-center`}
              >
                <MdOutlineArrowBack size={30} />
              </div>
              <div
                className={`${styles.reviewCardBox} min-w-[260px] md:min-w-[30%] w-[260px] md:w-[30%] flex flex-col items-center  justify-center`}
              >
                <p className=" px-5 pb-4">
                  “Wow, this makes my transfer, bill payment and Airtime so easy
                  for me”
                </p>
                <h4>Damiana Rita</h4>
              </div>

              <div
                className={`${styles.reviewCardBox} min-w-[260px] md:min-w-[30%] w-[260px] md:w-[30%] flex flex-col items-center  justify-center`}
              >
                <p className=" px-5 pb-4">
                  “This app makes payment so easy and smooth.”
                </p>
                <h4>Onwunali Chiamaka</h4>
              </div>

              <div
                className={`${styles.reviewCardBox} min-w-[260px] md:min-w-[30%] w-[260px] md:w-[30%] flex flex-col items-center  justify-center`}
              >
                <p className=" px-5 pb-4">
                  “The app is efficient. Bill payment has been seamless since I
                  got the app”
                </p>
                <h4>Raymond Donatus</h4>
              </div>
              <div
                className={`${styles.arrowForward} hidden  md:flex items-center justify-center`}
              >
                <MdOutlineArrowForward size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
