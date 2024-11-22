import React from "react";
import style from "./Home.module.css";
import Star from "../../assets/icons/star.png";
import Forwardbtn from "../../assets/icons/forwardbtn.png";
import ShoppingBasket from "../../assets/icons/shoppingBasket.png";
import Location from "../../assets/icons/Location.png";
import MaleUser from "../../assets/icons/maleUser.png";
function Home() {
  return (
    <div className={`${style.homeContainer}`}>
      <div className="flex jcsb">
        <div className="flex alineItemCenter">
          <img src={Star} alt="star" />
          <p className="mrleft1rem">
            Get 5% Off your first order,{" "}
            <span className="textyellow underline">Promo: ORDER5</span>
          </p>
        </div>
        <div className={`flex gap2rem`}>
          <div className="flex alineItemCenter">
            <img src={Location} alt="location" />
            <p className="mrleft1rem">Regent Street, A4, A4201, London</p>
            <p className="textyellow underline mrleft1rem">Change Location</p>
          </div>
          <div className={`${style.ShoppingBasket} `}>
            <div
              className={`flex  alineItemCenter ${style.borderR} ${style.cartPadding} `}
            >
              <div className={``}>
                <img src={ShoppingBasket} alt="shoppingBasket" />
              </div>
              <div className={`${style.myCartText}`}>My Cart</div>
            </div>
            <div className={`${style.itemValueH}`}>
              {/* GBP <span>00:00</span> */}
            </div>
            <div
              className={`${style.borderL} ${style.cartPadding} alineContentCenter alineItemCenter  m-auto h-full`}
            >
              <img src={Forwardbtn} alt="downloadBtn" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex jcsb">
        <div>
          <img src="../../../logo2.png" alt="logo" />
        </div>
        <div className={` flex  gap3rem alineItemCenter ${style.pages}`}> 
          <div className={`${style.active}`}>Home</div>
          <div> Browse Menu </div>
          <div>Special Offers</div>
          <div> Restaurants </div>
          <div> Track Order</div>
          <div className={`${style.userAuth}`}>
            <img src={MaleUser} alt="" />
            <p>Login/Signup</p>      </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home;
