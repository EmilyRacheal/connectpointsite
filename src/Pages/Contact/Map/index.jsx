import React from "react";
import styles from "./map.module.css";
import Map from "../../../assets/map.png";
import ContactImg from "../../../assets/contact.png";

function Index() {
  return (
    <div className="px-0 lg:px-20 ">
      <div className={`${styles.mapBg} md:p-10 p-0`}>
        <div className="flex flex-col-reverse md:flex md:flex-row items-center w-full gap-x-7">
          <div className="w-full md:w-1/2 p-0 ">
            <img src={Map} alt="" />
          </div>
          <div className="w-full md:w-1/2 flex-col flex gap-y-10 md:p-0 p-5 ">
            <div className={`${styles.mapHead} `}>
              <h1 className="pb-3">Nigeria</h1>
              <p> Address: 107/109 Ago Palace Way, Okota, Lagos</p>
              <p>Phone: +2347066618162</p>
            </div>
            <div className={`${styles.mapHead}  `}>
              <h1 className="pb-3">Ghana</h1>
              <p>
                Address: C127 School Crescent, Achimota Accra, Ghana Dimension
                Logic Technologies{" "}
              </p>
              <p>Phone: +233548725434</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex md:flex-row  justify-between w-full py-10 gap-x-7">
          <div className="w-full md:w-1/2">
            <img src={ContactImg} alt="" className="hidden sm:block" />
          </div>
          <div className={`${styles.contactCard} w-full md:w-1/2 px-5 md:px-0`}>
            <div>
              <h1 className="pt-10 md:pt-0">Contact us</h1>
              <form action="" className="w-full pt-10 ">
                <div className="flex flex-col md:flex md:flex-row md:flex-wrap w-full justify-between md:gap-y-0 gap-y-9 ">
                  <div
                    className={`${styles.formInput} md:w-[47%] w-full px-3 py-3`}
                  >
                    <input type="text" placeholder=" Your Name" />
                  </div>
                  <div
                    className={`${styles.formInput} md:w-[47%] w-full px-3 py-3 `}
                  >
                    <input type="text" placeholder=" Your Email" />
                  </div>
                  <div
                    className={`${styles.formInput} md:w-[47%] w-full px-3 py-3 md:my-8`}
                  >
                    <input type="text" placeholder=" Your Number" />
                  </div>
                </div>
                <div className="md:py-0 py-6">
                  <textarea
                    name=""
                    id=""
                    cols="0"
                    rows="4"
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
    </div>
  );
}

export default Index;
