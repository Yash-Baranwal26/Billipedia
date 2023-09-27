import React from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import America from './America';
// import India from './India';

export default function Header() {
    const showMenu=()=>
    {
        document.getElementsByClassName("nav")[0].classList.toggle("show");
    }
    
  return (
    // <Router>
    <div>
      <div className="container-fluid bg-black text-white pb-3 pt-2 header b-red">
  <div className="row">
    <div className="col-md-3 display-5">
      <span className="text-danger">Billi</span>pedia
    </div>
    <div className="col-md-9">
      <div className="drp pt-3" onClick={showMenu}>
        ☰
      </div>
      <div className="nav justify-content-end topnav pt-2 text-uppercase">
        <nav className='nav'>
        <li>
          <a href="India.js" className="nav-link">
            India
          </a>
        </li>
        <li>
          <a href="America.js" className="nav-link">
            America
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            United Kingdom
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            China
          </a>
        </li>
        </nav>
        {/* <Switch>
          <Route path="/India">
            <India />
          </Route>
          <Route path="/America">
            <America />
          </Route>
        </Switch> */}
      </div>
    </div>
  </div>
</div>

    </div>
    /* </Router> */
  )
}


import React from 'react'

export default function India() {
  const gautamAdani=()=>{
    window.location.href = "GautamAdani.js";
  }
  return (
    <div className='bg-black'>
      <>
  <div className="container-fluid text-uppercase display-3 pt-5 text-center text-white">
    <span>billionaires of india</span>
  </div>
  <br />
  <br />
  <br />
  <div className="container-fluid">
    <div className="row">

      <div className="col-md-4 mt-2 mb-3" onClick={gautamAdani}>
        <div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Gautam_Adani.jpg"
            alt="Card image"
            width="10px"
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

      <div className="col-md-4 mt-2 mb-3">
        <div className="card bg-dark select" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="/Image/Mukesh_Ambani.jpg"
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
  )
}
