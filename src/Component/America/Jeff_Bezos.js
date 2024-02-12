import React from "react";
import Header from "../Header";

export default function Jeff_Bezos() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/Jeff-Bezos.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About Jeff Bezos
            </h2>
            <p>
              Jeffrey Preston Bezos (born January 12, 1964) is an American
              businessman who is the founder, executive chairman, and former
              president and CEO of Amazon, the world's largest e-commerce and
              cloud computing company. With a net worth of US$160 billion as of
              September 2023, Bezos is the third-wealthiest person in the world
              and was the wealthiest from 2017 to 2021.
              <br />
              <br />
              Born in Albuquerque and raised in Houston and Miami, Bezos
              graduated from Princeton University in 1986 with degrees in
              electrical engineering and computer science. He worked on Wall
              Street in a variety of related fields from 1986 to early 1994.
              Bezos founded Amazon in mid 1994 on a road trip from New York City
              to Seattle. The company began as an online bookstore and has since
              expanded to a variety of other e-commerce products and services,
              including video and audio streaming, cloud computing, and
              artificial intelligence.
              <br />
              <br />
              Bezos founded the aerospace manufacturer and sub-orbital
              spaceflight services company Blue Origin in 2000. Blue Origin's
              New Shepard vehicle reached space in 2015 and afterwards
              successfully landed back on Earth; he flew into space on Blue
              Origin NS-16 in 2021.
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about Jeff Bezos</h5>
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
