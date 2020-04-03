import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updatePost, getPost } from "../actions/post";

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      writer: "",
      imageFile: [],
      pdfFile: []
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.getPost(postId);
  }

  componentWillReceiveProps(props) {
    this.setState({
      title: props.post.title,
      description: props.post.description,
      writer: props.post.writer
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeFile(e) {
    this.setState({
      [e.target.name]: e.target.files
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let fd = new FormData();
    fd.append("title", this.state.title);
    fd.append("description", this.state.description);
    fd.append("writer", this.state.writer);
    if (this.state.pdfFile.length > 0)
      fd.append("pdfUrl", this.state.pdfFile[0], this.state.pdfFile[0].name);
    if (this.state.imageFile.length > 0)
      fd.append(
        "imageUrl",
        this.state.imageFile[0],
        this.state.imageFile[0].name
      );
    const postId = this.props.match.params.id;
    this.props.updatePost(postId, fd);
    window.location.href = "/admin";
  }

  render() {
    return (
      <div>
        <div id="login-form">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <textarea
                type="text"
                style={{ height: 100 }}
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Writer</label>
              <input
                type="text"
                className="form-control"
                name="writer"
                value={this.state.writer}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Image</label>
              <input
                type="file"
                className="form-control"
                name="imageFile"
                onChange={this.onChangeFile}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Magazine Document</label>
              <input
                type="file"
                className="form-control"
                name="pdfFile"
                onChange={this.onChangeFile}
              />
            </div>
            <center>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </center>
          </form>
        </div>
      </div>
    );
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
