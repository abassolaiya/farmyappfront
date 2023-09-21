import { useState } from "react";
import { Link } from "react-router-dom";

import { MdAgriculture, MdStoreMallDirectory } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import "../styles/signup.css";

// import SignUTargets from '../Components/SignUTargets'
import loho from "../static/FARMY EMB green..png";
import SignUFForm from "../Components/SignUFForm";
import SignUSForm from "../Components/SignUSForm";
import SignULForm from "../Components/SignULForm";
import SignUCForm from "../Components/SignUCForm";

export default function Signup() {
  const [selectedButton, setSelectedButton] = useState("farm"); // Initialize with the default selected button

  const handleButtonSelect = (buttonId) => {
    setSelectedButton(buttonId);
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
    toastr.warning(
      "check back after some days",
      "Sorry this functionality is not yet available for use."
    );
  };

  return (
    <div className="signContainer">
      {/* <div> */}
      <div className="signutarget">
        {/* <Link
          onClick={() => handleButtonSelect("customer")}
          className="signueach"
        > */}
        <Link
          onClick ={notify}
          className="signueach"
        >
          <div className="signueach1">
            <div>
              <BsPerson />
            </div>
            <div>Sign Up as a Buyer</div>
            <div>
              {selectedButton === "customer" && <IoIosCheckmarkCircle />}
            </div>
          </div>
        </Link>
        <Link onClick ={notify} className="signueach">
        {/* <Link onClick={() => handleButtonSelect("store")} className="signueach"> */}
          <div className="signueach1">
            <div>
              <MdStoreMallDirectory />
            </div>
            <div>Sign Up as A Store Owner</div>
            <div>{selectedButton === "store" && <IoIosCheckmarkCircle />}</div>
          </div>
        </Link>
        <Link onClick={() => handleButtonSelect("farm")} className="signueach">
          <div className="signueach1">
            <div>
              <MdAgriculture />
            </div>
            <div>Sign Up as A Farmer</div>
            <div>{selectedButton === "farm" && <IoIosCheckmarkCircle />}</div>
          </div>
        </Link>
        {/* <Link
          onClick={() => handleButtonSelect("Logistics")}
          className="signueach"
        > */}
        <Link
          onClick ={notify}
          className="signueach"
        >
          <div className="signueach1">
            <div>
              <AiOutlineCar />
            </div>
            <div>Sign Up as A Logistics</div>
            <div>
              {selectedButton === "Logistics" && <IoIosCheckmarkCircle />}
            </div>
          </div>
        </Link>
        <div className="already">
          Already have a FarmyApp account?
          <span> </span>
          <Link to="/signin" className="signlink">
            Sign In
          </Link>
        </div>
        {/* </div> */}
      </div>
      <div className="signufform">
        <img src={loho} alt="FarmyApp logo" className="lohosm" />
        <div>Welcome to FarmyApp</div>
        <div>
          <div className="signtext">Sign up as</div>
          <div className="targets">
            <div className="signutargetm">
              <Link
                onClick={() => handleButtonSelect("customer")}
                className="signueachm"
              >
                <div
                  className={`toggle-button ${
                    selectedButton === "customer"
                      ? "signueach1ms"
                      : "signueach1m"
                  }`}
                >
                  <div className="targetIcons">
                    <BsPerson />
                  </div>
                  <div className="targetText">
                    <div>Buyer</div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={() => handleButtonSelect("store")}
                className="signueachm"
              >
                <div
                  className={`toggle-button ${
                    selectedButton === "store" ? "signueach1ms" : "signueach1m"
                  }`}
                >
                  <div className="targetIcons">
                    <MdStoreMallDirectory />
                  </div>
                  <div className="targetText">
                    <div> Store Owner</div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={() => handleButtonSelect("farm")}
                className="signueachm"
              >
                <div
                  className={`toggle-button ${
                    selectedButton === "farm" ? "signueach1ms" : "signueach1m"
                  }`}
                >
                  <div className="targetIcons">
                    <MdAgriculture />
                  </div>
                  <div className="targetText">
                    <div>Farmer</div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={() => handleButtonSelect("Logistics")}
                className="signueachm"
              >
                <div
                  className={`toggle-button ${
                    selectedButton === "Logistics"
                      ? "signueach1ms"
                      : "signueach1m"
                  }`}
                >
                  <div className="targetIcons">
                    <AiOutlineCar />
                  </div>
                  <div className="targetText">
                    <div>Logist ics</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {selectedButton === "customer" && <SignUCForm />}
        {selectedButton === "store" && <SignUSForm />}
        {selectedButton === "farm" && <SignUFForm />}
        {selectedButton === "Logistics" && <SignULForm />}
      </div>
      {/* <SignUTargets/> */}
      {/* <SignUFForm /> */}
    </div>
  );
}
