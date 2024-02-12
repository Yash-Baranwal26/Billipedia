import React, { useState } from 'react'
import Header from '../Header';
import { Outlet,Link } from 'react-router-dom';

export default function America() {

  return (
    <div className='bg-black'>
    <Header/>
  <div className="container-fluid text-uppercase display-3 pt-5 text-center text-light">
    <span>billionaires of America</span>
  </div>
  <br />
  <br />
  <br />
  <div className="container-fluid  ">
    <div className="row ">

    
     
     <div className="col-md-4 mt-2 mb-3 " >
     <Link to={"/elonMusk"} className='text-decoration-none'><div className="card bg-dark select text-white" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Elon-Musk.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body  ">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
              Elon Musk
            </h4>
            <p className="card-text">
            Elon Reeve Musk (born June 28, 1971) is a business magnate and investor. Musk is 
            the founder, chairman, CEO and chief of SpaceX and former chairman of Tesla
            </p>
            <hr />
            <div className="row ">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>232 billion
              </div>
            </div>
            
          </div>
        </div></Link>
      </div>
      {/* Elon Musk */}
    

      <div className="col-md-4 mt-2 mb-3 text-decoration-none">
        <Link to={"/jeffBezos"} className='text-decoration-none'><div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Jeff-Bezos.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body text-light text-decoration-none">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
            Jeff Bezos
            </h4>
            <p className="card-text">
            Jeffrey Preston Bezos (born January 12, 1964) is an American businessman who is the 
            founder, executive chairman, and former president and CEO of Amazon.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>160.8 billion
              </div>
            </div>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
          </div>
        </div></Link>
      </div>{/*Jeff Bezos*/}
      {/*col-4*/}

      <div className="col-md-4 mt-2 mb-3">
      <Link to={"/warrenBuffet"} className='text-decoration-none'><div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Warren-Buffet.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body text-light">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
              Warren Buffet
            </h4>
            <p className="card-text">
            Warren Edward Buffett (born August 30, 1930) is an American 
            business magnate, investor, and philanthropist. He is currently the chairman and 
            CEO of Berkshire Hathaway.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>117 billion
              </div>
            </div>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
          </div>
        </div></Link>
      </div>{/*Warren Buffet*/}
      {/*col-4*/}

    </div>
    {/*row*/}

 

  </div>
</div>

    
  )
}
