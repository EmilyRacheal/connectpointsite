import React from "react";
import styles from "./benefits.module.css";
import Imagei from "../../../assets/verified.svg";
import Imageii from "../../../assets/bag.svg";
import Imageiii from "../../../assets/fontisto_doctor.svg";
import Imageiv from "../../../assets/veri.svg";

function Index() {
  const benefitsData = [
    { id: 1, img: Imagei, title: "Enjoyable Environment" },
    { id: 2, img: Imageii, title: "Career Development" },
    { id: 3, img: Imageiii, title: "Health Benefits Packages" },
    { id: 4, img: Imageiv, title: "Work-life Balance" },
  ];
  return (
    <div>
      <div className="lg:px-20 px-5 py-12">
        <div className="flex-col flex md:flex md:flex-row justify-between gap-x-7 items-center w-full gap-y-5 ">
          {benefitsData.map(({ id, img, title }) => {
            return (
              <div
                className={`${styles.enjoy} flex flex-col items-center px-4 py-5 justify-center text-center`}
                key={id}
              >
                <div
                  className={`${styles.image} flex items-center justify-center`}
                >
                  <img src={img} alt="" />
                </div>
                <h1 className="pt-2">{title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
