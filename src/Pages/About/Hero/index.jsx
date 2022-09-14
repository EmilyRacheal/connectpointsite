import React from "react";
import styles from "./hero.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

function Index() {
  return (
    <div>
      <div className={`${styles.aboutBg}`}>
        <div
          className={`${styles.aboutH} flex flex-col text-center items-center justify-center `}
        >
          <h1>About Us</h1>
          <h4 className="hidden lg:block">connectPoint</h4>

          <div className="lg:flex items-center justify-center hidden">
            <p className="">Home</p>
            <MdKeyboardArrowRight size={20} color={"#ffffff"} />
            <MdKeyboardArrowRight size={20} color={"#ffffff"} />
            <p> About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
