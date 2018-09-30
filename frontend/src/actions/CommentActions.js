import API from "../utils/API";
import { 
  SEND_COMMENT_LIST, 
  SEND_UPDATED_COMMENT, 
  SET_COMMENT_TO_EDIT, 
  ON_NEW_COMMENT_AUTHOR_CHANGE,
  ON_NEW_COMMENT_MESSAGE_CHANGE,
  ON_CREATE_NEW_COMMENT,
  ON_DELETE_COMMENT
} from "./ActionTypes";

export const getPostComments = (post, postId) => {
  return async dispatch => {
    if (post) {
      const comments = await API.getPostComments(postId);  
      comments.sort((a,b) => {
        return a.voteScore < b.voteScore ? 1: -1;
      });
      dispatch({ type: SEND_COMMENT_LIST, payload: comments });
    } else {
      dispatch({ type: SEND_COMMENT_LIST, payload: [] });
    }            
  };
}  

export const voteComment =  (commentId, option) =>  {
  return async dispatch => {    
    const res = await API.voteCommentById(commentId, option);        
    dispatch({ type: SEND_UPDATED_COMMENT, payload: res });    
  }
}
  

export const updateComment = (commentId, data) => {
  return async dispatch => {
    console.log('dados = ', data);
    const res = await API.updateComment(commentId, { id: commentId, ...data});
    console.log('comment updated = ', res);
    dispatch({ type: SEND_UPDATED_COMMENT, payload: res });
  };
};

export const selectCommentToEdit = (comment) => {
  return dispatch => {
    dispatch({ type: SET_COMMENT_TO_EDIT, payload: comment });
  }
}

//new Comment form

export const onNewCommentAuthorChange = (event) => ({
   type: ON_NEW_COMMENT_AUTHOR_CHANGE, payload: event.target.value  
});

export const onNewCommentMessageChange = (event) => ({
  type: ON_NEW_COMMENT_MESSAGE_CHANGE, payload: event.target.value  
});


export const createNewComment = (commentData) => {
  return async dispatch => {    
    console.log('novo comentario a ser criado = ', commentData)
    const res = await API.createComment(commentData);    
    dispatch({ type: ON_CREATE_NEW_COMMENT, payload: res });
  };
}

export const deleteCommentById = (commentId) => {
  return async dispatch => {
    const res = await API.deleteCommentById(commentId);    
    dispatch({ type: ON_DELETE_COMMENT, payload: res });    
  };
}



