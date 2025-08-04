import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p class="colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p class="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p class="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p class="imp1">3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p class="imp1">4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p class="imp1">0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p class="imp1">0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p class="imp1">0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p class="imp1">0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p class="imp1">0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p class="imp1">0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p class="imp1">0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
