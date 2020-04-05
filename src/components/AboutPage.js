import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <br />
        <section id="main">
          <div className="inner">
            <section id="two" className="wrapper style2">
              <header>
                <h2>Photo Gallery</h2>
                <p>Some Artistic Creations are follows</p>
              </header>
              <div className="content">
                <div className="gallery">
                  <div>
                    <div className="image fit flush">
                      <a href="images/pic03.jpg">
                        <img src={require("../img/pic03.jpg")} alt="" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="images/pic01.jpg">
                        <img src={require("../img/pic01.jpg")} alt="" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="images/pic04.jpg">
                        <img src={require("../img/pic04.jpg")} alt="" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="images/pic05.jpg">
                        <img src={require("../img/pic05.jpg")} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="three" className="wrapper">
              <div className="spotlight">
                <div className="image flush">
                  <img src={require("../img/pic06.jpg")} alt="" />
                </div>
                <div className="inner">
                  <h3>Who Are We?</h3>
                  <p>The Literary Club is a place where students can meet to read and write. The Literary Club has been an ongoing and active club for several years.
									It is based upon using the creativity skills it takes to be a writer. Club members meet to discuss books and the craft of writing. Some members choose to share their writings during the meetings, therefore starting many discussions. At times we critique each other's work and offer suggestions.The Literary Club is more than just a club for reading and writing; it is also a place where students can come to share their insights on politics, life, and school issues. We're like a family, sharing frustrations, trials, and happy moments.</p>
                </div>
              </div>
              <div className="spotlight alt">
                <div className="image flush">
                  <img src={require("../img/pic07.jpg")} alt="" />
                </div>
                <div className="inner">
                <h3>Our History</h3>
								<p>The Literary Club at Heritage Institute of Technology was established on . Since then we have constantly evolved as a family.</p>
                </div>
              </div>
              <div className="spotlight">
                <div className="image flush">
                  <img src={require("../img/pic08.jpg")} alt="" />
                </div>
                <div className="inner">
                <h3>What Do We Do?</h3>
								<p>The Literary club is committed to tap effective communication talent among students; club is poised to enable the talents with cutting edge. To develop and hone the literary skills of the students, the club inspires students to develop a taste for literature and also works in the direction of expanding their horizon of spoken and written language. Its intricate agenda includes a variety of activities aimed at building up the confidence and grooming the talents of students in facing various interpersonal challenges and competitions.
								We welcome anyone and everyone with a passion for writing, reading, and creativity.We READ, WRITE & REALIZE.</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <footer id="footer">
          <div className="container">
            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/heritageliteraryclub/"
                  // className="icon fa-facebook"
                >
                  <span className="label">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/heritageliteraryclub/"
                  // className="icon fa-instagram"
                >
                  <span className="label">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="homelink">
            <a href="/">Return</a>
          </div>
        </footer>
      </div>
    );
  }
}
