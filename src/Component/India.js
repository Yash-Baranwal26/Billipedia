import React, { useState } from 'react'
import Header from './Header';
import { Outlet,Link } from 'react-router-dom';

export default function India() {
  // const gautamAdani=()=>{
    
  // }

  const [myStyle,setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const [btntext, setBtntext] = useState("Enable Dark Mode")

  const toggleStyle =()=>{
    if(myStyle.color == 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtntext("Enable Dark Mode")
    }
    else{
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtntext("Enable Light Mode")
    }
  }
  return (
    <>
    <Header/>
    <div style={myStyle}>
      <div className='container-fluid p-3'>
      <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
      </div>
      <>
  <div className="container-fluid text-uppercase display-3 pt-5 text-center">
    <span>billionaires of india</span>
  </div>
  <br />
  <br />
  <br />
  <div className="container-fluid  border">
    <div className="row border">

    
     
     <div className="col-md-4 mt-2 mb-3 " >
     <Link to={"/gautam_Adani"} className='text-decoration-none'><div className="card bg-dark select text-white" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Gautam_Adani.jpg"
            alt="Card image"
            width="10px"
            height="300px"
          />
          <div className="card-body  ">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
              Gautam Adani
            </h4>
            <p className="card-text">
              Mr Gautam Adani is the Founder and Chairman of the Adani Group,
              which ranks among the top 3 industrial conglomerates in India.
            </p>
            <hr />
            <div className="row ">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>138.1 billion
              </div>
            </div>
            
          </div>
        </div></Link>
      </div>
      {/* Gautam Adani */}
    

      <div className="col-md-4 mt-2 mb-3 text-decoration-none">
        <Link to={"/mukeshAmbani"} className='text-decoration-none'><div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Mukesh_Ambani.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body text-light text-decoration-none">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
            Mukesh Ambani
            </h4>
            <p className="card-text">
              Mr Gautam Adani is the Founder and Chairman of the Adani Group,
              which ranks among the top 3 industrial conglomerates in India.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>138.1 billion
              </div>
            </div>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
          </div>
        </div></Link>
      </div>{/*Mukesh Ambani*/}
      {/*col-4*/}

      <div className="col-md-4 mt-2 mb-3">
        <div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Ratan_Tata.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body text-light">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
              Gautam Adani
            </h4>
            <p className="card-text">
              Mr Gautam Adani is the Founder and Chairman of the Adani Group,
              which ranks among the top 3 industrial conglomerates in India.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>138.1 billion
              </div>
            </div>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
          </div>
        </div>
      </div>{/*Ratan tata*/}
      {/*col-4*/}

    </div>
    {/*row*/}

    <div className="row">
      <div className="col-md-4 mt-2 mb-3">
        <div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/NR_narayanMurty.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body text-light">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
              Gautam Adani
            </h4>
            <p className="card-text">
              Mr Gautam Adani is the Founder and Chairman of the Adani Group,
              which ranks among the top 3 industrial conglomerates in India.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>138.1 billion
              </div>
            </div>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
          </div>
        </div>
      </div>{/*NR Narayan Murti*/}
      {/*col-4*/}

      <div className="col-md-4 mt-2 mb-3">
        <div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Azim-Premji.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body text-light">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
              Gautam Adani
            </h4>
            <p className="card-text">
              Mr Gautam Adani is the Founder and Chairman of the Adani Group,
              which ranks among the top 3 industrial conglomerates in India.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>138.1 billion
              </div>
            </div>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
          </div>
        </div>
      </div>{/*Azim Premji*/}
      {/*col-4*/}

      <div className="col-md-4 mt-2 mb-3">
        <div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Gautam_Adani.jpg"
            alt="Card image"
            width="200px"
            height="300px"
          />
          <div className="card-body text-light">
            <h4 className="card-title ul text-decoration-underline font-weight-bold">
              Gautam Adani
            </h4>
            <p className="card-text">
              Mr Gautam Adani is the Founder and Chairman of the Adani Group,
              which ranks among the top 3 industrial conglomerates in India.
            </p>
            <hr />
            <div className="row">
              <div className="col-6 text-left">Net Worth:-</div>
              <div className="col-6 text-right">
                <span className="text-danger">$</span>138.1 billion
              </div>
            </div>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
          </div>
        </div>
      </div>{/*Gautam Adani*/}
      {/*col-4*/}

    </div>
    {/*row*/}

  </div>
</>

    </div>
    </>
  )
}
