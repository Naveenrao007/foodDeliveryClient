import React, { useEffect, useContext, useState } from "react";
import style from "./Address.module.css";
import LeftArrow from "../../assets/icons/arrow-left.png";
import Header from "../Header/Header";
import AddNew from "../../assets/icons/AddNew.png";

import { addUpdateaddress, removeAddress } from "../../services/user"; 
import AddressModal from "../models/address/AddressModal";
import { MyContext } from "../../context/Context";

function Address() {
    const { data, setData } = useContext(MyContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAddress, setCurrentAddress] = useState(null);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        setAddress(data?.user?.addresses || []);
    }, [data]);

    const openModal = (address = null) => {
        setCurrentAddress(address);
        setIsModalOpen(true);
    };

    const handleSave = async (updatedAddress) => {
        const payload = { ...updatedAddress };

        
        if (currentAddress && currentAddress.addId) {
            payload.addId = currentAddress.addId;
        }

        const res = await addUpdateaddress(payload);

        if (res && res.data && res.data.addresses) {
            setData((prevData) => ({
                ...prevData,
                user: {
                    ...prevData.user,
                    addresses: res.data.addresses,
                },
            }));
            setAddress(res.data.addresses); 
        }

        setIsModalOpen(false);
    };
    

    const handleRemove = async (addId) => {
        console.log("addId,",addId);
        
        try {
            const res = await removeAddress({ addId }); 
            if (res && res.data && res.data.addresses) {
                setData((prevData) => ({
                    ...prevData,
                    user: {
                        ...prevData.user,
                        addresses: res.data.addresses,
                    },
                }));
                setAddress(res.data.addresses); 
            }
        } catch (error) {
            console.error(`Error removing address with ID: ${addId}`, error);
        }
    };

    return (
        <div className="mrCommon">
            <Header />
            <div>
                <h3 className={style.profilePhotoName}>
                    <span>
                        <img src={LeftArrow} alt="Back" />
                    </span>
                    Your Addresses
                </h3>
            </div>

            <div className={style.AddressContainer}>
                <div className={style.addNewAddress} onClick={() => openModal()}>
                    <div>
                        <img src={AddNew} alt="Add New Address" />
                        <p>Add Address</p>
                    </div>
                </div>

                {address.length > 0 &&
                    address.map((item) => (
                        <div className={style.currentAddress} key={item.addId}>
                            <div className={style.addressHeader}>
                                <h3>{item.name}</h3>
                                {item.isPrimary && (
                                    <div className={style.defaultLabel}>Default</div>
                                )}
                            </div>
                            <div className={style.addressDetails}>
                                <span>{item.fullAddress}</span>
                                <span>{item.city},</span>
                                <span>{item.postalCode},</span>
                                <span>India</span>
                            </div>
                            <div className={style.phoneNumber}>
                                <h4>Phone Number:</h4>
                                <p>{item.phoneNumber}</p>
                            </div>
                            <div className={style.buttonContainer}>
                                <button onClick={() => openModal(item)}>Edit</button>
                                <button onClick={() => handleRemove(item.addId)}>Remove</button>
                            </div>
                        </div>
                    ))}
            </div>

            <AddressModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                addressDetails={currentAddress}
            />
        </div>
    );
}

export default Address;
