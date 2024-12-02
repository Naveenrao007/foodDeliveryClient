import React from "react";
import style from "./Product.module.css";
import OrderComplete from "../../assets/icons/OrderCompleted.png";
import MotoCross from "../../assets/icons/Motocross.png";
import Header from "../Header/Header";
import BurgerPhoto from "../../assets/images/BurgerImg.png";
import BurgerRating from "../../assets/images/BurgerRating.png";
import Clock from "../../assets/icons/Clock.png";
import SearchIcon from "../../assets/icons/SearchIcon.png";
import Tracking from "../../assets/icons/Tracking.png"
import IdVerified from "../../assets/icons/IdVerified.png"
import CLock2 from "../../assets/icons/Clock2.png"
import Cart from "./Cart/Cart";
import Carousel from "../Carousel/Carousel";
import LibMap from "../LibMap/LibMap";
import Restaurants from "../Restaurants/Restaurants";
function Product() {

  return (
    <div className={`${style.productPageContainer}`}>
      <div className="mrCommon mrtop1rem ">
        <Header />
      </div>
      <div className={`${style.burgertopdiv} mrCommon`}>
        <div className={`${style.borderTopleftdiv}`}>
          <div className="flexdc  m-auto jcc width80per">
            <p className="font18px">I'm lovin' it!</p>
            <h3 className="font48px">McDonald’s East London</h3>
          </div>
          <div className="flex gap2rem  jcc alineItemCenter">
            <div className={`${style.border} `}>
              <img src={OrderComplete} alt="" />
              <p>Minimum Order: 12 GBP</p>
            </div>
            <div className={`${style.border} `}>
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

      <div className={`${style.burgertop2div} mrCommon`}>
        <p className="font32px fw700">All Offers from McDonald’s East London</p>
        <div className={`${style.burgertop2divSearch}`}>
          <img src={SearchIcon} alt="SearchIcon" />
          <input type="text" placeholder="Search from menu..." />
        </div>
      </div>
      <div>
        <div className={`${style.burgertop3div}`}>
          <p className={`${style.menuActive}`}>Offers </p>
          <p> Burgers </p>
          <p> Fries </p>
          <p> Snacks</p>
          <p> Salads</p>
          <p>Cold drinks </p>
          <p> Happy Meal®</p>
          <p> Desserts</p>
          <p> Hot drinks</p>
          <p> Sauces </p>
          <p> Orbit®</p>
        </div>
      </div>
      <div>
        <Cart />
      </div>
      <div className={`${style.deliveryInfoMainContainer}`}>
        <div className={style.cmPadding} >
          <div className={`${style.deliveryInfo}`} >
            <img src={Tracking} alt="" />
            <p className={`${style.deliveryInfoHeadings}`} >Delivery information</p>
          </div>
          <div className=" flexdc gap1rem" >
            < p className="fw600" >
              Monday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Tuesday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Wednesday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Thursday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Friday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Saturday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Sunday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Estimated time until delivery: <span className="fw400" >20 min</span>
            </p>
          </div>

        </div>
        <div className={style.cmPadding}>
          <div className={`${style.deliveryInfo}`} >
            <img src={IdVerified} alt="" />
            <p className={`${style.deliveryInfoHeadings}`} >Contact information</p>
          </div>
          <div className=" flexdc gap1rem"  >
            <p> If you have allergies or other dietary  </p>
            <p>  restrictions, please contact the restaurant. The</p>
            <p>restaurant will provide food-specific </p>
            <p> information upon request.</p>


          </div>
          <div className="mrtop1rem" >
            <h4 className="">Phone number</h4>
            <p className="mrtop1rem">            +934443-43
            </p>
            <h4 className="mrtop1rem">            Website
            </h4>
            <p className="mrtop1rem"> http://mcdonalds.uk/</p>
          </div>

        </div>
        <div className={`${style.OperationContainer} ${style.cmPadding}`} >
          <div className={`${style.deliveryInfo}`} >
            <img src={CLock2} alt="" />
            <p className={`${style.deliveryInfoHeadings}`} >Operational Times</p>
          </div>
          <div className=" flexdc gap1rem" >
            < p className="fw600" >
              Monday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Tuesday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Wednesday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Thursday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Friday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Saturday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>
            < p className="fw600" >
              Sunday: <span className="fw400" >10:00 AM - 11:00 PM</span>
            </p>         </div>

        </div>
      </div>
      <div className={`${style.libMapContainer}`}>
        <LibMap />
      </div>

      <div>
        <Carousel />
      </div>
      <div className={style.RestaurantsContainer}>
        <Restaurants />
      </div>
    </div>
  );
}

export default Product;
