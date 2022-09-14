import React from "react";
import styles from "./services.module.css";
import Rectangle12 from "../../../assets/Rectangle 12.png";
import Rectangle13 from "../../../assets/Rectangle 13.png";
import Rectangle11 from "../../../assets/Rectangle 11.png";
import Rectangle14 from "../../../assets/Rectangle 14.png";
import Rect1 from "../../../assets/rect1.png";
import Rect2 from "../../../assets/rect2.png";
import Rect3 from "../../../assets/rect3.png";
// import Rect4 from "../../assets/rect4.png";

function Index() {
  return (
    <div className="lg:px-20 px-5 pb-20">
      <div className="">
        <div className={`${styles.serviceText} text-center md:text-left`}>
          <h4 className="font-bold text-lg">Services</h4>
          <h1 className="">What We Do</h1>
        </div>

        <div className="flex flex-col lg:flex lg:flex-row py-10 lg:gap-x-5 gap-y-5">
          <div className=" ">
            <div
              className={`${styles.serviceInfo} flex flex-col-reverse md:flex md:flex-row`}
            >
              <div className="px-5 pt-7 pb-7 md:pb-0">
                <h3 className="py-3">Payment Services</h3>
                <p>
                  Payment Services We connect businesses to be able to accepts
                  payments online and offline either through traditional or
                  non-traditional means
                </p>
              </div>
              <img
                src={Rectangle12}
                alt=""
                srcset=""
                className="hidden lg:block"
              />
              <img src={Rect3} alt="" srcset="" className="block lg:hidden" />
            </div>
          </div>
          <div className=" ">
            <div
              className={`${styles.serviceInfo} flex flex-col-reverse md:flex md:flex-row`}
            >
              <div className="px-5 pt-7 pb-7 md:pb-0">
                <h3 className="py-3">Retail Solutions</h3>
                <p>
                  Retail Solutions Our Cloud based retail Solution allows
                  business especially stores, supermarkets, pharmacies, retail
                  companies and others to manage
                </p>
              </div>
              <img
                src={Rectangle13}
                alt=""
                srcset=""
                className="hidden lg:block"
              />
              <img src={Rect2} alt="" srcset="" className="block lg:hidden" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex lg:flex-row lg:gap-x-5 gap-y-5 ">
          <div className=" ">
            <div
              className={`${styles.serviceInfo} flex flex-col-reverse md:flex md:flex-row`}
            >
              <div className="px-5 pt-7 pb-7 md:pb-0">
                <h3 className="py-3">Payment Services</h3>
                <p>
                  Payment Services We connect businesses to be able to accepts
                  payments online and offline either through traditional or
                  non-traditional means
                </p>
              </div>
              <img
                src={Rectangle11}
                alt=""
                srcset=""
                className="hidden lg:block"
              />
              <img src={Rect1} alt="" srcset="" className="block lg:hidden" />
            </div>
          </div>
          <div className=" ">
            <div
              className={`${styles.serviceInfo} flex flex-col-reverse md:flex md:flex-row`}
            >
              <div className="px-5 pt-7 pb-7 md:pb-0">
                <h3 className="py-3">Retail Solutions</h3>
                <p>
                  Retail Solutions Our Cloud based retail Solution allows
                  business especially stores, supermarkets, pharmacies, retail
                  companies and others to manage
                </p>
              </div>
              <img
                src={Rectangle14}
                alt=""
                srcset=""
                className="hidden lg:block"
              />
              <img src={Rect3} alt="" srcset="" className="block lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
