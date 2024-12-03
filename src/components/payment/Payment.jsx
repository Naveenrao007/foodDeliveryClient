import React from 'react'
import style from "./Payment.module.css"
import { useLocation } from 'react-router-dom';
import MasterCard from "../../assets/icons/MasterCard.png";
import PayPal from "../../assets/icons/PayPal.png";
import Stripe from "../../assets/icons/Stripe.png";
import Wallet from "../../assets/icons/Wallet.png"
import { useNavigate } from 'react-router-dom';
import LeftArrow from "../../assets/icons/arrow-left.png";
import Header from '../Header/Header';
function Payment() {
    const navigate = useNavigate()
    const location = useLocation();
    const { cartData, totalPrice } = location.state || {};
   
    const handleFinal = () => {
        navigate("/final", {
            state: {
                cartData, totalPrice
            }
        })
    }
    return (
        <div className='mrCommon'>
            <Header />
            <div>
                <div> <h3 className={style.profilePhotoName}>
                    <span>
                        <img src={LeftArrow} alt="LeftArrow" />
                    </span>
                    Choose and Pay
                </h3></div>
            </div>
            <div className='flex jcsb'>
                <div className={style.PaymentOPtions}>
                    <div className={style.CheckoutRightDivDelivery}>
                        <div className='flex alineItemCenter'>
                            <div className={style.CheckoutRightDivDeliveryw}>
                                <img src={Wallet} alt="Wallet" />
                            </div>
                            <div>
                                <h4 className={style.CheckoutItemName}>Wallet</h4>
                                <p className={style.CheckoutItemCount}>Available balance: ₹1300</p>
                            </div>
                        </div>
                        <div className='textyellow '> &gt; </div>
                    </div>
                    <div className={style.CheckoutRightDivDelivery}>
                        <div className='flex alineItemCenter'>
                            <div className={style.CheckoutRightDivDeliveryImg}>
                                <img src={MasterCard} alt="MasterCard" />
                            </div>

                            <h4 className={style.CheckoutItemName}>MaestroKard</h4>


                        </div>
                        <div className='textyellow '><input type="radio" name="paymentMethod" id="" /> </div>
                    </div>
                    <div className={style.CheckoutRightDivDelivery}>
                        <div className='flex alineItemCenter'>
                            <div className={style.CheckoutRightDivDeliveryImg}>
                                <img src={PayPal} alt="PayPal" />
                            </div>

                            <h4 className={style.CheckoutItemName}>PayPal</h4>

                        </div>
                        <div className='textyellow '> <input type="radio" name="paymentMethod" id="" /> </div>
                    </div>
                    <div className={style.CheckoutRightDivDelivery}>
                        <div className='flex alineItemCenter'>
                            <div className={style.CheckoutRightDivDeliveryImg}>
                                <img src={Stripe} alt="Stripe" />
                            </div>

                            <h4 className={style.CheckoutItemName}>Stripe</h4>

                        </div>
                        <div className='textyellow '> <input type="radio" name="paymentMethod" id="" /> </div>
                    </div>
                    <div className={style.CheckoutRightDivDelivery}>
                        <div className='flex alineItemCenter'>
                            <div className={style.CheckoutRightDivDeliveryImg}>

                                <p className='font20px'> +</p>
                            </div>

                            <h4 className={style.CheckoutItemName}>Add Debit Card</h4>

                        </div>

                    </div>
                </div>
                <div className={style.PaymentOPtionsR} >
                    <div className={style.CheckoutItemDiscount}>
                        <div>
                            <p>Amount to be payed</p>
                            <h3 className={style.finalPrice}  >₹{totalPrice }</h3>
                        </div>
                    </div>

                    <button className={style.CheckoutItemPaymentBtn} onClick={handleFinal} > Proceed Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Payment