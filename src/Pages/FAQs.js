import React from "react";

import "../styles/tanc.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function TAndC() {
  const navigate = useNavigate();
  return (
    <div className="faqbody">
      <div className="goBack">
        <button onClick={() => navigate(-1)} className="goBack">
          <BiArrowBack /> Go back
        </button>
      </div>
      <div className="faqContent">
        <h1 className="header1">Frequently Asked Questions</h1>
        <div className="eachFaq">
          <h4>What is Farmyapp all about?</h4>
          <p>
            Farmyapp is a multivendor ecommerce site, where buyers buy from
            stores of there choice and have whatever the purchased delivered to
            within the shortest possible time. more like the shopppers shop.
          </p>
        </div>
        <div className="eachFaq">
          <h4>How can I place an order?</h4>
          <p></p>
        </div>
        <div className="eachFaq">
          <h4>How do I make payment?</h4>
          <p></p>
        </div>
        <div className="eachFaq">
          <h4>Can I pay on delivery?</h4>
          <p></p>
        </div>
        <div className="eachFaq">
          <h4>Can I return an Item I bought from Farmyapp?</h4>
          <p></p>
        </div>
        <div className="eachFaq">
          <h4>How long does order delivery take?</h4>
          <p></p>
        </div>
        <div className="eachFaq">
          <h4>Does Farmyapp have an office?</h4>
          <p></p>
        </div>
        <div className="eachFaq">
          <h4>
            How much is it to put an agricultural product for sale on FarmyApp?
          </h4>
          <p>Putting your product for sale on FarmyApp is Free</p>
        </div>
        <div className="eachFaq">
          <h4>How do I get paid when my product is purchased?</h4>
          <p>
            Immediately the client confirms delivery of the product, you can
            withdraw your money from your FarmyApp wallet to any of your bank
            accounts.
          </p>
        </div>
        <div className="eachFaq">
          <h4>Is their any transaction charges on FarmyApp?</h4>
          <p>Yes, there is a 3% transaction charge on every transaction.</p>
        </div>
        <div className="eachFaq">
          <h4>
            How does the selling of agricultural product work on FarmyApp?
          </h4>
          <p>
            Farmers post their products for sal at least 2 weeks before they are
            ready for sale and in that time, buyers show interest and pay for
            they products with the option of picking it up themselves or have a
            logistics company deliver it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TAndC;
