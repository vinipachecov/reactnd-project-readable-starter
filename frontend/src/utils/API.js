import axios from 'axios';

class API {

  address = 'http://localhost:3001';

  buildAuthentication() {
    return {
      headers: {
        Authorization: 'Bearer Token'
      }
    }
  }

  async getCategories() {
    const config = this.buildAuthentication();
    try {
      const res = await axios.get(`${this.address}/categories`, config);
      return res.data;      
    } catch (error) {
      console.log(error);
    }
  }

  async getPosts() {
    const config = this.buildAuthentication();
    try {
      const res = await axios.get(`${this.address}/posts`, config);
      return res.data;      
    } catch (error) {
      console.log(error);
    }
  }

  async getPostById(postId) {
    const config = this.buildAuthentication();
    try {
      const res = await axios.get(`${this.address}/posts/${postId}`, config);
      return res.data;      
    } catch (error) {
      console.log(error);
    }
  }

  async getPostComments(postId) {
    const config = this.buildAuthentication();
    try {
      const res = await axios.get(`${this.address}/posts/${postId}/comments`, config);
      return res.data;      
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(postId, data) {        
    const body = {
      ...data
    }
    const config = this.buildAuthentication();
    try {
      const res = await axios.put(`${this.address}/posts/${postId}`, body, config);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);      
    }        
  }

  async votePost(postId, option) {        
    const body = {
      option
    }
    const config = this.buildAuthentication();
    try {
      const res = await axios.post(`${this.address}/posts/${postId}`, body, config);      
      return res.data;
    } catch (error) {
      console.log(error);      
    }        
  }
  
  async deletePostById(postId) {            
    const config = this.buildAuthentication();
    try {
      const res = await axios.delete(`${this.address}/posts/${postId}`, config);      
      return res.data;
    } catch (error) {
      console.log(error);      
    }        
  }

  // Comments ---------

  async updateComment(commentId, data) {
    const body = {
      ...data
    }
    const config = this.buildAuthentication();
    try {
      const res = await axios.put(`${this.address}/comments/${commentId}`, body, config);      
      return res.data;
    } catch (error) {
      console.log(error);      
    }            
  }

  

  async createComment(newComment) {
    const body = {
      ...newComment
    }
    const config = this.buildAuthentication();
    try {
      const res = await axios.post(`${this.address}/comments/`, body, config)      
      return res.data;
    } catch (error) {
      console.log(error);      
    }
  }

  async voteCommentById(commentId, option) {
    const body = {
      option
    };
    const config = this.buildAuthentication();
    try {
      const res = await axios.post(`${this.address}/comments/${commentId}`, body, config)      
      return res.data;
    } catch (error) {
      console.log(error);      
    }
  }


  async deleteCommentById(commentId) {
    const config = this.buildAuthentication();
    try {
      const res = await axios.delete(`${this.address}/comments/${commentId}`, config)      
      return res.data;
    } catch (error) {
      console.log(error);      
    }
  }
}

export default new API();