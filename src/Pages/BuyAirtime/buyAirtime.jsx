import React, {useState} from "react";
import styles from "./buyAirtime.module.css";
import Navbar from "../../components/Navbar";
import googleBtn from "../../assets/google.png";
import { GiSmartphone } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { ImWhatsapp } from "react-icons/im";
import { TbBrandLinkedin } from "react-icons/tb";

function BuyAirtime() {
  const [isAirtime, SetIsAirtime] = useState('airtime')

  const handleIsAirtime = (type) =>{
    SetIsAirtime(type)
  }

  return (
    <div>
      <Navbar />
      <div className="w-full flex-col md:flex-row flex">
        <div
          className={`${styles.girlAirtime} hidden w-full md:w-1/2 md:flex items-center justify-center`}
        >
          <div className="flex items-center justify-center w-full max-w-[450px] text-white text-[40px] text-center font-semibold">
            <h1>BUY AIRTIME & DATA, GIFT LOVED ONES. AND GET POINTS</h1>
          </div>
        </div>
        <div className=" w-full md:w-1/2 px-[5%] md:px-[10px]">
          <div className="flex items-center justify-center flex-col">
            <h3 className="mt-[25px] mb-7 text-[#05B0EF] text-[24px] font-semibold">
              Payments
            </h3>

            <div className="flex gap-x-3 my-[25px]">
              <button onClick={()=>handleIsAirtime('airtime')} className="flex gap-x-2 items-center bg-[#A6CF48] rounded-[25px] text-white text-sm px-5 py-2">
                <GiSmartphone size={20} />
                Airtime
              </button>

              <button onClick={()=>handleIsAirtime('internet')} className="flex gap-x-2 items-center bg-white rounded-[25px] text-[#A6CF48] shadow border-[1px] text-sm px-5 py-1">
                <TbWorld size={20} />
                Internt Bundle
              </button>
            </div>

<>

           { isAirtime === 'airtime' ?
            <div className="w-full">
              <form
                action=""
                className="flex flex-col items-center w-full justify-center"
              >
                <div
                  className={`${styles.formBox} w-full max-w-[350px] flex flex-col gap-y-3`}
                >
                  <div className="flex flex-col gap-y-1">
                    <label className="text-[14px] font-medium">Amount</label>
                    <input
                      type="text"
                      placeholder="&#8358; 0.00"
                      className="placeholder:text-white outline-none h-[42px] py-2 px-3 rounded-[5px] bg-[#05B0EF80] text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 my-1">
                    <label className="text-[14px] font-medium">Network</label>
                    <select
                      type="text"
                      className="outline-none h-[42px] py-2 px-3 rounded-[5px] bg-[#05B0EF80] text-white"
                    >
                      <option value="">Choose Your Network</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label className="text-[14px] font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="0801 234 5678"
                      className="placeholder:text-white outline-none py-2 h-[42px] px-3 rounded-[5px] bg-[#05B0EF80] text-white"
                    />
                  </div>
                </div>

                <div>
                  <button className="bg-[#A6CF48] mt-[35px] rounded-[10px] text-white text-sm px-12 py-3">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            :
            <div className="w-full">
              <form
                action=""
                className="flex flex-col items-center w-full justify-center"
              >
                <div
                  className={`${styles.formBox} w-full max-w-[350px] flex flex-col gap-y-3`}
                >
                  <div className="flex flex-col gap-y-1">
                    <label className="text-[14px] font-medium">Network</label>
                    <input
                      type="text"
                      placeholder="Choose Network"
                      className="placeholder:text-white outline-none h-[42px] py-2 px-3 rounded-[5px] bg-[#05B0EF80] text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 my-1">
                    <label className="text-[14px] font-medium">Data Plan</label>
                    <select
                      type="text"
                      className="outline-none h-[42px] py-2 px-3 rounded-[5px] bg-[#05B0EF80] text-white"
                    >
                      <option value="">Select Plan</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label className="text-[14px] font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="0801 234 5678"
                      className="placeholder:text-white outline-none py-2 h-[42px] px-3 rounded-[5px] bg-[#05B0EF80] text-white"
                    />
                  </div>
                </div>

                <div>
                  <button className="bg-[#A6CF48] mt-[35px] rounded-[10px] text-white text-sm px-12 py-3">
                    Submit
                  </button>
                </div>
              </form>
            </div>}
</>

            <div className="flex w-full md:px-[10%] px-[5%] mt-[50px] mb-[30px] justify-between">
              <div>
                <p className="text-[#05B0EF] text-[16px] font-bold">
                  Contact Us
                </p>
                <p className="text-[12px] my-2">info@connectpoint.net </p>
                <div className="flex items-center gap-x-2">
                  <span className="bg-[#25D366] rounded-[50%] w-[27px] h-[27px] items-center flex justify-center">
                    <ImWhatsapp color="white" />
                  </span>
                  <span className="bg-[#0e76a8] rounded-[50%] w-[27px] h-[27px] items-center flex justify-center">
                    <TbBrandLinkedin color="white" />
                  </span>
                </div>
              </div>

              <button>
                <img src={googleBtn} alt="google play btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyAirtime;
