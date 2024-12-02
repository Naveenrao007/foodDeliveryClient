import React, { useState, useContext, useEffect } from "react";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import { getUser, updateUser } from "../../services/user";
import styles from "./Profile.module.css";
import userImg from "../../assets/icons/profileImg.png";
import LeftArrow from "../../assets/icons/arrow-left.png";
import CardIcon from "../../assets/icons/cardIcon.png";
import EditCard from "../../assets/icons/editCardDetails.png";
import AddNewCard from "../../assets/icons/addnewCard.png";
import { countries } from "../../helper/data";
import { MyContext } from "../../context/Context";
import { toast } from "react-toastify";
import CardModal from "../models/CardModel/CardModel"
const Profile = () => {
  const { data, setData } = useContext(MyContext)
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [cards, setCards] = useState([]);

  const handleEditClick = (card) => {
    setCurrentCard(card);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setCurrentCard(null);
    setIsModalOpen(true);
  };

  const handleCardUpdate = (updatedCard) => {
    if (currentCard) {

      setCards(cards.map((card) => (card.cardNumber === currentCard.cardNumber ? updatedCard : card)));
    } else {

      setCards([...cards, updatedCard]);
    }
    setIsModalOpen(false);
  };

  const handleRemove = (cardToRemove) => {
  console.log(cardToRemove);
  
  };




  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
  });
  console.log("contextdata", data);

  const [errorMessage, setErrorMessage] = useState("");

  const fetchProfile = async () => {
    try {
      const res = await getUser();
      if (res.error) {
        setErrorMessage(res.error || "Failed to load profile data.");
        setUserData(null);
      } else {
        setCards(res.data.user.cards)

        setUserData(res.data.user);
        setFormData({
          name: res.data.user.name || "",
          email: res.data.user.email || "",
          gender: res.data.user.gender || "",
          country: res.data.user.country || "",
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setErrorMessage("An error occurred while loading the profile.");
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCountrySearch = (e) => {
    const input = e.target.value.toLowerCase();
    const filtered = countries.filter((country) =>
      country.toLowerCase().startsWith(input)
    );
    setFilteredCountries(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountrySelect = (country) => {
    setFormData((prev) => ({
      ...prev,
      country: country,
    }));
    setShowCountryDropdown(false);
  };

  const validateForm = () => {
    if (!formData.name) {
      setErrorMessage("Full name is required.");
      return false;
    }
    if (!formData.email) {
      setErrorMessage("Email is required.");
      return false;
    }
    if (!formData.gender) {
      setErrorMessage("Gender is required.");
      return false;
    }
    if (!formData.country) {
      setErrorMessage("Country is required.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSave = async () => {
    if (validateForm()) {
      try {
        console.log(formData);

        const res = await updateUser(formData);

        console.log(res);

        if (res.status === 200) {
          setUserData(res.data.user)
          setData((prevData) => ({
            ...prevData,
            user: res.data.user,
          }));
          setIsEditing(false)
          toast.success(res.data.message, { autoClose: 1200 });


        }


      } catch (error) {
        setErrorMessage("Failed to save the profile. Please try again.");
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const toggleEdit = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!userData) {
    return (
      <div>
        <Header classTitle="margin2rem" />
        <div className={styles.errorMessage}>
          Failed to load profile. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header classTitle="margin2rem" />
      <div className={styles.profileContainer}>
        <h3 className={styles.profilePhotoName}>
          <span>
            <img src={LeftArrow} alt="LeftArrow" />
          </span>{" "}
          My Profile
        </h3>
        <div className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <div className={styles.profileUserDiv}>
              <img
                src={userImg}
                alt="User Profile"
                className={styles.profileImg}
              />
              <p>{userData?.name || "User Name"}</p>
            </div>
            <button className={styles.editBtn} onClick={toggleEdit}>
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <form className={styles.formSection}>

            <div className={styles.formRow}>
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country || ""}
                  placeholder="Start typing country name..."
                  onChange={(e) => {
                    handleInputChange(e);
                    handleCountrySearch(e);
                    setShowCountryDropdown(true);
                  }}
                  disabled={!isEditing}
                />
                {isEditing && showCountryDropdown && (
                  <ul className={styles.countryList}>
                    {filteredCountries.map((country, index) => (
                      <li
                        key={index}
                        onClick={() => handleCountrySelect(country)}
                      >
                        {country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
          </form>
        </div>
        <div className={styles.paymentMethods}>
          <h3>Saved Payment Methods</h3>
          <div className={styles.cardsContainer}>
            {cards.map((card) => (
              <div className={styles.paymentCard} key={card.id}>
                <img
                  src={CardIcon}
                  alt="Card Icon"
                  className={styles.cardIcon}
                />
                <div className={styles.cardDetails}>
                  <h4>{card.cardNumber}</h4>
                  <p>{card.cardHolderName}</p>
                </div>
                <img onClick={() => handleEditClick(card)}
                  src={EditCard}
                  alt="Edit Icon"
                  className={`${styles.editIcon} cp`}
                />
              </div>
            ))}
            <div className={styles.paymentCardNew}>
              <img onClick={() => handleEditClick(null)}
                src={AddNewCard}
                alt="Card Icon"
                className={`${styles.editIcon} cp`}
              />
              <h4>Add New Card</h4>
            </div>
          </div>
        </div>
      </div>
      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleCardUpdate}
        onRemove={handleRemove}
        cardDetails={currentCard}
      />

    </div>
  );
};

export default Profile;
