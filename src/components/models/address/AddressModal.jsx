import React, { useState, useEffect } from "react";
import style from "./AddessModel.module.css"; 
import { stateList ,statesWithCities} from "../../../helper/data";

const AddressModal = ({ isOpen, onClose, onSave, onRemove, addressDetails }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        state: stateList,
        city: "",
        postalCode: "",
        phoneNumber: "",
        fullAddress: "",
    });

    const [errors, setErrors] = useState({
        state: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        fullAddress: "",
    });

    const [cities, setCities] = useState([]);
    const [states] = useState(Object.keys(statesWithCities));

    useEffect(() => {
        if (addressDetails) {
            setFormData(addressDetails);
            setCities(statesWithCities[addressDetails.state] || []);
        }
    }, [addressDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        let errorMessage = "";
        if (name === "postalCode" && !/^\d{6}$/.test(value)) {
            errorMessage = "Postal Code must be 6 digits.";
        } else if (name === "phoneNumber" && !/^\d{10}$/.test(value)) {
            errorMessage = "Phone Number must be 10 digits.";
        } else if (name === "fullAddress" && value.trim() === "") {
            errorMessage = "Full address is required.";
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

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setFormData({ ...formData, state: selectedState, city: "" });
        setCities(statesWithCities[selectedState] || []);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(errors).some((error) => error !== "")) {
            alert("Please fix the errors before submitting.");
            return;
        }

     
        onSave(formData);
    };

    return (
        <div className={style.modalOverlay}>
        <div className={style.modalContent}>
            <h2>{addressDetails ? "Edit Address" : "Add New Address"}</h2>
            <form className={style.addressForm} onSubmit={handleSubmit}>
                <div className={style.formRow}>
                    <div className={style.formGroup}>
                        <label htmlFor="state">State</label>
                        <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleStateChange}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                        {errors.state && <p className={style.error}>{errors.state}</p>}
                    </div>
    
                    <div className={style.formGroup}>
                        <label htmlFor="city">City/District</label>
                        <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        >
                            <option value="">Select City</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        {errors.city && <p className={style.error}>{errors.city}</p>}
                    </div>
    
                    <div className={style.formGroup}>
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="123456"
                            maxLength="6"
                        />
                        {errors.postalCode && <p className={style.error}>{errors.postalCode}</p>}
                    </div>
    
                    <div className={style.formGroup}>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="9876543210"
                            maxLength="10"
                        />
                        {errors.phoneNumber && <p className={style.error}>{errors.phoneNumber}</p>}
                    </div>
                </div>
    
                <div className={`${style.formGroup} ${style.fullAddressGroup}`}>
                    <label htmlFor="fullAddress">Full Address</label>
                    <input
                        type="text"
                        id="fullAddress"
                        name="fullAddress"
                        value={formData.fullAddress}
                        onChange={handleChange}
                        placeholder="Enter full address"
                    />
                    {errors.fullAddress && <p className={style.error}>{errors.fullAddress}</p>}
                </div>
    
                <div className={style.modalActions}>
                    {addressDetails && (
                        <button
                            className={`${style.btn} ${style.btnRemove}`}
                            onClick={() => onRemove(formData)}
                        >
                            Remove
                        </button>
                    )}
                    <div>
                        <button className={`${style.btnCancel}`} onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            className={`${style.btn} ${style.btnSave}`}
                            type="submit"
                            disabled={
                                !formData.state ||
                                !formData.city ||
                                !formData.postalCode ||
                                !formData.phoneNumber ||
                                !formData.fullAddress ||
                                Object.values(errors).some((error) => error !== "")
                            }
                        >
                            {addressDetails ? "Save Changes" : "Add Address"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
    
    );
};

export default AddressModal;
