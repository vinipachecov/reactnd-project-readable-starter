import API from '../utils/API';
import { SEND_ALL_POSTS } from './ActionTypes';

export const getAllPosts = () => {  
  return async dispatch => {    
    const posts = await API.getPosts();        
    posts.sort((a,b) => {
      return a.timestamp < b.timestamp ? 1: -1;
    });
    dispatch({ type: SEND_ALL_POSTS, payload: posts });        
  }
}