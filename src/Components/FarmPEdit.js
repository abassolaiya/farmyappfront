import React, {useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

import '../styles/waitlist.css';
import Navbar from './Navbar';


function FarmPEdit() {
    const {id} = useParams();
    const { setUserInfo } = useContext(UserContext);

    const navigate = useNavigate()

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [measuringScale, setMeasuringScale] = useState('');
    const [perUnitPrice, setPerUnitPrice] = useState('');
    const [availabilityDate, setAvailabilityDate] = useState('');
    const [availableQuantity, setAvailableQuantity] = useState('');
    // const [images, setImages] = useState(null)

    toastr.options = {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-top-right",
        timeOut: 5000,
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      };
    
      const notify = () => {
        toastr.success("Product uploade suceessfully.", "Success Message");
      };
    
      const displayError1 = () => {
        toastr.warning("This might take sometime.", "Please be patientError");
      };

      const displayError = (x) => {
        toastr.error(x, "Error: Please check and fill the form again. File means the image you uploaded");
      };

      useEffect(() => {
        axios.get('api/v1/farmproducts/'+id)
          .then(postInfo => {
            console.log(postInfo.data)
              setProductName(postInfo.data.productName);
              setProductDescription(postInfo.data.productDescription);
              setMeasuringScale(postInfo.data.measuringScale);
              setPerUnitPrice(postInfo.data.perUnitPrice);
              setAvailabilityDate(postInfo.data.availabilityDate);
              setAvailableQuantity(postInfo.data.availableQuantity);
            });
      }, [id]);

    
    
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        displayError1()
      
        let formData = new FormData();
      
        // Loop through the images array and append each image
        // for (let i = 0; i < images.length; i++) {
        //   formData.append('images', images[i]);
        // }
      
        formData.append('productName', productName);
        formData.append('productDescription', productDescription);
        formData.append('measuringScale', measuringScale);
        formData.append('perUnitPrice', perUnitPrice);
        formData.append('availabilityDate', availabilityDate);
        formData.append('availableQuantity', availableQuantity);
        formData.append('id', id);
      
        try {
          const response = await axios.put('api/v1/farmproducts/'+id, formData, {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
          // Handle successful response
          console.log(response.data);
      
          // Fetch updated user profile or navigate to another page
          notify()
          newRedirect()
        } catch (error) {
          displayError(error.response.data.message)
          console.error(error.response.data);
        }
      };
      
      

    const newRedirect = async (e) => {
        await axios({
            url: 'api/v1/farm/profile',
            withCredentials: true,
            method: "GET",
        }).then(response => {
            const userInfoData = response.data;
            setUserInfo(userInfoData);
            // console.log(userInfoData);
            navigate('/farmprofile');
        }).catch( (err) => {
            console.log(err.response.data.message)
            // console.log(formData)
        })
    }

  return (
    <div>
    <Navbar/>
      <div className='container1'>
            <form className="post_blog" onSubmit={handleSubmit}>
                <div className="waitlist_post" >
                        <label className='form_label' >Product Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setProductName(e.target.value)}
                            value={productName}
                            className='form_input'
                            placeholder={"Enter Product Name"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Product Description</label>
                        <input 
                            type="text"
                            onChange={(e) => setProductDescription(e.target.value)}
                            value={productDescription}
                            className='form_input'
                            placeholder={"Enter product description here."}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Measuring Scale</label>
                        <input 
                            type="text"
                            onChange={(e) => setMeasuringScale(e.target.value)}
                            value={measuringScale}
                            className='form_input'
                            placeholder={"Enter Measuring Scale e.g. Tonnes, congos, crates..."}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Per Unit Price</label>
                        <input 
                            type="text"
                            onChange={(e) => setPerUnitPrice(e.target.value)}
                            value={perUnitPrice}
                            className='form_input'
                            placeholder={"How much is the last price do you intend selling per scale you entered above"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Availability Date</label>
                        <input 
                            type="date"
                            onChange={(e) => setAvailabilityDate(e.target.value)}
                            value={availabilityDate}
                            className='form_input'
                            placeholder={"When will this product be available for sale"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Available Quantity</label>
                        <input 
                            type="text"
                            onChange={(e) => setAvailableQuantity(e.target.value)}
                            value={availableQuantity}
                            className='form_input'
                            placeholder={"What quantity of this product will be available for sale"}
                        />
                </div>
                
                <button className="pos_bt" >Submit</button>

            </form>
        </div>
    </div>
  )
}

export default FarmPEdit
