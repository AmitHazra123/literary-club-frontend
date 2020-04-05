import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getPost } from "../actions/post";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.getPost(postId);
  }

  componentWillReceiveProps(props) {
    this.setState({
      post: props.post
    });
  }

  render() {
    const { post } = this.state;
    return (
      <div id="main">
        <article className="post featured">
          <header className="major">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={post.pdfUrl}>Download PDF Here</a>
          </header>
          <a href="#" className="image main">
            <img src={post.imageUrl} alt="" />
          </a>
        </article>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.postReducer.post
});

export default connect(mapStateToProps, { getPost })(Post);
