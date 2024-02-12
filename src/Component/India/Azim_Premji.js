import React from "react";
import Header from "../Header";

export default function Azim_Premji() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/Azim-Premji.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About Azim Premji
            </h2>
            <p>
              Azim Hashim Premji (born 24 July 1945) is an Indian businessman
              and philanthropist, who was the chairman of Wipro Limited. Premji
              remains a non-executive member of the board and founder chairman.
              He is informally known as the Czar of the Indian IT Industry. He
              was responsible for guiding Wipro through four decades of
              diversification and growth, to finally emerge as one of the global
              leaders in the software industry.
              <br />
              <br />
              For years, he has been regularly listed one among The 500 Most
              Influential Muslims. He also serves as the Chancellor of Azim
              Premji University, Bangalore. Premji was awarded Padma Vibhushan,
              India's second highest civilian award, by the Government of India.
              <br />
              <br />
              According to the Forbes and Bloomberg Billionaires Index, Premji's
              net worth is estimated at $9.3 billion and $25 billion,
              respectively, as of February 2023. In 2013, he agreed to give away
              at least half of his wealth by signing the Giving Pledge. Premji
              started with a $2.2 billion donation to the Azim Premji
              Foundation, focused on education in India.
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about Azim Premji</h5>
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
