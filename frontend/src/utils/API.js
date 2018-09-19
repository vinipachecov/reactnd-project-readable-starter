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
}

export default new API();