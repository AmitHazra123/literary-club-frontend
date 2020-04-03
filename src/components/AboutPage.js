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
                  <div>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      The Literary Club is a place where students can
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      meet to read and write. The Literary Club has
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      been an ongoing and active club for several years.
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      It is based upon using the creativity skills it takes
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      to be a writer. Club members meet to discuss books
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      and the craft of writing. Some members choose
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      to share their writings during the meetings,{" "}
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      {" "}
                      therefore starting many discussions. At times we
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      critique each other's work and offer suggestions.
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      {" "}
                      The Literary Club is more than just a club for
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      reading and writing; it is also a place where students
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      can come to share their insights on politics, life,
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      {" "}
                      and school issues. We're like a family, sharing
                    </p>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        width: "fit-content"
                      }}
                    >
                      {" "}
                      frustrations, trials, and happy moments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="spotlight alt">
                <div className="image flush">
                  <img src={require("../img/pic07.jpg")} alt="" />
                </div>
                <div className="inner">
                  <h3>Our History</h3>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    The Literary Club at Heritage Institute of
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    Technology was >established on. Since then
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    we have constantly evolved as a family.
                  </p>
                </div>
              </div>
              <div className="spotlight">
                <div className="image flush">
                  <img src={require("../img/pic08.jpg")} alt="" />
                </div>
                <div className="inner">
                  <h3>What Do We Do?</h3>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    The Literary club is committed to tap effective
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    communication talent among students; club is
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    poised to enable the talents with cutting edge.
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    To develop and hone the literary and hone the
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    and hone the literary skills of the students,
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    the club inspires students to develop a taste
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    for literature and also works in the direction
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    of expanding their horizon of spoken and written
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    language. Its intricate agenda includes a variety
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    of activities aimed at building up the confidence
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    and grooming the talents of students in facing
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    various interpersonal challenges and competitions.
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    We welcome anyone and everyone with a passion
                  </p>{" "}
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    for writing, reading, and creativity.We READ, and
                  </p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      width: "fit-content"
                    }}
                  >
                    {" "}
                    creativity.We READ, WRITE & REALIZE.
                  </p>
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
