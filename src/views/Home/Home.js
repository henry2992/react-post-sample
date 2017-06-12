import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import Post from '../../components/Posts/Post';
import api from '../../api';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogs: [],
    };
  }

  async componentDidMount() {
    this.initialFecth();
  }

  async initialFecth() {
    const blogs = await api.blogs.getBlogs();
    this.setState({
      blogs,
      loading: false,
    });
  }

  handleDelete(id) {
    alert(id);
    const response = api.blogs.deleteBlogs(id);
    console.log(response.status);

    if (response.status === 'resolved') {
      alert('heyyy')
    }
  }

  render() {
    console.log(this.state.blogs);
    return (
      <article >
        <h1>Estos son los Posts</h1>
        <li><Link to="/posts/new">New Post</Link></li>
        {this.state.loading && (
          <p>Loading...</p>
        )}
        {this.state.blogs
          .map(post =>
            <Post
              {...post}
              key={post.id}
              handleDelete={this.handleDelete.bind(this, post.id)}
            />)
        }
      </article>
    );
  }
}
export default Home;
