import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
// import Loader from "react-loader-spinner";
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import "../styles/waitlist.css";
import Navbar from "./Navbar";

function StoreUpload() {
  const { setUserInfo } = useContext(UserContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('')
  const [categories, setCategories] = useState('')

  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [measuringScale, setMeasuringScale] = useState("");
  const [price, setPrice] = useState("");
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    axios.get()
  })

  const handleCreateCategory = async () => {
    try {
      // Send the new category name to the server
      const response = await axios.post('api/v1/storeproducts/category', {
        name: newCategoryName,
      });
      
      // Update categories state with the new category
      setCategories([...categories, response.data]);
      
      // Clear the newCategoryName state and close the popup
      setNewCategoryName('');
      setShowCategoryPopup(false);
    } catch (error) {
      console.error(error);
    }
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
    formData.append("price", price);
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
        navigate("/farmprofile");
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
            <label className="form_label">Category</label>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form_input"
            >
                <option value="">Select a category...</option>
                {/* Map over your categories here */}
                {categories.map((category) => (
                <option key={category._id} value={category._id}>
                    {category.name}
                </option>
                ))}
            </select>
            {selectedCategory === 'new' && (
                <button onClick={() => setShowCategoryPopup(true)}>Create New Category</button>
            )}
            </div>
            {showCategoryPopup && (
            <div className="category-popup">
                {/* Contents of the category creation popup */}
                <input
                type="text"
                onChange={(e) => setNewCategoryName(e.target.value)}
                value = {newCategoryName}
                className="form_input"
                placeholder={"Enter the name of the categopry you're trying to create here"}
                // Add state and onChange handler for new category name
                />
                <button onClick={() => handleCreateCategory()}>Create Category</button>
                <button onClick={() => setShowCategoryPopup(false)}>Cancel</button>
            </div>
)}

          <div className="waitlist_post">
            <label className="form_label">Per Unit Price</label>
            <input
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="form_input"
              placeholder={
                "How much is the last price do you intend selling per scale you entered above"
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
              onChange={(e) => setAvailableQuantity(e.target.value)}
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

export default StoreUpload;
