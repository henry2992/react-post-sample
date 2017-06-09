import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:3002';

const api = {
  blogs: {
    async getBlogs() {
      const response = await fetch(`${baseUrl}/blogs`);
      const data = await response.json();
      return data;
    },
    async postBlogs() {
      const response = await fetch(`${baseUrl}/blogs`);

      fetch(`${baseUrl}/blogs`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstParam: 'yourValue',
          secondParam: 'yourOtherValue',
        }),
      });
      const data = await response.json();
      return data;
    },
  },
};

export default api;
