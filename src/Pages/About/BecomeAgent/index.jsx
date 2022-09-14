import React from "react";
import styles from "./become.module.css";
import Image from "../../../assets/ceo.png";
import Image1 from "../../../assets/specialist.png";
import Image2 from "../../../assets/operations.png";
import Image3 from "../../../assets/technical.png";
import Image4 from "../../../assets/scales.png";
import { BsPersonCircle } from "react-icons/bs";

const agentsData = [
  { id: 1, img: Image, name: "Lawrence Obi", title: "CEO / Co-Founder" },
  { id: 2, img: Image1, name: "Marina Ihenaco", title: "Scales Specialist" },
  { id: 3, img: Image2, name: "France Ojiakor", title: "Operations" },
  { id: 4, img: Image3, name: "Idowu Ojo", title: "Technical Scales Support" },
  {
    id: 5,
    img: Image4,
    name: "Amaka Anozie",
    title: "Head Scales & Marketing",
  },
];

function Index() {
  return (
    <div>
      <div className="lg:px-20 px-5 py-10">
        <div
          className={`${styles.become} flex flex-col justify-center items-center px-5`}
        >
          <h1>Become An Agent</h1>
          <p className="py-7">
            Become an Agent Join our team of mobile money agents who are
            passionate and enthusiastic about making financial services
            accessible to everyone.
          </p>
          <button
            className={`${styles.agent} flex items-center px-7 py-2 gap-x-2`}
          >
            <span>
              <BsPersonCircle />
            </span>
            Become an Agent
          </button>
          <div className="flex justify-between items-center pt-10 w-full">
            <div className="flex justify-between w-full">
              {agentsData.map(({ img, name, title, id }) => {
                return (
                  <div
                    className={`${styles.imgDiv} relative flex items-center justify-center  flex-col text-center`}
                    key={id}
                  >
                    <img src={img} alt="Team Member Image" className=" mb-3 " />
                    <div className="absolute bottom-0 pt-3">
                      <h3>{name}</h3>
                      <p>{title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
