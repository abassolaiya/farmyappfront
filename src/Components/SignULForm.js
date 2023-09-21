import React, {useState, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


import { css } from '@emotion/react'; // Import the loader
import { ClipLoader } from 'react-spinners'; // Import the loader

// import loho from '../static/FARMY EMB green..png'
// import SignUTargetM from './SignUTargetM'

const SignULForm = () => {
  const navigate = useNavigate()

  const [farmName, setFarmName] = useState('');
  const [farmAddress, setFarmAddress] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {setUserInfo} = useContext(UserContext)
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

    try {
      await axios({
        url: '/api/v1/farm/',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        data: JSON.stringify({farmName, email, phoneNumber, city, farmAddress, password, username})
        })

        const profileResponse = await axios({
          url: 'api/v1/farm/profile',
          withCredentials: true,
          method: "GET",
        })

        const userInfoData = profileResponse.data;
        setUserInfo(userInfoData);
        // console.log(userInfoData);
        navigate('/myprofile');
    } catch (err) {
      // console.log(err)
      displayError(err.response)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    // <div className='signuLform'>
    //   <img src={loho} alt='FarmyApp logo' className='lohosm'/>
    //   <div>Welcome to FarmyApp</div>
    //   <SignUTargetM/>
      <div className=''>
        <div className='loading-overlay' style={{ display: isLoading ? 'block' : 'none' }}>
          <ClipLoader css={override} size={150} color={'#123abc'} loading={isLoading} />
          <p>Loading...</p>
        </div>
        <div className='sign_form'>
            <form className="post_sign" onSubmit={handleSubmit}>
                <div className="waitlist_post" >
                        <label className='form_label' >Farm Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setFarmName(e.target.value)}
                            value={farmName}
                            className='form_input form_inp'
                            placeholder={"Your farm name"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label' >Farm Address</label>
                        <input 
                            type="text"
                            onChange={(e) => setFarmAddress(e.target.value)}
                            value={farmAddress}
                            className='form_input form_inp'
                            placeholder={"Enter the address to you farm here"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label' >City</label>
                        <input 
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            className='form_input form_inp'
                            placeholder={"Enter your city of Farm operation here"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Username</label>
                        <input 
                            type="test"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            className='form_input form_inp'
                            placeholder={"Enter your username here"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Email</label>
                        <input 
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='form_input form_inp'
                            placeholder={"Your email"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Phone Number</label>
                        <input 
                            type="text"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            className='form_input form_inp'
                            placeholder={"Enter your correct phone number here"}
                        />
                </div>
                <div className="waitlist_post" >
                        <label className='form_label'>Password</label>
                        <input 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='form_input form_inp'
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
                
                <button className="sign_bt" >Submit</button>

            </form>
            <div className='already1'>Already have an account? <Link to='/signin' className='signalt'>Log in</Link></div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default SignULForm