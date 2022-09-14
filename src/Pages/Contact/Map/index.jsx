import React from "react";
import styles from "./map.module.css";
import Map from "../../../assets/map.png";
import ContactImg from "../../../assets/contact.png";

function Index() {
  return (
    <div className="px-20">
      <div className={`${styles.mapBg} p-10`}>
        <div className="flex items-center w-full">
          <div className="w-1/2">
            <img src={Map} alt="" />
          </div>
          <div className="w-1/2 flex-col flex gap-y-10">
            <div className={`${styles.mapHead} `}>
              <h1 className="pb-3">Nigeria</h1>
              <p> Address: 107/109 Ago Palace Way, Okota, Lagos</p>
              <p>Phone: +2347066618162</p>
            </div>
            <div className={`${styles.mapHead} `}>
              <h1 className="pb-3">Ghana</h1>
              <p>
                Address: C127 School Crescent, Achimota Accra, Ghana Dimension
                Logic Technologies{" "}
              </p>
              <p>Phone: +233548725434</p>
            </div>
          </div>
        </div>

        <div className="flex  justify-between w-full py-10">
          <div className="w-1/2">
            <img src={ContactImg} alt="" />
          </div>
          <div className={`${styles.contactCard} w-1/2`}>
            <h1>Contact us</h1>
            <form action="" className="w-full pt-10">
              <div className="flex flex-wrap w-full justify-between">
                <div className={`${styles.formInput} w-[47%] px-3 py-3`}>
                  <input type="text" placeholder=" Your Name" />
                </div>
                <div className={`${styles.formInput} w-[47%] px-3 py-3 `}>
                  <input type="text" placeholder=" Your Email" />
                </div>
                <div className={`${styles.formInput} w-[47%] px-3 py-3 my-8`}>
                  <input type="text" placeholder=" Your Number" />
                </div>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="0"
                  rows="5"
                  className="w-full p-4"
                >
                  Message Us
                </textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
