import React, { Component, PropTypes } from 'react';
import api from './../../api';

class Post extends Component {

  constructor(props) {
    super(props);
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    return (
      <article id={`post-${this.props.id}`}>
        <p>
          {this.props.id}
          {this.props.title}
          {this.props.content}
        </p>
        <btn onClick={this.props.handleDelete} className="btn btn-danger btn-sm">Delete</btn>
      </article>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
};


export default Post;
