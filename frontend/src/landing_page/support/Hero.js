import React from 'react';

function Hero(){
    return (
      <div className="container-fluid " id="supportHero">
        <div className="p-3 " id="supportapper">
          <h4>Support Portal</h4>
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            Track Tickets
          </a>
        </div>
        <div className=" row p-5 m-3 ">
          <div className=" col-6 p-5 " id="supportHeroCol">
            <h2 classname="">
              Search for an answer or brower help topics to create a ticket
            </h2>

            <input placeholder="Eg. how to I activete F&o" className='mb-2 mt-3'/>
            <br />
            <a href="">Track account opening </a>
            <a />
            <a href="">Intraday segment activetion </a>
            <a />
            <a href="">Intraday margins </a>
            <a />
            <br />
            <a href="">Kite user manual </a>
            <a />
          </div>
          <div className=" col-6 p-5 ">
            <h1>Featured</h1>
            <ol id="featuredLi">
              <li>
                <a href="">Current Takeover's and Delisting - July 2025</a>
                <a />
              </li>
              <li >
                <a href="">Latest Intraday Leverages - MIS & CO </a>
                <a />
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
}

export default Hero;