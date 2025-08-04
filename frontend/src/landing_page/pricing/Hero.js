import React from 'react';

function Hero(){
    return (
      <div className="container ">
        <div className="row p-5 mt-5 mb-5 border-bottom  text-center fs-5">
          <h2>Charges</h2>
          <h3 className="text-muted mt-2 fs-5">
            List of all charges and taxes
          </h3>
        </div>
        <div className="row p-5 mt-2 text-center">
          
          <div className="col-4 p-5  ">
            <img
              src="media/images/pricingEquity.svg"
              style={{ width: "78%" }}
            />
            <h1 className="fs-2 mt-3 mb-4">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE),
              <br /> are absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/images/intradayTrades.svg"
              style={{ width: "78%" }}
            />
            <h1 className="fs-3 mt-3 mb-4">Intraday and F&O trades</h1>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="media/images/pricingMF.svg" style={{ width: "78%" }} />
            <h1 className="fs-3 mt-3 mb-4">Free direct MF</h1>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
          
        </div>
      </div>
    );
}

export default Hero;
