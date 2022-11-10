import React from "react";
import styles from "./buyAirtime.module.css";
import Navbar from "../../components/Navbar";
import Girl from "../../assets/girl.jpeg";

function BuyAirtime() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex">
        <div className={`${styles.girlAirtime} w-1/2 flex items-center justify-center`}>
          <div className="flex items-center justify-center w-full max-w-[450px] text-white text-[40px] text-center font-semibold">
            <h1>BUY AIRTIME & DATA, GIFT LOVED ONES. AND GET POINTS</h1>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-[#05B0EF] text-[24px] font-semibold">Payments</h3>
            <div className="flex gap-x-3">
            <button className="bg-[#A6CF48] rounded-[25px] text-white text-sm px-3 py-1">Airtime</button>
            <button className="bg-white rounded-[25px] text-[#A6CF48] shadow border-[1px] text-sm px-3 py-1">Internt Bundle</button>
            </div>
            <div>
              <form action="">
                <div className="flex flex-col gap-y-3">

                <div className="flex flex-col gap-y-1">
                <label className="text-[14px] font-medium">Amount</label>
                <input type="text" placeholder="#0.00" className="outline-none py-2 px-3 rounded-[5px] bg-[#05B0EF80] text-white"/>
                </div>
                <div className="flex flex-col gap-y-1">
                <label className="text-[14px] font-medium">Network</label>
                <select type="text" className="outline-none py-2 px-3 rounded-[5px] bg-[#05B0EF80] text-white">
                  <option value="">Choose Your Network</option>
                </select>  
                </div>
                </div>
                
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyAirtime;
