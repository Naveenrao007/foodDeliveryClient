import React from "react";
import SignInImage from "../../assets/images/SignInPage.png";
import style from "./SignIn.module.css";
import GooglePng from "../../../assets/assets/icons/Google.png";
function SignIn() {
  return (
    <div className={`${style.SignInContainer}`}>
      <section className={`${style.leftSection}`}>
        <div className={`${style.formcontainer}`}>
          <div className={`${style.SignInMainImg} texalignC`}>
            <img src="../../../logo2.png" alt="logo" />
          </div>
          <div className="mrtop1rem">
            <p className={`font32px fw600`}>Welcome Back 👋</p>
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
                name=""
                placeholder="Example@gmail.com"
                id=""
              />
            </div>
            <div className="mrtophalfrem">
              <p className={`${style.formSingInlabel}`}>Password</p>
              <input
                className={`${style.formInput}`}
                type="text"
                placeholder="At least 8 characters"
                name=""
                id=""
              />
            </div>
            <div className={`textyellow mrtop1rem  texalignEnd cp`}>
              Forgot Password?
            </div>
            <button className={`${style.formBtn} mrtop1rem cp`}>Sign in</button>
            <div>
              <div className={`${style.divideLineContainer}`}>
                <p></p> Or <p></p>
              </div>
              <div className="flex">
                <button className={`${style.formBtnGoggle} mrtop1rem cp`}>
                  <img src={GooglePng} alt="" />
                  Sign in with Google{" "}
                </button>
              </div>
            </div>
            <div className="mrtop1rem texalignC">
              Don't you have an account?
              <span className={`textyellow cp`}> Sign up</span>
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
