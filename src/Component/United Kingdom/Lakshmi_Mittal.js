import React from "react";
import Header from "../Header";

export default function Lakshmi_Mittal() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/Lakshmi-Mittal.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About Lakshmi Mittal
            </h2>
            <p>
              Lakshmi Niwas Mittal (born 15 June 1950) is an Indian steel
              magnate, based in the United Kingdom. He is the Executive
              Chairman of ArcelorMittal, the world's second largest steelmaking
              company, as well as chairman of stainless steel manufacturer
              Aperam. Mittal owns 38% of ArcelorMittal and holds a 3% stake
              in EFL Championship side Queens Park Rangers.
              <br />
              <br />
              In 2005, Forbes ranked Mittal as the third-richest person in the
              world, making him the first Indian citizen to be ranked in the top
              ten in the publication's annual list of the world's richest
              people. He was ranked the sixth-richest person in the
              world by Forbes in 2011, but dropped to 82nd place in March 2015.
              <br />
              <br />
              Mittal has been a member of the board of directors of Goldman
              Sachs since 2008. He sits on the World Steel Association's
              executive committee, and is a member of the Global CEO Council
              of the Chinese People's Association for Friendship with Foreign
              Countries, the Foreign Investment Council in Kazakhstan.
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about Lakshmi Mittal</h5>
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
