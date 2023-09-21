import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import { UserContext } from '../context/UserContext';

import Cookies from 'universal-cookie';

import { css } from '@emotion/react'; // Import the loader
import { ClipLoader } from 'react-spinners'; // Import the loader

function SignILForm() {
  const navigate = useNavigate();

  const cookies = new Cookies();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    cookies.set('jwt', { path: '/' });

    try {
      await axios({
        url: 'api/v1/user/auth',
        withCredentials: true,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ email, password }),
      });

      const profileResponse = await axios({
        url: 'api/v1/user/profile',
        withCredentials: true,
        method: 'GET',
      });

      const userInfoData = profileResponse.data;
      setUserInfo(userInfoData);
      console.log(userInfoData);
      navigate('/myprofile');
    } catch (error) {
      displayError(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signufform">
      <div className="loading-overlay" style={{ display: isLoading ? 'block' : 'none' }}>
        <ClipLoader css={override} size={150} color={'#123abc'} loading={isLoading} />
        <p>Loading...</p>
      </div>
      <div className="sign_form" style={{ filter: isLoading ? 'blur(3px)' : 'none' }}>
        <form className="post_sign" onSubmit={handleSubmit}>
          <div className="waitlist_post">
            <label className="form_label">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form_input form_inp"
              placeholder={'Your email'}
            />
          </div>
          <div className="waitlist_post">
            <label className="form_label">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form_input form_inp"
              placeholder={'Enter your password here'}
            />
          </div>

          <button className="sign_bt">Submit</button>
        </form>
        <div className="already1">
          Don't have an account?{' '}
          <Link to="/signup" className="signalt">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignILForm;
