import React, { Component } from "react";

export default class TeamProfile extends Component {
  render() {
    return (
      <div>
        <div className="resize">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src={require("../amit.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Amit Hazra</h5>
              <p class="card-text">Full Stack WebDeveloper with 1 year experience, work in frameworks like MongoDB, Express, React, and Node.</p>
            </div>
            <div className="card-footer">
            <a
                href="https://m.facebook.com/sattyapriya.right"
                className="fa fa-facebook"
              ></a>
              {/* <!-- <a href="#" className="fa fa-instagram"></a> --> */}
              <a
                href="https://www.linkedin.com/mwlite/in/amit-hazra-762227144"
                className="fa fa-linkedin"
              ></a>{" "}
              {/* <!-- <a href="#" className="fa fa-twitter"></a> --> */}
              <a href="http://amithazraportfolio.s3-website.ap-south-1.amazonaws.com/" className="btn btn-primary" target="blank">
                Connect
              </a>
            </div>
          </div>
        </div>
        
        <div className="resize">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src={require("../subhasis.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Subhasis Das</h5>
              <p class="card-text">Full stack web developer and cloud practitioner with 2 years of experience in the MERN stack and AWS. <br/></p>
            </div>
            <div className="card-footer">
            <center>
            <a href="https://subhasisdas.me/" className="btn btn-primary">
                Connect
              </a>
            </center>
            </div>
          </div>
        </div>

        <div className="resize">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src={require("../mamtu.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mamtu Raja</h5>
              <p class="card-text">Front end WebDeveloper , one year experience in Python,Competitive programmer.<br/><br/></p>
            </div>
            <div className="card-footer">
            <a
                href="https://www.facebook.com/Dashing.mamtu"
                className="fa fa-facebook"
              ></a>
              <a
                href="https://www.instagram.com/rajamamtu/"
                className="fa fa-instagram"
              ></a>
              <a
                href="https://www.linkedin.com/in/mamtu-raja-54657416a/"
                className="fa fa-linkedin"
              ></a>
              <a
                href="https://twitter.com/iam_mamtu"
                className="fa fa-twitter"
              ></a>
            </div>
          </div>
        </div>

        <div className="resize">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src={require("../suigo.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Subhashis Batobyal</h5>
              <p class="card-text">Web Developer,Designer with expertise in designing and developing
               User interfaces.<br/><br/></p>
            </div>
            <div className="card-footer">
            <a
                href="https://www.facebook.com/subhashis.batobyal.9"
                className="fa fa-facebook"
              ></a>
              <a
                href="https://www.instagram.com/_silver_slayer_/"
                className="fa fa-instagram"
              ></a>
              <a
                href="https://www.linkedin.com/in/subhashis-batobyal-3282721a6/"
                className="fa fa-linkedin"
              ></a>
              <a
                href="https://twitter.com/SubhashisBatob1"
                className="fa fa-twitter"
              ></a>
            </div>
          </div>
        </div>

        <div className="resize">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src={require("../anurag.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Anurag Nayak</h5>
              <p class="card-text">Competitive coder,ACM Hack-A-Day 2020 finalist(Top 10) and also a Java enthusiast.
              </p>
            </div>
            <div className="card-footer">
            <a
                href="https://www.instagram.com/anurag_nayak2020/"
                className="fa fa-instagram"
              ></a>
              <a
                href="https://www.linkedin.com/in/anurag-nayak-a93907198/"
                className="fa fa-linkedin"
              ></a>
              <a
                href="https://mobile.twitter.com/AnuragN25506607"
                className="fa fa-twitter"
              ></a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
