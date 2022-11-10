import React from 'react'
import styles from "./buyAirtime.module.css"
import Navbar from "../../components/Navbar"
import Girl from "../../assets/girl.jpeg"

function BuyAirtime() {
  return (
    <div>
        <Navbar />
        <div className='w-full flex'>
          <div className={`${styles.girlAirtime} w-1/2`}>
            {/* <img src={Girl} alt="" /> */}
          </div>
          <div className='w-1/2'>
            <div>
              <h3>Payments</h3>
              <button>Airtime</button>
              <button>Internt Bundle</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BuyAirtime