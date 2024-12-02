import React, { useState, useEffect } from "react";
import styles from "./CardModel.module.css"; // Keep your existing styles intact
import { addUpdateCard } from "../../../services/user";
const CardModal = ({ isOpen, onClose, onSave, onRemove, cardDetails }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        cardNumber: "",
        expiryDate: "",
        cvc: "",
        cardHolderName: "",
    });

    const [errors, setErrors] = useState({
        cardNumber: "",
        expiryDate: "",
        cvc: "",
        cardHolderName: "",
    });

    useEffect(() => {
        if (cardDetails) {
            setFormData(cardDetails);
        }
    }, [cardDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;

       
        let errorMessage = "";
        if (name === "cardNumber") {
           
            if (!/^\d{0,16}$/.test(value)) {
                errorMessage = "Card number must be 16 digits.";
            }
        } else if (name === "expiryDate") {
           
            if (!/^(0[1-9]|1[0-2])\/\d{0,2}$/.test(value)) {
                errorMessage = "Expiration date must be in MM/YY format.";
            }
        } else if (name === "cvc") {
           
            if (!/^\d{0,3}$/.test(value)) {
                errorMessage = "CVC must be 3 digits.";
            }
        } else if (name === "cardHolderName") {
           
            if (value.trim() === "") {
                errorMessage = "Cardholder name is required.";
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (Object.values(errors).some((error) => error !== "")) {
            alert("Please fix the errors before submitting.");
            return;
        }
       
        const res = await addUpdateCard(formData)
       
        
        onSave(formData);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{cardDetails ? "Edit Payment Method" : "Add New Card"}</h2>
                <form className={styles.cardForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="16"
                        />
                        {errors.cardNumber && <p className={styles.error}>{errors.cardNumber}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="expiryDate">Expiration</label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            maxLength="5"
                        />
                        {errors.expiryDate && <p className={styles.error}>{errors.expiryDate}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleChange}
                            placeholder="123"
                            maxLength="3"
                        />
                        {errors.cvc && <p className={styles.error}>{errors.cvc}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="cardHolderName">Name on Card</label>
                        <input
                            type="text"
                            id="cardHolderName"
                            name="cardHolderName"
                            value={formData.cardHolderName}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />
                        {errors.cardHolderName && <p className={styles.error}>{errors.cardHolderName}</p>}
                    </div>

                    <div className={styles.modalActions}>
                        {cardDetails && (
                            <button
                                className={`${styles.btn} ${styles.btnRemove}`}
                                onClick={() => onRemove(formData)}
                            >
                                Remove
                            </button>
                        )}
                        <div>
                            <button
                                className={`${styles.btnCancel}`}
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                className={`${styles.btn} ${styles.btnSave}`}
                                type="submit"
                                disabled={
                                    !formData.cardNumber ||
                                    !formData.expiryDate ||
                                    !formData.cvc ||
                                    !formData.cardHolderName ||
                                    Object.values(errors).some((error) => error !== "")
                                }
                            >
                                {cardDetails ? "Save Changes" : "Add Card"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CardModal;
