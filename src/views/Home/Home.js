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

  render() {
    return (
      <article >
        <h1>Estos son los Posts</h1>
        <li><Link to="/posts/new">New Post</Link></li>
        {this.state.loading && (
          <p>Loading...</p>
        )}
        {this.state.blogs
          .map(post => <Post key={post.id} {...post} />)
        }
      </article>
    );
  }
}
export default Home;
