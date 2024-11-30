import React from "react";
import style from "./Footer.module.css";
import facebookIcon from "../../assets/icons/Facebook.png";
import instagramIcon from "../../assets/icons/Instagram.png";
import snapchatIcon from "../../assets/icons/Snapchat.png";
import tikTokIcon from "../../assets/icons/TikTok.png";

function Footer() {
  return (
    <footer className={style.footer}>
      <section className={`${style.footerTopContainer}`}>
        <section >
          <div className={style.logo}>
            <img src="../../../logo1.png" alt="Company Logo" />
          </div>
          <div className={`${style.storeImg} flexdr`}>
          <img src="../../../Group.png" alt="Store Img" />

          </div>
          <p className={`${style.companyInfo} mrtop1rem font15px fw400`}>
            Company # 490039-445, Registered with  <br />
            House of Companies.
          </p>
        </section>

        <section className={style.emailSection}>
          <div>
            <h2 className={`${style.dealText} font18px  fw700`}>
              Get Exclusive Deals in your Inbox
            </h2>
            <div className={`${style.inputContainer}`} >
              <input placeholder="your@gmail.com" type="text" className={`${style.inputField}`} />
              <button className={`${style.subscribeBtn} cp  `}>Subscribe</button>
            </div>
            <p className={`${style.emailPolicy} mrtop1rem font13px fw400`}>
              We won't spam, read our <span>email policy</span>
            </p>
          </div>
          <div className={`${style.socialMedia} mrtop1rem`}>
            <div className={style.socialIcons}>
              <img className="cp" src={facebookIcon} alt="Facebook" />
              <img className="cp" src={instagramIcon} alt="Instagram" />
              <img className="cp" src={snapchatIcon} alt="Snapchat" />
              <img className="cp" src={tikTokIcon} alt="TikTok" />
            </div>
          </div>
        </section>

        <section className={`${style.linksContainer}`}>
          <div>
            <h2 className="font18px">Legal Pages</h2>
            <p> Terms and conditions</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Modern Slavery Statement</p>
          </div>
          <div>
            <h2 className="font18px">Important Links</h2>

            <p>Get help </p>
            <p>Add your restaurant </p>
            <p>Sign up to deliver</p>
            <p>Create a business account</p>
          </div>
        </section>
        </section>

        <section className={`${style.copyRightSection} alineItemCenter `}>
          <div>Order.uk Copyright 2024, All Rights Reserved.</div>
          <div className={`${style.PrivacyPolicy}`}>
            <p>Privacy Policy </p>
            <p> Terms </p>
            <p> Pricing</p>
            <p>Do not sell or share my personal information</p>
          </div>
        </section>
    </footer>
  );
}

export default Footer;
