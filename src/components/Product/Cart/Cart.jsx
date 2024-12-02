import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import Group23 from "../../../assets/images/Group23.png";
import Group24 from "../../../assets/images/Group24.png";
import Group25 from "../../../assets/images/Group25.png";
import Item from "./Item/Item";
import Item1 from "../../../assets/icons/RectangleItem1.png";
import ShoppingBasket from "../../../assets/icons/shoppingBasket.png";
import Remove from "../../../assets/icons/Remove.png";

import Share from "../../../assets/icons/share.png"
import { MyContext } from "../../../context/Context";
import Loading from "../../Loading/Loading";
function convertArrayToString(arr) {
  return arr.join(", ");
}
const Cart = ({ HandleAddCartItem }) => {
  const { data } = useContext(MyContext)
  const [isLoading, setIsLoading] = useState(true)
  const [cartItem, setcartItem] = useState(null);
  const [foodOption, setfoodOption] = useState(null);
  console.log("foodOptions", foodOption);

  useEffect(() => {
    if (data && data.restaurantData) {
      setfoodOption(data.restaurantData[0].subcategories);
      setIsLoading(false);
    }
  }, [data])

  const handleAddCartItem = (item) => {
    setcartItem((prevItems) => [...prevItems, item]);
  };

  return (
    isLoading ? <Loading /> : (
      <div className={`${style.cardContainer} mrCommon`}>
        {cartItem ? (
          <>
            <div className="flex ">
              <div style={{ width: "70%" }}>
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
                  {
                    foodOption.map((item) => (
                      <div key={item.id}>
                        <h2 className={`${style.Sections} textyellow`}>{item.categoryName}</h2>
                        <div className={`${style.itemContainer}`}>
                          {
                            item.items.map((food) => (
                              <Item
                                title={food.name}
                                description={convertArrayToString(food.ingredients)}
                                price={food.price}
                                image={food.image}
                                handleAddCartItem={() => handleAddCartItem(food)}
                              />
                            ))
                          }

                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
              <div className={style.cardRightContainer}>
                <div className="width80per m-auto">
                  <div className={`${style.shareContainer}`}>
                    <img src={Share} alt="Share" />
                    <p>Share this cart with your friends</p>
                    <button>Copy Link</button>
                  </div>
                  <div className={`${style.cardDetailsMainDiv}`} >
                    <div className={`${style.cardDetailsShoppingBasket}`}>
                      <img src={ShoppingBasket} alt="" />
                      <p>My Basket</p>
                    </div>
                    <div className={`${style.addedItemContainer}`}>
                      <div>
                        <p>1x</p>
                      </div>
                      <div>
                        <p>₹120</p>
                        <p>Royal Cheese Burger</p>
                        <p>With extra fries</p>
                      </div>
                      <div>
                        <img src={Remove} alt="Remove" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
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
            {
              foodOption.map((item) => (
                <div key={item.id}>
                  <h2 className={`${style.Sections} textyellow`}>{item.categoryName}</h2>
                  <div className={`${style.itemContainer}`}>
                    {
                      item.items.map((food) => (
                        <Item id={food.id}
                          title={food.name}
                          description={convertArrayToString(food.ingredients)}
                          price={food.price}
                          image={food.image}
                          handleAddCartItem={() => handleAddCartItem(food)}
                        />
                      ))
                    }

                  </div>
                </div>
              ))
            }

          </div>
        )}
      </div>
    )
  );
};

export default Cart;
