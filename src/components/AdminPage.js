import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllPosts, deletePost } from "../actions/post";

class AdminPage extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  componentWillReceiveProps(props) {
    console.log(props.posts);
  }

  render() {
    return <div>Admin Page</div>;
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
