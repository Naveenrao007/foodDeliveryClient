import React, { createContext, useContext, useEffect, useState } from "react";
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
import papaJohns from "../../assets/images/Rectangle09.png";
import Kfc from "../../assets/images/Rectangle10.png";
import Texas from "../../assets/images/Rectangle11.png";
import BurgerKing from "../../assets/images/Rectangle12.png";
import Macd from "../../assets/images/Rectangle13.png";
import Shaurma from "../../assets/images/Rectangle14.png";
import MenuImg1 from "../../assets/images/Rectangle15.png";
import MenuImg2 from "../../assets/images/Rectangle16.png";
import MenuImg3 from "../../assets/images/Rectangle17.png";
import MenuImg4 from "../../assets/images/Rectangle18.png";
import MenuImg5 from "../../assets/images/Rectangle19.png";
import MenuImg6 from "../../assets/images/Rectangle20.png";
import OrderPng from "../../assets/images/OrderingApp.png";
import GrpImg1 from "../../assets/images/Group10.png";
import GrpImg2 from "../../assets/images/Group16.png";
import Food from "../../assets/images/food1.png";
import Order from "../../assets/images/order1.png";
import OrderFood from "../../assets/images/order-food1.png";
import Header from "../Header/Header";
import Restaurants from "../Restaurants/Restaurants";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { home } from "../../services/home";
import { MyContext } from "../../context/Context";
function Home() {

  const { data, setData } = useContext(MyContext);
  const [categoryData, setcategoryData] = useState(null)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await home()
      if (res.status == 200) {
        setData(res.data)
        setcategoryData(res.data.popularCategory)
        setIsLoading(false)
      } else {
        console.error("Error ", res.status);
        navigate("/login")
      }

    } catch (error) {
      console.error('API call failed with error:', error);
      navigate("/login")
    }

  }

  useEffect(() => {
    fetchData()

  }, [])
  return (
    isLoading ? (<Loading />) : <div className={`${style.homeContainer}`}>
      <Header />
      <div className={`${style.part2} mrtop1rem`}>
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
      <div className={`${style.part3}`}>
        <div className={`${style.part3Text1}`}>
          Up to -40% 🎊 Order.uk exclusive deals
        </div>
        <div className={`flex jcsb  ${style.foodOptions}`}>
          <p>Vegan</p>
          <p>Sushi</p>
          <p className={`${style.activeHome}`}>Pizza & Fast food</p>
          <p> others</p>
        </div>
      </div>
      <div className={`${style.part4}`}>
        <div className={`${style.foodOptionsSubDiv2}`}>
          <div className={`${style.discount}`}>
            <p>-40%</p>
          </div>
          <div className={`${style.restaurantContainer}`}>
            <p className={`${style.restotitle}`}>Restaurant</p>
            <p className={`${style.restoName}`}>Chef Burgers London</p>
          </div>
        </div>
        <div className={`${style.foodOptionsSubDiv1}`}>
          <div className={`${style.discount}`}>
            <p>-20%</p>
          </div>
          <div className={`${style.restaurantContainer}`}>
            <p className={`${style.restotitle}`}>Restaurant</p>
            <p className={`${style.restoName}`}>Grand Ai Cafe London</p>
          </div>
        </div>
        <div className={`${style.foodOptionsSubDiv2}`}>
          <div className={`${style.discount}`}>
            <p>-17%</p>
          </div>
          <div className={`${style.restaurantContainer}`}>
            <p className={`${style.restotitle}`}>Restaurant</p>
            <p className={`${style.restoName}`}>Butterbrot Caf’e London</p>
          </div>
        </div>
      </div>
      <div className={`${style.part3Text1}`}>
        Order.uk Popular Categories 🤩
      </div>

      <div className={style.gridContainer}>
        {
          categoryData?.map((item) => (
            <div className={`${style.menuOptionsDiv}`} key={item.id}>
              <div className={`${style.menuNameImg}`}>
                <img src={`data:image/png;base64,${item.image}`} alt={item.name} />
              </div>
              <div className={`${style.menuName}`}>
                <h4>{item.name}</h4>
                <p className={`textyellow font13px`}>{item.restaurantCount} Restaurants</p>
              </div>
            </div>
          ))
        }
      </div>
      <Restaurants />
      <div className="mrtop1rem">
        <img className="w-full" src={OrderPng} alt="" />
      </div>
      <div className="flex gap1rem mrtop2rem ">
        <div>
          <img className="w-full" src={GrpImg1} alt="" />
        </div>
        <div>
          <img className="w-full" src={GrpImg2} alt="" />
        </div>
      </div>
      <div className={`${style.AboutUsContainer}`}>
        <div className="flex jcsb alineItemCenter">
          <div>
            <h1>Know more about us! </h1>
          </div>
          <div className="flex gap2rem alineItemCenter">
            <p className={`${style.activeHome}`}>Frequent Questions </p>
            <p>Who we are?</p>
            <p>Partner Program</p>
            <p>Help & Support</p>
          </div>
        </div>
        <div className={`${style.AboutUsSubDiv}`}>
          <div className={`${style.AboutUsLeftSubDiv}`}>
            <div>
              <p className={`${style.active}`}>How does Order.UK work?</p>
              <p>What payment methods are accepted?</p>
              <p>Can I track my order in real-time?</p>
              <p>
                Are there any special discounts or <br /> promotions available?
              </p>
              <p>Is Order.UK available in my area?</p>
            </div>
          </div>
          <div className={`${style.AboutUsRightSubDiv}`}>
            <div className={`${style.AboutUsLeftSubDivGrid}`}>
              <div className={`${style.OrderFoodContainer}`}>
                <div>
                  <h5>Place an Order!</h5>
                  <div>
                    <img
                      className={`${style.foodIcon}`}
                      src={OrderFood}
                      alt=""
                    />
                  </div>
                  <p className="font14px" > Place order through our website or Mobile app</p>
                </div>
              </div>
              <div className={`${style.OrderFoodContainer}`}>
                <div>
                  <h5>Track Progress</h5>
                  <div>
                    <img className={`${style.foodIcon}`} src={Food} alt="" />
                  </div>
                  <p className="font14px"> Your can track your order status with delivery time</p>
                </div>
              </div>
              <div className={`${style.OrderFoodContainer}`}>
                <div>
                  <h5>Get your Order!</h5>
                  <div>
                    <img className={`${style.foodIcon}`} src={Order} alt="" />
                  </div>
                  <p className="font14px"> Receive your order at a lighting fast speed!</p>
                </div>
              </div>
            </div>
            <div className={`${style.OrderFoodText}`}>
              Order.UK simplifies the food ordering process. Browse through our
              diverse menu, select your favorite dishes, and proceed to
              checkout. Your delicious meal will be on its way to your doorstep
              in no time!
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.statics}`}>
        <div className={`${style.staticsSubDiv}`}>
          <p className={`${style.staticsSubDivText1}`}>546+</p>
          <p className={`${style.staticsSubDivText2}`}>Registered Riders</p>
        </div>
        <div className={`${style.staticsSubDiv}`}>
          <p className={`${style.staticsSubDivText1}`}>789,900+</p>
          <p className={`${style.staticsSubDivText2}`}>Orders Delivered</p>
        </div>
        <div className={`${style.staticsSubDiv}`}>
          <p className={`${style.staticsSubDivText1}`}>690+</p>
          <p className={`${style.staticsSubDivText2}`}>Restaurants Partnered</p>
        </div>
        <div className={`${style.staticsSubDiv}`}>
          <p className={`${style.staticsSubDivText1}`}>17,457+</p>
          <p className={`${style.staticsSubDivText2}`}>Food items</p>
        </div>
      </div>
    </div>
  );
}

export default Home;