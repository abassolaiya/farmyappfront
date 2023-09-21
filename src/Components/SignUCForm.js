import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import { css } from '@emotion/react'; // Import the loader
import { ClipLoader } from 'react-spinners'; // Import the loader

const SignUCForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
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
    positionClass: 'toast-top-right',
    timeOut: 5000,
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };

  const displayError = (err) => {
    toastr.warning(err, 'Sorry');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phoneNumber', phoneNumber);
      formData.append('username', username);
      formData.append('password', password);
      if (avatar) {
        for (let i = 0; i < avatar.length; i++) {
          formData.append('avatar', avatar[i]);
        }
      }

      await axios({
        url: '/api/v1/user/',
        method: 'POST',
        withCredentials: true,
        data: formData,
      });

      const profileResponse = await axios({
        url: 'api/v1/user/profile',
        withCredentials: true,
        method: 'GET',
      });

      const userInfoData = profileResponse.data;
      setUserInfo(userInfoData);
      navigate('/myprofile');
    } catch (error) {
      displayError(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=''>
      <div className='loading-overlay' style={{ display: isLoading ? 'block' : 'none' }}>
        <ClipLoader css={override} size={150} color={'#123abc'} loading={isLoading} />
        <p>Loading...</p>
      </div>
      <div className='sign_form' style={{ filter: isLoading ? 'blur(3px)' : 'none' }}>
        <form className='post_sign' onSubmit={handleSubmit}>
          <div className='waitlist_post'>
            <label className='form_label'>Full Name</label>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='form_input form_inp'
              placeholder={'Your full name'}
            />
          </div>
          <div className='waitlist_post'>
            <label className='form_label'>Email</label>
            <input
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='form_input form_inp'
              placeholder={'Enter your email address'}
            />
          </div>
          <div className='waitlist_post'>
            <label className='form_label'>Username</label>
            <input
              type='text'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className='form_input form_inp'
              placeholder={'Enter your username'}
            />
          </div>
          <div className='waitlist_post'>
            <label className='form_label'>Phone Number</label>
            <input
              type='text'
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className='form_input form_inp'
              placeholder={'Enter your correct phone number here'}
            />
          </div>
          <div className='waitlist_post'>
            <label className='form_label'>Password</label>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='form_input form_inp'
              placeholder={'Enter your password here'}
            />
          </div>
          <div className='waitlist_post'>
            <label className='form_label'>Display Image</label>
            <input
              type='file'
              onChange={(e) => setAvatar(e.target.files)}
              className='custom-file-input'
              accept='image/*'
            />
            <br />

            <div className='image-preview-container'>
              {avatar &&
                Array.from(avatar).map((image, index) => (
                  <div key={index} className='image-preview'>
                    <img src={URL.createObjectURL(image)} alt={`Images ${index}`} />
                  </div>
                ))}
            </div>
            <div className="tandcConatiner">
              <p>
                By submitting this form you are accepting{" "}
                <Link to="/tandc" className="tandc">
                  <b>FarmyApp Terms of Use</b>
                </Link>
              </p>
            </div>
          <button className='sign_bt'>Submit</button>

          </div>

        </form>
        <div className='already1'>
          Already have an account? <Link to='/signin' className='signalt'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUCForm