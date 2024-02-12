import React, { useState } from 'react'
import Header from '../Header';
import { Outlet,Link } from 'react-router-dom';

export default function China() {

  return (
    <div className='bg-black'>
    <Header/>
  <div className="container-fluid text-uppercase display-3 pt-5 text-center text-light">
    <span>billionaires of China</span>
  </div>
  <br />
  <br />
  <br />
  <div className="container-fluid  ">
    <div className="row ">

    
     
     <div className="col-md-4 mt-2 mb-3 " >
     <Link to={"/jackMa"} className='text-decoration-none'><div className="card bg-dark select text-white" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Jack-Ma.jpg"
            alt="Card image"
            width="10px"
            height="300px"
          />
          <div className="card-body  ">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
              Jack Ma
            </h4>
            <p className="card-text">
            Jack Ma Yun (born 10 September 1964) is a Chinese business magnate, investor and 
            philanthropist. He is the co-founder of Alibaba Group, a multinational technology 
            conglomerate. In addition, Ma is also the co-founder of Yunfeng Capital
            </p>
            <hr />
            <div className="row ">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>34.5 billion
              </div>
            </div>
            
          </div>
        </div></Link>
      </div>
      {/* Elon Musk */}

    </div>
    {/*row*/}

 

  </div>
</div>

    
  )
}
