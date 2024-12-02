import React from "react";
import style from "./Item.module.css";
import PlusSign from "../../../../assets/icons/Plus.png";

function Item({ title, description, price, image, id, handleAddCartItem }) {
  return (
    <div className={`${style.ItemContaier}`} key={id}>
      <div className={`${style.itemLeft}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>₹ {price}</h4>
      </div>
      <div className={`${style.itemRight}`}>
        <img src={`data:image/png;base64,${image}`} alt={title} />
      </div>
      <div>
        <div className={`${style.PlusSignContainer}`} onClick={() => handleAddCartItem(id)}>
          <img src={PlusSign} alt="Add to Cart" />
        </div>
      </div>
    </div>
  );
}

export default Item;
