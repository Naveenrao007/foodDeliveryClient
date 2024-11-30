import React, { useState } from "react";
import style from "./Cart.module.css";
import Group23 from "../../../assets/images/Group23.png";
import Group24 from "../../../assets/images/Group24.png";
import Group25 from "../../../assets/images/Group25.png";
import Item from "./Item/Item";
import Item1 from "../../../assets/icons/RectangleItem1.png";
const Cart = () => {
  const [cartItem, setcartItem] = useState(null);

  return (
    <div className={`${style.cardContainer} mrCommon`}>
      {cartItem ? (
        <>
          <div style={{ width: "70%" }}>
            <h2>Left Div</h2>
            <p>This section shows additional content when there is data.</p>
          </div>
          <div style={{ width: "30%", backgroundColor: "#f0f0f0" }}>
            <h2>Right Div</h2>
            <p>This section appears only if there's data.</p>
          </div>
        </>
      ) : (
        <div style={{ width: "100%" }}>
          <div className="w-full">
            <div className={`${style.part4} responsive-grid`}>
              <div>
                <img
                  src={Group23}
                  alt="Group 23"
                  className={`${style.responsiveImage}`}
                />
              </div>
              <div>
                <img
                  src={Group24}
                  alt="Group 24"
                  className={`${style.responsiveImage}`}
                />
              </div>
              <div>
                <img
                  src={Group25}
                  alt="Group 25"
                  className={`${style.responsiveImage}`}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className={style.Sections}>Burgers</h2>
            <div className={`${style.itemContainer}`}>
              <Item
                title="Royal Cheese Burger with extra Fries"
                description="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
                price={70}
                image={Item1}
              />
              <Item
                title="Royal Cheese Burger with extra Fries"
                description="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
                price={70}
                image={Item1}
              />
              <Item
                title="Royal Cheese Burger with extra Fries"
                description="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
                price={70}
                image={Item1}
              />
              <Item
                title="Royal Cheese Burger with extra Fries"
                description="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
                price={70}
                image={Item1}
              />
            </div>
          </div>
          <div>
            <h2 className={`${style.Sections} textyellow`}>Fries</h2>
            <div className={`${style.itemContainer}`}>
              <Item
                title="Royal Cheese Burger with extra Fries"
                description="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
                price={70}
                image={Item1}
              />
            </div>
          </div>
          <div>
            <h2 className={`${style.Sections} textyellow`}>Cold Drinks</h2>
            <div className={`${style.itemContainer}`}>
              <Item
                title="Royal Cheese Burger with extra Fries"
                description="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
                price={70}
                image={Item1}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
