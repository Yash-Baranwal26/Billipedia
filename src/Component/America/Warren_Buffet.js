import React from "react";
import Header from "../Header";

export default function Warren_Buffet() {
  return (
    <div className="bg-dark ">
      <Header />
      <div className="container">
        <div className="row  pt-4">
          <div className="col-md-4 pt-4">
            <img
              className="card-img-top border"
              src="/Image/Warren-Buffet.jpg"
              alt="Card image"
              width="20px"
              height="330px"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3">
              About Warren Buffet
            </h2>
            <p>
              Warren Edward Buffett (born August 30, 1930) is an American
              business magnate, investor, and philanthropist. He is currently
              the chairman and CEO of Berkshire Hathaway. As a result of his
              immense investment success, Buffett is one of the best-known
              fundamental investors in the world.
              <br />
              <br />
              Buffett was born in Omaha, Nebraska. The son of congressman and
              businessman Howard Buffett, he developed an interest in business
              and investing during his youth, eventually entering the Wharton
              School of the University of Pennsylvania in 1947 before
              transferring to and graduating from the University of Nebraska at
              19. He later went on to graduate from Columbia Business School,
              <br />
              <br />
              Since 1970, Buffett has presided as the chairman and largest
              shareholder of Berkshire Hathaway, one of America's foremost
              holding companies and world's leading corporate conglomerates. He
              has been referred to as the "Oracle" or "Sage" of Omaha by global
              media as a result of having accumulated a massive fortune derived
              from his business and investment success.
            </p>
            <hr />
            <h5 className=" mb-3">Write some thoughts about Warren Buffet</h5>
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
