import React from "react";

import "../styles/tanc.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function TAndC() {
  const navigate = useNavigate();
  return (
    <div className="tcbody">
      <div className="goBack">
        <button onClick={() => navigate(-1)} className="goBack">
          <BiArrowBack /> Go back
        </button>
      </div>
      <h1 className="header1">RETURNS AND REFUNDS POLICY</h1>
      <ol>
        <li>
          <h3>Introduction</h3>
        </li>
        <p>
          At FarmyApp, we prioritize our customers’ positive experiences every
          time they shop with us. Occasionally, though, we know situations might
          arise where you need to return items you have purchased. This Returns
          and Refunds Policy sets out our conditions for accepting returns and
          issuing refunds for items purchased on FarmyApp on behalf of our
          sellers. It also sets out when we will not accept returns or issue
          refunds.
        </p>
        <li>
          <h3>Return period and conditions for acceptance of returns</h3>
        </li>
        <p>
          Subject to the rules set out in this Returns; Refunds Policy, sellers
          on FarmyApp offer returns for most items within 5 days of delivery;
          and within 3 days of delivery for agricultural products only ( the
          returns period). We do not accept returns for any reason whatsoever
          after the returns period has lapsed. This does not affect your legal
          rights against the seller. You may return items purchased on FarmyApp
          within the return period for the reasons listed below.
        </p>
        <table className="tableContainer">
          <thead>
            <tr>
              <th>Reason for return</th>
              <th>Applicable product category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I changed my mind</td>
              <td>
                All product categories except:
                <ul>
                  <li>
                    product categories that cannot be returned for health and
                    hygiene reasons including intimates, underwear, nightwear,
                    beach and swimwear, briefs, facial skincare, fragrances and
                    hair care.
                  </li>
                  <li>perishable foods</li>
                  <li>agricultural products</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Size is correct but doesn't fit as expected</td>
              <td>Clothing, shoes and diapers only</td>
            </tr>
            <tr>
              <td>Item stopped working well after usage</td>
              <td>
                All product categories except:
                <ul>
                  <li>clothing</li>
                  <li>consumables</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Item received broken or defective</td>
              <td>All product categories</td>
            </tr>
            <tr>
              <td>Packaging was damaged</td>
              <td>All product categories</td>
            </tr>
            <tr>
              <td>Item received with missing parts or accessories</td>
              <td>All product categories</td>
            </tr>
            <tr>
              <td>Item received used or expired</td>
              <td>All product categories</td>
            </tr>
            <tr>
              <td>Item seems to be fake/unauthentic</td>
              <td>All product categories</td>
            </tr>
            <tr>
              <td>Wrong item/color/ size</td>
              <td>All product categories</td>
            </tr>
          </tbody>
        </table>
        <p>
          Items deemed returnable are items that are unworn, unused, and in the
          same condition you received them, with their original packaging and
          seal intact where applicable, unless the item became defective after
          delivery or became damaged or defective after reasonable use (in
          accordance with the manufacturer's guidelines where applicable) during
          the returns period.
        </p>
        <li>
          <h3>Items that cannot be returned</h3>
        </li>
        <p>
          At FarmyApp, customer safety is crucial to us. In light of this, we do
          not accept returns on certain product categories for health and
          hygiene reasons. You shall only be entitled to a return and refund in
          respect of these items if you received the wrong item, a damaged or
          defective item, or a fake or unauthentic item. You are not entitled to
          a refund or return on these product categories if you have changed
          your mind.
        </p>
        <p>
          We do not accept returns on customized items. We do not accept returns
          of goods made, configured, or inscribed to your specification (e.g.,
          personalized engravings, stamps, monograms, embroidery, embossing,
          etching, carving, or printing). The seller is not required to accept
          returns unless the items are damaged, defective upon arrival, or
          materially different from what was ordered.
        </p>
        <p>
          We do not accept returns of items that you have damaged after
          delivery. We do not accept returns of used or worn items unless the
          reason for return is that the item stopped working or became damaged
          or defective after reasonable use (in accordance with the
          manufacturer's guidelines, where applicable) during the return period.
          Items becoming defective after delivery are not applicable return
          reasons in respect of the following product categories: clothing and
          consumables. If an item is covered by a warranty and becomes damaged
          or defective during the warranty period, it is not covered by this
          Returns and Refunds Policy but by the seller's warranty. Warranty
          information is displayed on each product page.
        </p>
        <li>
          <h3>Packaging returns</h3>
        </li>
        <p>
          When returning an item for any reason, you must do so in the exact
          condition you received it from FarmyApp, with its original packaging
          and all tags and labels attached (e.g. shoes should be returned within
          the original shoe box; and cartons on items). Returned items are your
          responsibility until they reach us, so make sure they are packaged
          properly and can't get damaged on the way.
        </p>
        <p>
          Any item not pertaining to the item originally received from FarmApp
          must not be included in the returned item's packaging. All personal
          data pertaining to you and/or any third party that may be possibly
          present in an item must be entirely deleted and eliminated, and any
          account possibly latched to the item must be de-latched. FarmyApp will
          not be responsible for any items erroneously contained within a
          returned package or any data breach resulting from failure to
          eliminate personal data contained in a returned item.
        </p>
        <li>
          <h3>Refunds</h3>
        </li>
        <p>
          The refund of the purchase price of an item is initiated within the
          stated return period if we accept your return or if you order but do
          not receive an item.
        </p>
        <p>
          In the case of incorrect, defective, or damaged items, the full cost
          of delivery of the returned items will be refunded to your FarmyApp
          wallet once your return is processed.
        </p>
        <p>
          You will not receive any refund on delivery fees if the return is not
          the result of FarmyApp error or seller error (i.e. you changed your
          mind or the size does not fit as expected). The refund request form
          shall state which payment method(s) for receipt of refunds are
          available to you.
        </p>
        <li>
          <h3>Rejected return and refund requests and forfeiture</h3>
        </li>
        <p>
          All items returned are inspected to verify the return reasons
          provided. Failure to receive approval of the return request after
          inspection by FarmyApp attracts forfeiture of any refund of the
          purchase price or the delivery fees, and two (2) redelivery attempts
          will be made within three (3) business days.
        </p>
        <p>
          If both re-delivery attempts are unsuccessful, we will immediately
          notify you that we will hold the item for a further 30 days from the
          date of the initial notification. Our notification will include
          details about pick-up locations and opening hours.
        </p>
        <p>
          If an item is not collected within the required period, you shall
          forfeit the item, i.e., it becomes FarmyApp’s property, and FarmyApp
          may dispose of it in any manner that it determines appropriate, e.g.,
          by sale, charitable donation, recycling, or destruction.
        </p>
        <li><h3> No exchange</h3></li>
        <p>Please return your unwanted item and place a new order if you would prefer a different size or color. We don't offer exchanges.</p>
        <li><h3>Further information</h3></li>
        <p>For further information, please go to any of the following pages:</p>
        <ul>
            <li>
                <Link to= "/faqs" className='manuoptlog'>Frequently asked questions (FAQs)</Link>
            </li>
            <li>Warranty Policy</li>
        </ul>
        <p>If you need to contact us, please Contact us.</p>
      </ol>
      
    </div>
  );
}

export default TAndC;
