import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updatePost, getPost } from "../actions/post";

class UpdatePost extends Component {
  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.getPost(postId);
  }

  componentWillReceiveProps(props) {
    console.log(props.post);
  }

  render() {
    return <div>Update Post</div>;
  }
}

UpdatePost.propTypes = {
  post: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  updatePost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.postReducer.post,
  error: state.error
});

export default connect(mapStateToProps, { updatePost, getPost })(UpdatePost);
