import React from "react";
import Header from "../Header";

export default function Jim_Ratcliffe() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/Jim-Ratcliffe.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About Jim Ratcliffe
            </h2>
            <p>
              Sir James Arthur Ratcliffe FIChemE (born 18 October 1952) is a
              British billionaire, chemical engineer and businessman. Ratcliffe
              is the chairman and chief executive officer (CEO) of the INEOS
              chemicals group, which he founded in 1998. The company is
              estimated to have had a turnover of $65 billion in 2021. He
              does not have a high public profile, and was once described by The
              Sunday Times as "publicity shy".
              <br />
              <br />
              Ratcliffe was born in Failsworth, Lancashire (now in Greater
              Manchester), the son of a father who started out as a joiner,
              and a mother who was an accounts office worker. He was raised in a
              council house in the town until the age of 10, when the family
              moved to East Yorkshire. He was educated at Beverley Grammar
              School. He studied chemical engineering at Birmingham
              University, gaining a BSc, and later gained an MBA from London
              Business School in 1980. Ratcliffe's father eventually ran a
              factory making laboratory furniture.
              <br />
              <br />
              Ratcliffe's first job was with oil giant Esso, but he decided to
              broaden his skills into finance by studying management accounting,
              studying for an MBA at London Business School from 1978 to 1980
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about Jim Ratcliffe</h5>
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
