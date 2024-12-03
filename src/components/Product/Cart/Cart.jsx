import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import Group23 from "../../../assets/images/Group23.png";
import Group24 from "../../../assets/images/Group24.png";
import Group25 from "../../../assets/images/Group25.png";
import Item from "./Item/Item";
import ShoppingBasket from "../../../assets/icons/shoppingBasket.png";
import ForwardArrow from "../../../assets/icons/ForwardButton.png";
import ForwardArrowDown from "../../../assets/icons/ForwardButtonDown.png";
import ForwardArrowgreen from "../../../assets/icons/ForwardButtongreen.png";
import DeliveryScooter from "../../../assets/icons/DeliveryScooter.png";
import NewStore from "../../../assets/icons/NewStore.png";

import Remove from "../../../assets/icons/Remove.png";
import Share from "../../../assets/icons/share.png";
import { MyContext } from "../../../context/Context";
import Loading from "../../Loading/Loading";
import { restaurants } from "../../../services/home";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function convertArrayToString(arr) {
  return arr.join(", ");
}

const Cart = () => {
  const navigate = useNavigate();
  const { data } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const [foodOption, setFoodOption] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shareableLink, setShareableLink] = useState("");

  useEffect(() => {
    const calculateTotal = () => {
      const sum = cartItem.reduce((acc, item) => acc + item.count * item.price, 0);
      setTotalPrice(sum);
    };

    calculateTotal();
  }, [cartItem]);
  const handleCheckout = () => {
   
    
    navigate("/checkout", {
      state: {
        cartData: cartItem,
        totalPrice,
      },
    });
  };
  
  const generateShareableLink = () => {
    const cartDetails = cartItem.map(
      (item) => `${item.name} (${item.count} x ₹${item.price})`
    );
    const link = `Your Cart: ${cartDetails.join(", ")}. Total: ₹${totalPrice}`;
    setShareableLink(link);
    navigator.clipboard.writeText(link);
    toast.success("Cart link copied to clipboard!");
  };
  const fetchProduct = async () => {
    const res = await restaurants();
    if (res.status === 200) {
      setFoodOption(res.data.restaurantData[0].subcategories);
      setIsLoading(false);
    } else {
      toast.error(res.message, { autoClose: 1200 });
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  const handleAddCartItem = (item) => {
    setCartItem((prevItems) => {
      const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);

      if (itemIndex !== -1) {

        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          count: updatedItems[itemIndex].count + 1,
        };
        return updatedItems;
      } else {

        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };


  const handleRemoveCartItem = (id) => {
    setCartItem((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className={`${style.cardContainer} mrCommon`}>
      {cartItem.length > 0 ? (
        <>
          <div className="flex">
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
                {foodOption.map((item) => (
                  <div key={item.id}>
                    <h2 className={`${style.Sections} textyellow`}>{item.categoryName}</h2>
                    <div className={`${style.itemContainer}`}>
                      {item.items.map((food) => (
                        <Item
                          key={food.id}
                          title={food.name}
                          description={convertArrayToString(food.ingredients)}
                          price={food.price}
                          image={food.image}
                          handleAddCartItem={() => handleAddCartItem(food)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.cardRightContainer}>
              <div className="width80per m-auto">
                <div className={`${style.shareContainer}`}>
                  <img src={Share} alt="Share" />
                  <p>Share this cart with your friends</p>
                  <button onClick={generateShareableLink}  >Copy Link</button>
                </div>
                <div className={`${style.cardDetailsMainDiv}`}>
                  <div className={`${style.cardDetailsShoppingBasket}`}>
                    <img src={ShoppingBasket} alt="" />
                    <p>My Basket</p>
                  </div>
                  <div className={`${style.addedItemContainer}`}>
                    {cartItem.map((cartItem) => (
                      <div key={cartItem.id} className={style.cartItem}>
                        <div className={style.foodQty} > <p>{cartItem.count} x </p>  </div>
                        <div className={style.itemDetails}>

                          <p className={style.foodPrice} >₹{cartItem.price}</p>
                          <p className={style.foodName}>{cartItem.name}</p>
                          <p className={style.foodIng}>{convertArrayToString(cartItem.ingredients)}</p>
                        </div>

                        <div
                          className={style.removeItem}
                          onClick={() => handleRemoveCartItem(cartItem.id)}
                        >
                          <img src={Remove} alt="Remove" />
                        </div>
                      </div>
                    ))}
                    <div className={`${style.totalAmt} `} >
                      <div >
                        <h4>Sub Total: </h4> <p>₹ {totalPrice}</p>
                      </div>
                      <div >
                        <h4>Discounts: </h4> <p>-₹5.00</p>

                      </div>
                      <div >
                        <h4>Discounts:</h4> <p> ₹5.00</p>

                      </div>
                    </div>
                    <div className={`${style.couponContainer} `} >
                      <div className={style.AmtToPay} >
                        <p>Total to pay</p>
                        <h3 >₹{totalPrice}.00</h3>
                      </div>
                      <div className={style.couponOpt} >
                        <p>Choose your free item..</p>
                        <img src={ForwardArrowDown} alt="" />
                      </div>
                      <div className={style.couponOpt} >
                        <p>Apply Coupon Code here</p>
                        <img src={ForwardArrowgreen} alt="" />
                      </div>
                    </div>
                    <div className={style.deliveryMainContainer}>
                      <div className={`${style.deliveryContainer}`}>
                        <div className={`${style.DeliveryScooterDiv}`}  >
                          <div>
                            <img src={DeliveryScooter} alt="" />
                          </div>
                          <div>
                            <h5>Delivery</h5><p>Starts at 17:50</p>
                          </div>
                        </div>
                        <div className={style.middleBorder}></div>
                        <div className={`${style.DeliveryCollectionDiv}`}>
                          <div>
                            <img src={NewStore} alt="" />
                          </div>
                          <div>
                            <h5>Collection</h5><p>Starts at 16:50</p>
                          </div>
                        </div>
                      </div>
                      {
                        totalPrice > 500 ? <div className={style.CheckOutDiv} onClick={handleCheckout}>
                          <img src={ForwardArrow} alt="" />
                          <p>Checkout!</p>
                        </div> : <div className={style.CheckOutDivNotClickable} >
                          <img src={ForwardArrow} alt="" />
                          <p>Checkout!</p>
                        </div>
                      }

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
          {foodOption.map((item) => (
            <div key={item.id}>
              <h2 className={`${style.Sections} textyellow`}>{item.categoryName}</h2>
              <div className={`${style.itemContainer}`}>
                {item.items.map((food) => (
                  <Item
                    key={food.id}
                    title={food.name}
                    description={convertArrayToString(food.ingredients)}
                    price={food.price}
                    image={food.image}
                    handleAddCartItem={() => handleAddCartItem(food)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
