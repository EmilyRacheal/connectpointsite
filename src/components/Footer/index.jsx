import React from "react";
import styles from "./footer.module.css";
import Logo from "../../assets/Cpoint Logo 2 1.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function Index() {
  return (
    <div className={`${styles.footerBg} w-full `}>
      <div className="lg:px-20 pb-20 px-5">
        <div className={`${styles.overlay}`} />
        <div className="lg:flex items-center justify-center w-full hidden">
          <h1 className={`${styles.textSolution} py-5`}>
            More than just solutions we creare connections
          </h1>
        </div>

        <div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <p className="text-sm text-white py-7 block lg:hidden">
              {" "}
              Cpoint Pay offers you the best payment experience at your
              convenient. Transfer money, pay bills and topup your airtime and
              data from Cpoint app to earn instant cashbacks.
            </p>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row justify-between">
            <div className=" block lg:hidden">
              <h3 className="text-white font-bold text-2xl py-5">Nigeria</h3>
              <ul className={`${styles.list}`}>
                <li>Address: 107/109 Ago Palace Way, Okota, Lagos</li>
              </ul>
            </div>
            <div className=" block lg:hidden">
              <h3 className="text-white font-bold text-2xl py-5">Ghana</h3>
              <ul className={`${styles.list}`}>
                <li>
                  C127 School Crescent,Achimota Accra, Ghana Dimension Logic
                  Technologies Phone: +23354872543
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl py-5">
                Follow us on
              </h3>
              <div className={`${styles.socialIcons} flex gap-x-3`}>
                <span className="py-2 px-2">
                  <AiOutlineTwitter size={20} color={"#028BBE"} />
                </span>
                <span className="py-2 px-2">
                  <FaFacebookF size={20} color={"#028BBE"} />
                </span>
                <span className="py-2 px-2">
                  <FaPinterestP size={20} color={"#028BBE"} />
                </span>
              </div>
            </div>

            <div className="hidden lg:block">
              <h3 className="text-white font-bold text-2xl py-5">
                Follow us on
              </h3>
              <ul className={`${styles.list}`}>
                <li>Work tracking</li>
                <li>See our services</li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <h3 className="text-white font-bold text-2xl py-5">Company</h3>
              <ul className={`${styles.list}`}>
                <li>Payment services</li>
                <li>Cpoint Retail</li>
                <li>About Us</li>
                <li>Privacy Policy | Terms of use</li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-white font-bold text-2xl py-5">Contact Us</h3>
              <ul className={`${styles.list}`}>
                <li>Email: info@connectpoint.com</li>
                <li>Phone: +234 7066618162</li>
                <li>Phone: +548725434233 </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div>
          <img src={Logo} alt="" />
          <div className="flex items-center">
            <div  >
              <h3 className="text-white font-bold text-2xl py-4">
                Follow us on
              </h3>
              <div className={`${styles.socialIcons} flex gap-x-3`}>
                <span className="py-2 px-2">
                  <AiOutlineTwitter size={20} color={"#028BBE"} />
                </span>
                <span className="py-2 px-2">
                  <FaFacebookF size={20} color={"#028BBE"} />
                </span>
                <span className="py-2 px-2">
                  <FaPinterestP size={20} color={"#028BBE"} />
                </span>
              </div>
            </div>
            <div className="">
              <h3 className="text-white font-bold text-2xl ">Follow us on</h3>
              <ul>
                <li>Work tracking</li>
                <li>See our services</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Index;
