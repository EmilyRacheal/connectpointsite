import React, { useState } from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/Cpoint Logo 2 1.png";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function Index() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className=" w-full">
        <div className="flex items-center justify-between w-full md:px-20 py-2 px-5">
          <div>
            <img src={Logo} alt="" srcset="" className={`${styles.logo}`} />
          </div>
          <div>
            <ul className="hidden font-semibold lg:flex gap-x-7">
              <li className={`${styles.home} `}>Home</li>
              <li className={`${styles.link}`}>About Us</li>
              <li className={`${styles.link}`}>Events</li>
              <li className={`${styles.link}`}>Join us</li>
            </ul>
            <AiOutlineMenu
              onClick={handleShowMenu}
              className="block lg:hidden font-bold"
              size={20}
              color={"#028BBE"}
            />
          </div>

          <div className={`${styles.c} lg:flex items-center gap-x-4 hidden`}>
            <button className={`${styles.contact} px-7 py-2  `}>Contact</button>
            <button
              className={`${styles.agent} flex items-center px-7 py-2 gap-x-2`}
            >
              <span>
                <BsPersonCircle />
              </span>
              Become an Agent
            </button>
          </div>
        </div>
        {showMenu === true ? (
          <div className={`${styles.mobileBg} flex flex-row`}>
            <ul
              className={`${styles.list} flex flex-col px-5 pb-5  gap-y-3 text-white py-3`}
            >
              <li className={`${styles.homes}`}>Home</li>
              <li>About Us</li>
              <li>Events</li>
              <li>Join us</li>

              <div>
                <li className={`${styles.agentS} py-1 px-3`}>
                  Become An Agent
                </li>
              </div>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Index;
