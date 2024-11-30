import React from "react";
import style from "./Product.module.css";
import OrderComplete from "../../assets/icons/OrderCompleted.png";
import MotoCross from "../../assets/icons/Motocross.png";
import Header from "../Header/Header";
import BurgerPhoto from "../../assets/images/BurgerImg.png";
import BurgerRating from "../../assets/images/BurgerRating.png"
import Clock from "../../assets/icons/Clock.png"
function Product() {
  return (
    <div className={`${style.productPageContainer}`}>
      <div>
        <Header />
      </div>
      <div className={`${style.burgertopdiv}`}>
        <div className={`${style.borderTopleftdiv}`}>
         <div className="flexdc  m-auto jcc width80per">
         <p className="font18px">I'm lovin' it!</p>
         <h3 className="font48px">McDonald’s East London</h3>
         </div>
          <div className="flex gap2rem  jcc alineItemCenter">
            <div className= {`${style.border} `}>
              <img src={OrderComplete} alt="" />
              <p>Minimum Order: 12 GBP</p>
            </div>
            <div className= {`${style.border} `}>
              <img src={MotoCross} alt="" />
              <p>Delivery in 20-25 Minutes</p>
            </div>
          </div>
        </div>
        <div className={`${style.burgerImage} width40per`}>
          <img src={BurgerPhoto} alt="Burger Image" />
          <div className={`${style.burgerRating} `}>
            <img src={BurgerRating} alt="BurgerRating" />
          </div>
        </div>
        <div className={`${style.OrderTiming} `}>
            <img src={Clock} alt="clock icon" />
            <p>Open until 3:00 AM</p>
          </div>
      </div>
    </div>
  );
}

export default Product;
