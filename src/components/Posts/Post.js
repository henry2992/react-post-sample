import React, { Component, PropTypes } from 'react';

class Post extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <article>
        <p>
          {this.props.id}
          {this.props.title}
          {this.props.content}
        </p>
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
