import React, { useState, useContext } from "react";
import axios from "axios";
// import Loader from "react-loader-spinner";
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { BiArrowBack } from "react-icons/bi"

import "../styles/waitlist.css";
import Navbar from "./Navbar";

function FarmUpload() {
  const { setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [measuringScale, setMeasuringScale] = useState("");
  const [perUnitPrice, setPerUnitPrice] = useState("");
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange1 = (e) => {
    // Allow only numeric characters
    const inputText = e.target.value;
    const numericText = inputText.replace(/\D/g, ""); // Remove non-numeric characters
    setPerUnitPrice(numericText);
  };

  const handleInputChange = (e) => {
    // Allow only numeric characters
    const inputText = e.target.value;
    const numericText = inputText.replace(/\D/g, ""); // Remove non-numeric characters
    setAvailableQuantity(numericText);
  };

  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: 5000,
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const notify = () => {
    toastr.success("Product uploaded successfully.", "Success Message");
  };

  const displayError1 = () => {
    toastr.warning("This might take sometime.", "Please be patientError");
  };

  const displayError = (x) => {
    toastr.error(
      x,
      "Error: Please check and fill the form again. File means the image you uploaded"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    displayError1();
    setIsLoading(true);

    let formData = new FormData();
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("measuringScale", measuringScale);
    formData.append("perUnitPrice", perUnitPrice);
    formData.append("availabilityDate", availabilityDate);
    formData.append("availableQuantity", availableQuantity);

    try {
      await axios.post("api/v1/farmproducts/", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //   console.log(response.data);
      notify();
      newRedirect();
      setIsLoading(false);
    } catch (error) {
      displayError(error.response.data.message);
      setIsLoading(false);
      //   console.error(error.response.data);
    }
  };

  const newRedirect = async (e) => {
    await axios({
      url: "api/v1/farm/profile",
      withCredentials: true,
      method: "GET",
    })
      .then((response) => {
        const userInfoData = response.data;
        setUserInfo(userInfoData);
        // console.log(userInfoData);
        navigate("/myprofile");
      })
      .catch((err) => {
        // console.log(err.response.data.message)
        // console.log(formData)
        displayError(err.response.data.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container1">
      <div className="goBack">
          <button onClick={() => navigate(-1)} className="goBack"> 

            <BiArrowBack/> Go back
          </button>
          </div>
          <br/>
        <form className="post_blog" onSubmit={handleSubmit}>
          <div className="waitlist_post">
            <label className="form_label">Product Name</label>
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              className="form_input"
              placeholder={"Enter Product Name"}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Product Description</label>
            <input
              type="text"
              onChange={(e) => setProductDescription(e.target.value)}
              value={productDescription}
              className="form_input"
              placeholder={"Enter product description here."}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Measuring Scale</label>
            <input
              type="text"
              onChange={(e) => setMeasuringScale(e.target.value)}
              value={measuringScale}
              className="form_input"
              placeholder={
                "Enter Measuring Scale e.g. Tonnes, congos, crates..."
              }
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Per Unit Price</label>
            <input
              type="text"
              onChange={handleInputChange1} // Use onInput to allow only numeric input
              value={perUnitPrice}
              className="form_input"
              placeholder={
                "How much do you intend selling per scale you entered above"
              }
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Availability Date</label>
            <input
              type="date"
              onChange={(e) => setAvailabilityDate(e.target.value)}
              value={availabilityDate}
              className="form_input"
              placeholder={"When will this product be available for sale"}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Available Quantity</label>
            <input
              type="text"
              onChange = {handleInputChange}
              value={availableQuantity}
              className="form_input"
              placeholder={
                "What quantity of this product will be available for sale"
              }
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Product Images</label>
            <input
              type="file"
              onChange={(e) => setImages(e.target.files)}
              className="custom-file-input"
              multiple
              accept="image/*"
            />
            <br />

            <div className="image-preview-container">
              {images &&
                Array.from(images).map((image, index) => (
                  <div key={index} className="image-preview">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Images ${index}`}
                    />
                  </div>
                ))}
            </div>
          </div>

          <button className="pos_bt" disabled={isLoading}>
            {isLoading ? <span className="loading-spinner"></span> : "Submit"}
          </button>
          {/* <button className="pos_bt" >Submit</button> */}
        </form>
      </div>
    </div>
  );
}

export default FarmUpload;
