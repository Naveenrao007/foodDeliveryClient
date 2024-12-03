import React, { useState } from "react";
import SignInImage from "../../assets/images/SignInPage.png";
import style from "./SignUp.module.css";
import GooglePng from "../../assets/icons/Google.png";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/user";

import {  toast,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const navigate = useNavigate();


  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Name is required.";
    if (!data.phoneNumber || !/^\+?\d{10,15}$/.test(data.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number.";
    }
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!data.password || data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async () => {
    if (validate()) {
      console.log("Form Data:", data);
      const response = await register(data);
      console.log(response);
      // 
      if (response.status === 400) {
        toast.error(response.error.message, {
          autoClose: 1400,

        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 1900);
      } else if (response.status === 201) {
        toast.success(response.data.message, {
          autoClose: 2000,

        });
        setTimeout(() => {
          navigate("/login");
        }, 2100);
      } else if (response.status === 500) {
        toast.error("Internal server error", {

          autoClose: 5000,

        });
      } else if (response.status === 404) {
        toast.error("Url is incorrect", {
          autoClose: 5000,

        });
      }
    }
  };

  return (
    <div className={`${style.SignInContainer}`}>
      <section className={`${style.leftSection}`}>
        <div className={`${style.formcontainer}`}>
          <div className={`${style.SignInMainImg} texalignC`}>
            <img src="../../../logo2.png" alt="logo" />
          </div>
          <div className="mrtop1rem">
            <p className={`font24px fw600`}>Welcome Back 👋</p>
          </div>
          <div className={`${style.SignInMsg} `}>
            Today is a new day. It's your day. You shape it. <br />
            Sign in to start ordering.
          </div>
          <div>
            <div className="mrtop1rem">
              <p className={`${style.formSingInlabel}`}>Name</p>
              <input
                className={`${style.formInput}`}
                type="text"
                name="name"
                placeholder="Naveen"
                value={data.name}
                onChange={handleChange}
              />
              {errors.name && <p className={`${style.errorText}`}>{errors.name}</p>}
            </div>
            <div className="mrtop1rem">
              <p className={`${style.formSingInlabel}`}>Phone Number</p>
              <input
                className={`${style.formInput}`}
                type="text"
                name="phoneNumber"
                placeholder="+91-9850085520"
                value={data.phoneNumber}
                onChange={handleChange}
                maxLength={10}
              />
              {errors.phoneNumber && (
                <p className={`${style.errorText}`}>{errors.phoneNumber}</p>
              )}
            </div>
            <div className="mrtop1rem">
              <p className={`${style.formSingInlabel}`}>Email</p>
              <input
                className={`${style.formInput}`}
                type="text"
                name="email"
                placeholder="Example@gmail.com"
                value={data.email}
                onChange={handleChange}
              />
              {errors.email && <p className={`${style.errorText}`}>{errors.email}</p>}
            </div>
            <div className="mrtophalfrem">
              <p className={`${style.formSingInlabel}`}>Password</p>
              <input
                className={`${style.formInput}`}
                type="password"
                name="password"
                placeholder="At least 8 characters"
                value={data.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className={`${style.errorText}`}>{errors.password}</p>
              )}
            </div>
            <div className={`textyellow mrtop1rem texalignEnd cp`}>
              Forgot Password?
            </div>
            <button
              className={`${style.formBtn} mrtop1rem cp`}
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <div>
              <div className={`${style.divideLineContainer}`}>
                <p></p> Or <p></p>
              </div>
              <div className="flex">
                <button className={`${style.formBtnGoggle} mrtop1rem cp`}>
                  <img src={GooglePng} alt="" />
                  Sign in with Google
                </button>
              </div>
            </div>
            <div className="mrtop1rem texalignC">
              Already have an account?
              <span
                className={`textyellow cp mrlefthalfrem`}
                onClick={() => navigate("/login")}
              >
                Sign in
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.rightSection}`}>
        <img src={SignInImage} alt="signIn Image" />
      </section>
    </div>
  );
}

export default SignUp;
