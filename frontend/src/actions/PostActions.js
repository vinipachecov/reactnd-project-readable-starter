import API from '../utils/API';
import { SEND_ALL_POSTS, SET_CURRENT_POST, SEND_UPDATED_POST, SEND_POST_FILTER } from './ActionTypes';

export const getAllPosts = () => {  
  return async dispatch => {    
    const posts = await API.getPosts();        
    posts.sort((a,b) => {
      return a.voteScore < b.voteScore ? 1: -1;
    });
    dispatch({ type: SEND_ALL_POSTS, payload: posts });        
  }
}

export const getPostById = (postId) => {  
  return async dispatch => {    
    const post = await API.getPostById(postId);      
    dispatch ({ type: SET_CURRENT_POST, payload: post});                          
  }
}

export const setCurrentPost = (post) => ({
  type: SET_CURRENT_POST,
  payload: post
});


export const updatePost = (postId, data) => {
  return async dispatch => {
    console.log('dados = ', data);
    const res = await API.updatePost(postId, { id: postId, ...data});
    console.log('updated post = ', res);
    dispatch({ type: SEND_UPDATED_POST, payload: res });
  };
};

export const votePost =  (postId, option) =>  {
  return async dispatch => {    
    const res = await API.votePost(postId, option);        
    dispatch({ type: SEND_UPDATED_POST, payload: res });    
  }
}

export const changePostFilter = (option) => ({
  type: SEND_POST_FILTER, payload: option
});