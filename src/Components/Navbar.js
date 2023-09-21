import React, { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import profback from "../static/back.jpg";
import loho from "../static/FARMY EMB green..png";
import { MdAgriculture, MdStoreMallDirectory } from "react-icons/md";
import { BsPerson, BsCart2 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineCar, AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

import "../styles/navbar.css";

// window.addEventListener('scroll', () => {
//   document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
// })

function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  function logout() {
    axios({
      url: "api/v1/farm/logout",
      withCredentials: true,
      method: "POST",
    });
    setUserInfo(null);
  }

  const [openMenu, setopenMenu] = useState(false);

  return (
    <nav>
      <div className="navbar1">
        <div className="menu_icon1">
          <AiOutlineMenu onClick={() => setopenMenu(true)} />
        </div>
        <img src={loho} alt="FarmyApp" className="navlogoi" />
        <div className="menuitemM">
          <div className="menuitem">
            <BsCart2 className="menuicon" size={30} />
            <div className="menuident">My Cart</div>
          </div>
          <div className="menuitem">
            <IoMdNotificationsOutline className="menuicon" size={30} />
            <div className="menuident">Notification</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="navbar">
        <div>
          <img src={loho} alt="FarmyApp" className="navlogoi" />
        </div>
        <div className="menuitems">
          <div className="menuitem">
            <MdStoreMallDirectory className="menuicon" size={30} />
            <div className="menuident">Search Store</div>
          </div>
          <div className="menuitem">
            <MdAgriculture className="menuicon" size={30} />
            <div className="menuident">Farmers' Market</div>
          </div>
          <div className="menuitem">
            <AiOutlineCar className="menuicon" size={30} />
            <div className="menuident">Logistics</div>
          </div>
          <div className="menuitem">
            <BsCart2 className="menuicon" size={30} />
            <div className="menuident">My Cart</div>
          </div>
          <div className="menuitem">
            <IoMdNotificationsOutline className="menuicon" size={30} />
            <div className="menuident">Notification</div>
          </div>
          <div className="menuitem">
            <BsPerson className="menuicon" size={30} />
            <div className="menuident">Profile</div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: openMenu ? "flex" : "none",
        }}
        className="nav_fixed"
      >
        <AiFillCloseCircle
          onClick={() => setopenMenu(false)}
          className="nav_fixed_Canel"
        />

        <img
          src={userInfo.avatar ? userInfo.avatar : profback}
          alt="farmImage"
          className="Mprofback"
        />

        <div className="mNameCont">
          <p className="Mname profName">{userInfo.farmName}</p>
          <p className="Mname profName">@{userInfo.username}</p>
        </div>
        <div className="scrollable">
        <div className="Mmenuitems">
          <div className="Mmenuitem">
            <MdStoreMallDirectory className="Mmenuicon" size={30} />
            <div className="Mmenuident">Search Store</div>
          </div>
          <div className="Mmenuitem">
            <MdAgriculture className="Mmenuicon" size={30} />
            <div className="Mmenuident">Farmers' Market</div>
          </div>
          <div className="Mmenuitem">
            <AiOutlineCar className="Mmenuicon" size={30} />
            <div className="Mmenuident">Logistics</div>
          </div>
          <div className="Mmenuitem">
            <BsCart2 className="Mmenuicon" size={30} />
            <div className="Mmenuident">My Cart</div>
          </div>
          <div className="Mmenuitem">
            <IoMdNotificationsOutline className="Mmenuicon" size={30} />
            <div className="Mmenuident">Notification</div>
          </div>
          <div className="Mmenuitem">
            <BsPerson className="Mmenuicon" size={30} />
            <div className="Mmenuident">Profile</div>
          </div>
        </div>
        <div className="manuopt">
          <Link>
            <p className="manuopt">Farmer's Market</p>
          </Link>
          <div className="subopt">
            <Link>
              <p className="manuopt1">My Products</p>
            </Link>
            <Link>
              <p className="manuopt1">Notifications</p>
            </Link>
            <Link>
              <p className="manuopt1">Orders</p>
            </Link>
            <Link>
              <p className="manuopt1">Wallet</p>
            </Link>
          </div>
          <Link>
            <p className="manuopt">Profile Settings</p>
          </Link>
          <Link to="/tandc">
            <p className="manuopt1">Terms and Condition</p>
          </Link>
          <Link to="/return">
            <p className="manuopt1">Return Policy</p>
          </Link>
          <Link to="/faqs">
            <p className="manuopt1">Frequently asked questions (FAQs)</p>
          </Link>
          <Link onClick={logout} to="/" className="menuitemhere">
            <p className="manuoptlog">Logout</p>
            <BiLogOut />
          </Link>
        </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
