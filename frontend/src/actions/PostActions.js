import API from '../utils/API';
import { SEND_ALL_POSTS, SET_CURRENT_POST, SEND_UPDATED_POST, SEND_POST_FILTER, DELETE_POST } from './ActionTypes';

export const getAllPosts = () => {  
  return async dispatch => {    
    const posts = await API.getPosts();   
    const validPosts = posts.filter(post => !post.deleted)      
    posts.sort((a,b) => {
      return a.voteScore < b.voteScore ? 1: -1;
    });
    dispatch({ type: SEND_ALL_POSTS, payload: posts });        
  }
}

export const getPostById = (postId) => {  
  return async dispatch => {    
    let post = await API.getPostById(postId);          
    if (JSON.stringify(post) === JSON.stringify({})) {
      post = null      
    }
    dispatch ({ type: SET_CURRENT_POST, payload: post});  
    return post;                           
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

export const deletePostById = (postId) => {
  return async dispatch => {
    const res = await API.deletePostById(postId);
    console.log('retorno do delete = ', res);
    dispatch({type: DELETE_POST, payload: postId});
  }
};

