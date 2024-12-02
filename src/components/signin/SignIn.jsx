import React, { useState } from "react";
import SignInImage from "../../assets/images/SignInPage.png";
import style from "./SignIn.module.css";
import GooglePng from "../../assets/icons/Google.png";
import {  toast,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {login} from "../../services/user"

function SignIn() {
  const navigate = useNavigate();


  const [data, setData] = useState({
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
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!data.password || data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async() => {
    if (validate()) {
      console.log("Form Data:", data);
      const response = await login(data);
      if (response.status === 400) {
        toast.error(response.error.message, {
          autoClose: 1400,
        });
        
      } else if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        
        toast.success(response.data.message, { autoClose: 1200 });
        navigate("/");
      } else if (response.status === 500) {
        
        toast.error("Internal server error");
      } else if (response.status === 404) {
        toast.error("Url is incorrect");
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
              Don't you have an account?
              <span
                className={`textyellow cp mrlefthalfrem`}
                onClick={() => navigate("/register")}
              >
                Sign up
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

export default SignIn;
