import React, { useState } from 'react'
import Header from '../Header';
import { Outlet,Link } from 'react-router-dom';

export default function United_Kingdom() {

  return (
    <div className='bg-black'>
    <Header/>
  <div className="container-fluid text-uppercase display-3 pt-5 text-center text-light">
    <span>billionaires of United Kingdom</span>
  </div>
  <br />
  <br />
  <br />
  <div className="container-fluid  ">
    <div className="row ">

    
     
     <div className="col-md-4 mt-2 mb-3 " >
     <Link to={"/jimRatcliffe"} className='text-decoration-none'><div className="card bg-dark select text-white" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Jim-Ratcliffe.jpg"
            alt="Card image"
            width="10px"
            height="300px"
          />
          <div className="card-body  ">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
            Jim Ratcliffe
            </h4>
            <p className="card-text">
            Ratcliffe was born in Failsworth, Lancashire (now in Greater Manchester), the 
            son of a father who started out as a joiner, and a mother who was an accounts 
            office worker. 
            </p>
            <hr />
            <div className="row ">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>63 billion
              </div>
            </div>
            
          </div>
        </div></Link>
      </div>
      {/* Jim Ratcliffe */}
    

      <div className="col-md-4 mt-2 mb-3 text-decoration-none">
        <Link to={"/laxmiMittal"} className='text-decoration-none'><div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Lakshmi-Mittal.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body text-light text-decoration-none">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
            Lakshmi Mittal
            </h4>
            <p className="card-text">
            Lakshmi Niwas Mittal (born 15 June 1950) is an Indian steel magnate, based in the 
            United Kingdom. He is the Executive Chairman of ArcelorMittal, the world's second 
            largest steelmaking company.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>45 billion
              </div>
            </div>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
          </div>
        </div></Link>
      </div>{/*Lakshmi Mittal*/}
      {/*col-4*/}

    </div>
    {/*row*/}

 

  </div>
</div>

    
  )
}
