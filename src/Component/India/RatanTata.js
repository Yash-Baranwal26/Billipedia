import React from "react";
import Header from "../Header";

export default function RatanTata() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/Ratan_Tata.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About Ratan Tata
            </h2>
            <p>
              Ratan Naval Tata (born 28 December 1937) is an Indian
              industrialist, philanthropist and former chairman of Tata Sons. He
              was a chairman of the Tata Group from 1990 to 2012, and interim
              chairman from October 2016 through February 2017. He continues to
              head its charitable trusts.[2][3] In 2008, he received the Padma
              Vibhushan, the second highest civilian honour in India, after
              receiving the Padma Bhushan, the third highest civilian honour in
              2000.[4]
              <br />
              <br />
              He is the son of Naval Tata, who was adopted by Ratanji Tata, son
              of Jamsetji Tata, the founder of the Tata Group. He graduated from
              the Cornell University College of Architecture with a bachelor's
              degree in architecture.[5] He joined Tata in 1961, where he worked
              on the shop floor of Tata Steel. He later succeeded J. R. D. Tata
              as chairman of Tata Sons upon the latter's retirement in 1991.
              Under his tenure the Tata Group acquired Tetley, Jaguar Land
              Rover, and Corus, in an attempt to turn Tata from a largely
              India-centric group into a global business. <br />
              <br />
              Ratan Tata is also a prolific investor and has made numerous
              investments in several startups.Tata has invested in over 30
              start-ups till date, most from his personal capacity and some via
              his investment company.[6][7]
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about Ratan Tata</h5>
            <textarea
              rows={5}
              cols={50}
              className="bg-dark text-light rounded"
              placeholder="Write Something"
            >
              {" "}
            </textarea>
            <br />
            <button className="rounded btn btn-success mt-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
