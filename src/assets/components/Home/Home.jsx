import React from "react";
import style from "./Home.module.css";
import Star from "../../assets/icons/star.png";
import Forwardbtn from "../../assets/icons/forwardbtn.png";
import ShoppingBasket from "../../assets/icons/shoppingBasket.png";
import Location from "../../assets/icons/Location.png";
import MaleUser from "../../assets/icons/maleUser.png";
import HomeImage from "../../assets/images/homeImage.png";
import HomeImage1 from "../../assets/images/homeImage1.png";
import One from "../../assets/images/1.png";
import Two from "../../assets/images/2.png";
import Three from "../../assets/images/3.png";
import Tracking from "../../assets/icons/Tracking.svg";
import TickBox from "../../assets/images/TickBox.png";

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
            <p>Login/Signup</p>{" "}
          </div>
        </div>
      </div>
      {/* part -2 */}
      <div className={`${style.part2}`}>
        <div className={`${style.part2left}`}>
          <div>
            <div>
              <p className={`${style.part2leftText1}`}>
                Order Restaurant food, takeaway and groceries.
              </p>
              <p className={`${style.part2leftText2}`}>Feast Your Senses,</p>
              <p className={`${style.part2leftText3}`}>Fast and Fresh</p>
            </div>
            <div className={`${style.part2leftText4}`}>
              Enter a postcode to see what we deliver
            </div>
            <div className={`${style.inputHomeContainer}`}>
              <input
                placeholder="your@gmail.com"
                type="text"
                className={`${style.inputHomeField}`}
              />
              <button className={`${style.subscribeHomeBtn} cp  `}>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className={`${style.part2right}`}>
          <div className={`${style.progressContainer1}`}>
            <div className={`${style.numContainer}`}>
              <img src={One} alt="One number " />
            </div>
            <div className={`${style.prgressSubContainer}`}>
              <div className="flex jcsb">
                <div className={`${style.logo2HomeImg}`}>
                  <img src="../../../logo2.png" alt="" />
                </div>
                <div className={`${style.NowFont}`}>now</div>
              </div>
              <div>
                <div className="flex gaphalfrem alineItemCenter">
                  <p className={`${style.boldFont}`}>
                    We’ve Received your order!{" "}
                  </p>
                  <img src={Tracking} alt="" />
                </div>
                <p className={`${style.RegularFont}`}>
                  Awaiting Restaurant acceptance{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={`${style.progressContainer2}`}>
            <div className={`${style.numContainer}`}>
              <img src={Two} alt="One number " />
            </div>
            <div className={`${style.prgressSubContainer}`}>
              <div className="flex jcsb">
                <div className={`${style.logo2HomeImg}`}>
                  <img src="../../../logo2.png" alt="" />
                </div>
                <div className={`${style.NowFont}`}>now</div>
              </div>
              <div>
                <div className="flex gaphalfrem alineItemCenter ">
                  <p className={`${style.boldFont}`}>Order Accepted!</p>
                  <img className={`${style.tickBox}`} src={TickBox} alt="" />
                </div>
                <p className={`${style.RegularFont}`}>
                  Awaiting Restaurant acceptance
                </p>
              </div>
            </div>
          </div>
          <div className={`${style.progressContainer3}`}>
            <div className={`${style.numContainer}`}>
              <img src={Three} alt="One number " />
            </div>
            <div className={`${style.prgressSubContainer}`}>
              <div className="flex jcsb">
                <div className={`${style.logo2HomeImg}`}>
                  <img src="../../../logo2.png" alt="" />
                </div>
                <div className={`${style.NowFont}`}>now</div>
              </div>
              <div>
                <div className="flex gaphalfrem alineItemCenter">
                  <p className={`${style.boldFont}`}>
                    We’ve Received your order! &#x1F389;
                  </p>
                </div>
                <p className={`${style.RegularFont}`}>
                  Awaiting Restaurant acceptance{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.part2centerImg}`}>
          <img src={HomeImage} alt="mainImg" />
        </div>
        <div className={`${style.part2centerImg1}`}>
          <img src={HomeImage1} alt="side image" />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home;
