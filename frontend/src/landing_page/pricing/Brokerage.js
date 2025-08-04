import React from "react";

function Brokerage() {
  return (
    <div className="container ">
      <div className="row p-5 mt-2 text-center border-top">
        <div className="col-9 p-5 ">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}
            className="text-muted "
          >
            <li>
              Call & Trade and RMS auto squareoff: Additional charges of Rs 50 +
            </li>
            <li>
              GST per order. Digital contract notes will be sent via e-mail.
            </li>
            <li>
              Physical copies of contract notes, if required , shall be charged
              $20 per conteract note. courier changes apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.50% or Rs 100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or Rs 200 per executed order for
              equity (whicheven is lower).
            </li>
            <li>
              If the account is in dabit balance, any order placed will be
              changed Rs 40 per executed order instead of Rs 20 per executed
              order.
            </li>
          </ul>
        </div>
        <div className="col-3 p-5">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5"> List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
