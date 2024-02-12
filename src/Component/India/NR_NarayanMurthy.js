import React from "react";
import Header from "../Header";

export default function NR_NarayanMurthy() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/NR_narayanMurty.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About N. R. Narayana Murthy
            </h2>
            <p>
              Nagavara Ramarao Narayana Murthy (born 20 August 1946) is an
              Indian billionaire businessman. He is one of the seven co-founders
              of Infosys, and has previously served as the chairman, chief
              executive officer (CEO), president, and chief mentor of the
              company before retiring and taking the title chairman
              emeritus. As of April 2023, his net worth was estimated
              to be $4.1 billion.
              <br />
              <br />
              Murthy was born and raised in Shidlaghatta, Karnataka. Before
              starting Infosys, Murthy worked at the Indian Institute of
              Management Ahmedabad as chief systems programmer, and Patni
              Computer Systems in Pune, Maharashtra. He started Infosys in 1981
              and was the CEO from 1981 to 2002, as well as the chairman from
              2002 to 2011.
              <br />
              <br />
              Murthy has been listed among the 12 greatest entrepreneurs of our
              time by Fortune magazine.[13] He has been described as the "father
              of the Indian IT sector" by Time magazine and CNBC for his
              contribution to outsourcing in India
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about N. R. Narayana Murthy</h5>
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
