import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <footer id="footer">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="3"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
          </section>
          <section className="split contact">
            <section className="alt">
              <h3>Address</h3>
              <p>
                Heritage Institute of Technoogy, Anadapur
                <br />
                kolkata-107
              </p>
            </section>
            <section>
              <h3>Phone</h3>
              <p>
                <a href="#">(000) 000-0000</a>
              </p>
            </section>
            <section>
              <h3>Email</h3>
              <p>
                <a href="#">abc@xyz.com</a>
              </p>
            </section>
            <section>
              <h3>Social</h3>
              <ul className="icons alt">
                <li>
                  <a
                    href="https://www.facebook.com/heritageliteraryclub/"
                    className="icon brands alt fa-facebook-f"
                  >
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/heritageliteraryclub/"
                    className="icon brands alt fa-instagram"
                  >
                    <span className="label">Instagram</span>
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </footer>

        <div id="homelink">
          <ul>
            <li>
              {" "}
              <a href="index.html">Return Home</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
