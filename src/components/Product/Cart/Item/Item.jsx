import React from "react";
import style from "./Item.module.css";
import PlusSign from "../../../../assets/icons/Plus.png"

function Item({ title, description, price, image }) {
  return (
    <div className={`${style.ItemContaier}`}>
      <div className={`${style.itemLeft}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>₹ {price}</h4>
      </div>
      <div className={`${style.itemRight}`}>
        <img src={image} alt={title} />
      </div>
      <div>
        <div className={`${style.PlusSignContainer}`}>
            <img src={PlusSign} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Item;
