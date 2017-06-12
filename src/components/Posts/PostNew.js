import React, { Component } from 'react';
import api from './../../api';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      title: this.state.title,
      content: this.state.content,
    });

    return fetch('http://localhost:3002/blogs', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this.handleRedirect);

    // api.blogs.postBlogs(data);
  }

  handleRedirect(res) {
    if (res.status === 201) {
      window.location.href = 'http://localhost:3000';
    } else {
      alert('Error Creating Post');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
         Title:
         <input
           name="title"
           type="text"
           value={this.state.title}
           onChange={this.handleChange}
         />
        </label>
        <label>
          Content:
          <input
            name="content"
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default Post;
