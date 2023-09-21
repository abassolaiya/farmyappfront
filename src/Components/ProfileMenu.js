import {useContext} from 'react'
import axios from 'axios'

import { UserContext } from '../context/UserContext'
import profback from '../static/back.jpg'

import '../styles/profile.css'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'

import toastr from "toastr";
import "toastr/build/toastr.min.css";

function ProfileMenu() {
  const {setUserInfo,userInfo} = useContext(UserContext);

  function logout() {
    userInfo && axios({
      url: 'api/v1/farm/logout',
      withCredentials: true,
      method: "POST",
    });
    setUserInfo(null);
    
  }

  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: 5000,
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const notify = () => {
    toastr.warning("check back after some time", "Sorry this functionality is not yet available for use.");
  };


  return (
    <div className='profilemenu'>
      <img src={userInfo.avatar ? userInfo.avatar : profback} alt='profile background' className='profback'/>
      <img src={userInfo.avatar ? userInfo.avatar : profback} alt='profile background' className='profimg'/>
      <div className='profName'>
      {userInfo.farmName && (
        <p className='profName'>{userInfo.farmName}</p>
      )}
      {userInfo.storeName && (
        <p className='profName'>{userInfo.storeName}</p>
      )}
      {userInfo.logisticsCompanyName && (
        <p className='profName'>{userInfo.logisticsCompanyName}</p>
      )}
        {/* <p className='profName'>{userInfo.farmName}</p> */}
        <p className='profName'>@{userInfo.username}</p>
      </div>
      <div className='manuopt'>
        <Link onClick ={notify}>
            <p className='manuopt'>My Market</p>
        </Link>
        <div className='subopt'>
            <Link>
                <p className='manuopt1'>My Products</p>
            </Link>
            <Link onClick ={notify}>
                <p className='manuopt1'>Notifications</p>
            </Link>
            <Link onClick ={notify}>
                <p className='manuopt1'>Orders</p>
            </Link>
            <Link onClick ={notify}>
                <p className='manuopt1'>Wallet</p>
            </Link>
        </div>
        <Link onClick ={notify}>
            <p className='manuopt'>Profile Settings</p>
        </Link>
        <Link to ="/tandc">
                <p className='manuopt1'>Terms and Condition</p>
        </Link>
        <Link to ="/return">
                <p className='manuopt1'>Return Policy</p>
        </Link>
        <Link to ="/faqs">
                <p className='manuopt1'>Frequently asked questions (FAQs)</p>
        </Link>
        <Link onClick={logout} className='menuitemhere' to='/'>
            <p className='manuoptlog'>Logout</p>
            <BiLogOut />
        </Link>
      </div>
    </div>
  )
}

export default ProfileMenu
