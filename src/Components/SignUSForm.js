import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { css } from "@emotion/react"; // Import the loader
import { ClipLoader } from "react-spinners"; // Import the loader

// import loho from '../static/StoreY EMB green..png'
// import SignUTargetM from './SignUTargetM'

const SignUSForm = () => {
  const navigate = useNavigate();

  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [avatar, setAvatar] = useState(null);
  const { setUserInfo } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: 5000,
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const displayError = (err) => {
    toastr.warning(err, "Sorry");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let formData = new FormData();
    // if (avatar) {
    //   // for (let i = 0; i < avatar.length; i++) {
    //   //   formData.append('avatar', avatar[i]);
    //   //   console.log(avatar)
    //   // }
    //   formData.append('avatar', avatar)
    // }

    formData.append("storeAddress", storeAddress);
    formData.append("storeName", storeName);
    formData.append("city", city);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);

    await axios
      .post("api/v1/store", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: JSON.stringify({
          formData,
        }),
      })
      .then((response) => {
        axios({
          url: "api/v1/store/profile",
          withCredentials: true,
          method: "GET",
        }).then((response) => {
          const userInfoData = response.data;
          setUserInfo(userInfoData);
          setIsLoading(false);
          console.log(userInfoData);
          navigate("/myprofile");
        });
        console.log(response);
        // setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
        displayError(err.response);
        setIsLoading(false);
      });
  };

  return (
    // <div className='signuSform'>
    //   <img src={loho} alt='StoreyApp logo' className='lohosm'/>
    //   <div>Welcome to StoreyApp</div>
    //   <SignUTargetM/>
    <div className="">
      <div
        className="loading-overlay"
        style={{ display: isLoading ? "block" : "none" }}
      >
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={isLoading}
        />
        <p>Loading...</p>
      </div>
      <div className="sign_form">
        <form className="post_sign" onSubmit={handleSubmit}>
          <div className="waitlist_post">
            <label className="form_label">Store Name</label>
            <input
              type="text"
              onChange={(e) => setStoreName(e.target.value)}
              value={storeName}
              className="form_input form_inp"
              placeholder={"Your Store name"}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Store Address</label>
            <input
              type="text"
              onChange={(e) => setStoreAddress(e.target.value)}
              value={storeAddress}
              className="form_input form_inp"
              placeholder={"Enter the address to you Store here"}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">City</label>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="form_input form_inp"
              placeholder={"Enter your city of Store operation here"}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Username</label>
            <input
              type="test"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="form_input form_inp"
              placeholder={"Enter your username here"}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form_input form_inp"
              placeholder={"Your email"}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Phone Number</label>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="form_input form_inp"
              placeholder={"Enter your correct phone number here"}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form_input form_inp"
              placeholder={"Enter your password here"}
            />
          </div>
          <div className="tandcConatiner">
            <p>
              By submitting this form you are accepting{" "}
              <Link to="/tandc" className="tandc">
                <b>FarmyApp Terms of Use</b>
              </Link>
            </p>
          </div>
          {/* <div className="waitlist_post">
            <label className="form_label">Display Image</label>
            <input
              type="file"
              onChange={(e) => setAvatar(e.target.files)}
              className="custom-file-input"
              accept="image/*"
            />
            <br />

            <div className="image-preview-container">
              {avatar &&
                Array.from(avatar).map((avatar, index) => (
                  <div key={index} className="image-preview">
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt={`Avatar ${index}`}
                    />
                  </div>
                ))}
            </div> */}
          {/* </div> */}

          {/* <button className="sign_bt">Submit</button> */}
          <button className="sign_bt" disabled={isLoading}>
            {isLoading ? <span className="loading-spinner"></span> : "Submit"}
          </button>
        </form>
        <div className="already1">
          Already have an account?{" "}
          <Link to="/signin" className="signalt">
            Log in
          </Link>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SignUSForm;
