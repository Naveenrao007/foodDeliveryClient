import React from 'react'
import papaJohns from "../../assets/images/Rectangle09.png";
import Kfc from "../../assets/images/Rectangle10.png";
import Texas from "../../assets/images/Rectangle11.png";
import BurgerKing from "../../assets/images/Rectangle12.png";
import Macd from "../../assets/images/Rectangle13.png";
import Shaurma from "../../assets/images/Rectangle14.png";
import style from "./Restaurants.module.css"
function Restaurants() {
  return (
    <div className={`${style.gridContainer}`}>
        <div className={`${style.menuOptionsDiv1}`}>
          <div className={`${style.menuNameImg}`}>
            <img src={Macd} alt="Mac'd" />
          </div>
            <h4>McDonald’s London </h4>
          <div className={`${style.restaurantName}`}>
          </div>
        </div>
        <div className={`${style.menuOptionsDiv1}`}>
          <div className={`${style.menuNameImg}`}>
            <img src={papaJohns} alt="papaJohns" />
          </div>
          <div className={`${style.restaurantName}`}>
            <h4>Papa Johns</h4>
          </div>
        </div>
        <div className={`${style.menuOptionsDiv1}`}>
          <div className={`${style.menuNameImg}`}>
            <img src={Kfc} alt="Mac'd" />
          </div>
          <div className={`${style.restaurantName}`}>
            <h4>KFC West London</h4>
          </div>
        </div>
        <div className={`${style.menuOptionsDiv1}`}>
          <div className={`${style.menuNameImg}`}>
            <img src={Texas} alt="Mac'd" />
          </div>
          <div className={`${style.restaurantName}`}>
            <h4>Texas Chicken</h4>
          </div>
        </div>
        <div className={`${style.menuOptionsDiv1}`}>
          <div className={`${style.menuNameImg}`}>
            <img src={BurgerKing} alt="Mac'd" />
          </div>
          <div className={`${style.restaurantName}`}>
            <h4>Burger King</h4>
          </div>
        </div>
        <div className={`${style.menuOptionsDiv1}`}>
          <div className={`${style.menuNameImg}`}>
            <img src={Shaurma} alt="Mac'd" />
          </div>
          <div className={`${style.restaurantName}`}>
            <h4>Shaurma 1</h4>
          </div>
        </div>
      </div>
  )
}

export default Restaurants