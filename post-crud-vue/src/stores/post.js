import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    post: null,
  }),
  actions: {
    async fetchPosts() {
      const { data } = await axios.get('/api/posts');
      this.posts = data;
    },
    async fetchPost(id) {
      const { data } = await axios.get(`/api/posts/${id}`);
      this.post = data;
    },
    async createPost(formData) {
      const { data } = await axios.post('/api/posts', formData);
      this.posts.push(data);
    },
    async updatePost(id, formData) {
      const { data } = await axios.post(`/api/posts/${id}`, formData);
      const index = this.posts.findIndex((post) => post.id === id);
      this.posts[index] = data;
    },
    async deletePost(id) {
      await axios.delete(`/api/posts/${id}`);
      this.posts = this.posts.filter((post) => post.id !== id);
    },
  },
});
