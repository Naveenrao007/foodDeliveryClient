import React from 'react'
import OrderFinal from "../../assets/icons/OrderPlaced.png"
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import style from "./Order.module.css"
import Item from '../Product/Cart/Item/Item';
function Order() {
    const navigate = useNavigate()
    const location = useLocation();
    const { cartData, totalPrice } = location.state || {};

    return (
        <div>
            <Header />
            <div >
                <div className={style.finalOrderscreen} >
                    <div>
                        <img src={OrderFinal} alt="" />
                    </div>
                    <div className={style.finalMessage}>
                        <h4>Order Placed Successfully</h4>
                        <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
                    </div>
                    <div className={style.OrderfinalDetail}>
                       <div>
                       {
                            cartData.map((item) => (
                                <p>{item.name}</p>
                            ))
                        }
                       </div>
                        <button className={style.BackToHome} onClick={ ()=>navigate("/")}>Back to Home</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Order