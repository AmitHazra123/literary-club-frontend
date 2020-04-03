import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { uploadPost } from "../actions/post";

class InsertPost extends Component {
  componentWillReceiveProps(props) {
    console.log(props.error);
  }

  render() {
    return <div>Upload Post</div>;
  }
}

InsertPost.propTypes = {
  error: PropTypes.object.isRequired,
  uploadPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, { uploadPost })(InsertPost);
