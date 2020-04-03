import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllPosts, likePost } from "../actions/post";

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      like: true
    };
    this.likePost = this.likePost.bind(this);
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  componentWillReceiveProps(props) {
    this.setState({
      posts: props.posts
    });
  }

  likePost(postId) {
    this.setState(state => ({
      like: !state.like
    }));
    const post = {
      factor: this.state.like ? "+" : "-"
    };
    this.props.likePost(postId, post);
    window.location.reload();
  }

  render() {
    let posts = [];
    if (this.state.posts !== undefined) posts = this.state.posts;
    return (
      <div>
        <div id="wrapper" className="fade-in">
          <div id="intro">
            <h1>
              This is
              <br />
              Post Feed
            </h1>

            <ul className="actions">
              <li>
                <a href="/" className="button solid solo">
                  <i class="fa fa-arrow-down"></i>
                </a>
              </li>
            </ul>
          </div>

          <header id="header">
            <a href="index.html" className="logo">
              Feeds
            </a>
          </header>

          <nav id="nav">
            <ul className="links">
              <li className="active">
                <a href="feeed.html">POSTS</a>
              </li>
              <li>
                <a href="contact.html">CONTACT US</a>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a href="https://www.facebook.com/heritageliteraryclub/">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/heritageliteraryclub/">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </nav>

          <div id="main">
            <section className="posts">
              {posts.map(post => (
                <article>
                  <header>
                    <span className="date">{post.title}</span>
                    <h2>
                      <a href="/">{post.title}</a>
                    </h2>
                  </header>
                  <a href="/" className="image fit">
                    <img src={post.imageUrl} alt="" />
                  </a>
                  <p>{post.description}</p>
                  <ul className="actions special">
                    <li>
                      <a href={"/post/" + post._id} className="button">
                        View Post
                      </a>
                    </li>
                    <button
                      type="button"
                      className={"like-" + this.state.like}
                      onClick={this.likePost.bind(this, post._id)}
                    >
                      <i className="fa fa-thumbs-up"></i>  Like
                    </button>
                  </ul>
                </article>
              ))}{" "}
            </section>
          </div>

          <div id="homelink">
            <ul>
              <li>
                {" "}
                <a href="/">Return Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Feeds.propTypes = {
  posts: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  getAllPosts: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  error: state.error
});

export default connect(mapStateToProps, { getAllPosts, likePost })(Feeds);
