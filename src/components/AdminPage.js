import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllPosts, deletePost } from "../actions/post";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  componentWillReceiveProps(props) {
    this.setState({
      posts: props.posts
    });
  }

  deletePost(postId) {
    this.props.deletePost(postId);
  }

  render() {
    let posts = [];
    if (this.state.posts !== undefined) posts = this.state.posts;
    return (
      <div>
        <div id="wrapper" className="fade-in">
          <header id="header"></header>

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
                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = "/update/" + post._id;
                      }}
                    >
                      <i className="fa fa-pencil"></i> Edit Post
                    </button>
                    <button
                      type="button"
                      onClick={this.deletePost.bind(this, post._id)}
                    >
                      <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
                      Post
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

AdminPage.propTypes = {
  posts: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  getAllPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  error: state.error
});

export default connect(mapStateToProps, { getAllPosts, deletePost })(AdminPage);
