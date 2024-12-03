import React from 'react'
import Header from '../Header/Header'
import Restaurants from '../Restaurants/Restaurants'
import LeftArrow from "../../assets/icons/arrow-left.png";
import DeliveryIcon from "../../assets/icons/deliveryIcon.png";
import style from "./Checkout.module.css"
import { useLocation, useNavigate } from 'react-router-dom';
function Checkout() {
    const location = useLocation();
    const navigate = useNavigate()
    const { cartData, totalPrice } = location.state || {};
    console.log(cartData);
    const handlePayment = () => {
        navigate("/payment", {
            state: {
                cartData: cartData,
                totalPrice: totalPrice + 10,
            },
        });
    };
    return (
        <div className={style.CheckoutContainer}>
            <Header />
            <div>
                <div> <h3 className={style.profilePhotoName}>
                    <span>
                        <img src={LeftArrow} alt="LeftArrow" />
                    </span>
                    Your Order Details
                </h3></div>
                <div className='flex jcsb'>
                    <div className={style.CheckoutleftDiv}>
                        {
                            cartData?.map((item) => (
                                <div className={style.CheckoutItems} key={item.id} >
                                    <div>
                                        <div className={style.CheckoutItemImg}>
                                            <img src={`data:image/png;base64,${item.image}`} alt={item.title} />
                                        </div>
                                        <div className='alineContentCenter' >

                                            <h5 className={style.CheckoutItemName}>{item.name}</h5>
                                            <p className={style.CheckoutItemCount}>{item.count}X</p>
                                        </div>
                                    </div>
                                    <div className={style.CheckoutItemPrice}>
                                        ₹{item.price}
                                    </div>
                                </div>
                            ))
                        }
                        <div className={style.CheckoutItemNotes}>
                            <p className={style.CheckoutItemCount}>Notes</p>
                            <input type="text" placeholder='Add order notes' />
                        </div>
                    </div>
                    <div className={style.CheckoutRightDiv}>
                        <div className={style.CheckoutRightDivDelivery}>
                            <div className='flex alineItemCenter'>
                                <div className={style.CheckoutRightDivDeliveryImg}>
                                    <img src={DeliveryIcon} alt="DeliveryIcon" />
                                </div>
                                <div>
                                    <h4 className={style.CheckoutItemName}>Delivery Address</h4>
                                    <p className={style.CheckoutItemCount}>45, Green Street, Sector 12...</p>
                                </div>
                            </div>
                            <div className='textyellow '> &gt; </div>
                        </div>

                        <div className={style.CheckoutItemDiscount}>
                            <div >
                                <p>Items</p>
                                <p>₹{totalPrice}</p>
                            </div>
                            <div>
                                <p>Sales Tax</p>
                                <p>₹10</p>
                            </div>
                        </div>
                        <div className={style.CheckoutItemDiscount}>
                            <div>
                                <p>Subtotal (<span>{cartData.length}</span> items)</p>
                                <h3 className={style.finalPrice}  >₹{totalPrice + 10}</h3>
                            </div>
                        </div>

                        <button className={style.CheckoutItemPaymentBtn} onClick={handlePayment}>  Choose Payment Method</button>
                    </div>
                </div>
            </div>
            <div className='mrtop2rem mrbtm2rem'>
                <h2>Similar Restaurants</h2>
                <Restaurants />
            </div>
        </div>
    )
}

export default Checkout