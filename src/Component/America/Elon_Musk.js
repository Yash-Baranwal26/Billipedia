import React from "react";
import Header from "../Header";

export default function Elon_Musk() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/Elon-Musk.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About Elon Musk
            </h2>
            <p>
              Elon Reeve Musk (born June 28, 1971) is a business magnate and
              investor. Musk is the founder, chairman, CEO and chief technology
              officer of SpaceX; angel investor, CEO, product architect and
              former chairman of Tesla, Inc.; owner, chairman and CTO of X
              Corp.; founder of the Boring Company; co-founder of Neuralink and
              OpenAI; and president of the Musk Foundation
              <br />
              <br />
              He is the wealthiest person in the world, with an estimated net
              worth of US$232 billion as of September 2023, according to the
              Bloomberg Billionaires Index, and $253 billion according to
              Forbes, primarily from his ownership stakes in both Tesla and
              SpaceX.
              <br />
              <br />
              AMusk was born in Pretoria, South Africa, and briefly attended the
              University of Pretoria before immigrating to Canada at age 18,
              acquiring citizenship through his Canadian-born mother. Two years
              later, he matriculated at Queen's University in Kingston, Ontario.
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about Elon Musk</h5>
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
