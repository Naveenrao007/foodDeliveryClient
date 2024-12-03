import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import Star from "../../assets/icons/star.png";
import Forwardbtn from "../../assets/icons/forwardbtn.png";
import ShoppingBasket from "../../assets/icons/shoppingBasket.png";
import Location from "../../assets/icons/Location.png";
import MaleUser from "../../assets/icons/maleUser.png";
import { MyContext } from "../../context/Context"
function Header({ classTitle }) {
  const { data } = useContext(MyContext)




  const navigate = useNavigate()
  return (
    <div>
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
          <div className={`${style.ShoppingBasket}`}>
            <div
              className={`flex alineItemCenter ${style.borderR} ${style.cartPadding}`}
            >
              <div>
                <img src={ShoppingBasket} alt="shoppingBasket" />
              </div>
              <div className={`${style.myCartText}`}>My Cart</div>
            </div>
            <div className={`${style.itemValueH}`}>
              {/* GBP <span>00:00</span> */}
            </div>
            <div
              className={`${style.borderL} ${style.cartPadding} alineContentCenter alineItemCenter m-auto h-full`}
            >
              <img src={Forwardbtn} alt="downloadBtn" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${classTitle} flex jcsb mrtop1rem`} >
        <div>
          <img src="../../../logo2.png" alt="logo" />
        </div>
        <div className={`flex gap3rem alineItemCenter ${style.pages}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.NavActive : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="#"
          // className={({ isActive }) => (isActive ? style.NavActive : "")}
          >
            Browse Menu
          </NavLink>
          <NavLink
            to="#"
          // className={({ isActive }) => (isActive ? style.NavActive : "")}
          >
            Special Offers
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? style.NavActive : "")}
          >
            Restaurants
          </NavLink>
          <NavLink
            to="#"
          // className={({ isActive }) => (isActive ? style.NavActive : "")}/
          >
            Track Order
          </NavLink>
          <div className={`${style.userAuth}`}   >
            <img src={MaleUser} alt="maleUser" />
            {
              data?.user?.name ? <p className="cp" onClick={() => { navigate("/profile") }}>   Hey {data.user.name} </p> : <p className="cp" onClick={() => { navigate("/login") }} >Login/Signup</p>
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
