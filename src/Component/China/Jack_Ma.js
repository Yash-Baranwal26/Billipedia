import React from "react";
import Header from "../Header";

export default function Jack_Ma() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/Jack-Ma.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About Jack Ma
            </h2>
            <p>
              Jack Ma Yun (born 10 September 1964) is a Chinese business
              magnate, investor and philanthropist. He is the co-founder of
              Alibaba Group, a multinational technology conglomerate. In
              addition, Ma is also the co-founder of Yunfeng Capital, a Chinese
              private equity firm. As of June 2023, with a net worth of $34.5
              billion, Ma is the fourth-wealthiest person in China (after Zhong
              Shanshan, Zhang Yiming and Ma Huateng),
              <br />
              <br />
              Born in Hangzhou, Zhejiang, Ma earned a Bachelor of Arts degree
              with a major in English upon graduating from Hangzhou Normal
              University in 1988. He became an English lecturer and
              international trade lecturer at Hangzhou Dianzi University
              following graduation. Later taking an interest in the emergence of
              the internet business.
              <br />
              <br />
              In 2017, Ma was ranked second in the annual "World's 50 Greatest
              Leaders" list by Fortune. He has widely been considered as an
              informal global ambassador in Chinese business circles, and has
              continued to remain an influential figure in the Chinese business
              community and scene of startup companies.
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about Jack Ma</h5>
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
