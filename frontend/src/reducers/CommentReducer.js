import { 
  SEND_COMMENT_LIST, 
  ON_DELETE_COMMENT,
  SEND_UPDATED_COMMENT, 
  SET_COMMENT_TO_EDIT, 
  ON_NEW_COMMENT_MESSAGE_CHANGE, 
  ON_NEW_COMMENT_AUTHOR_CHANGE,
  ON_CREATE_NEW_COMMENT 
} from "../actions/ActionTypes";


const initialState = {
  commentList: [],
  selectedComent: null,
  newCommentAuthor: '',
  newCommentMessage: ''  
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SEND_COMMENT_LIST:
    return { ...state, commentList: action.payload };
  case SEND_UPDATED_COMMENT:
    return {
      ...state,
      commentList: state.commentList.map(comment => {
        if (comment.id === action.payload.id) {
          return { ...comment, ...action.payload };          
        }
        return comment;
      }).sort((a,b) => {
        return a.voteScore < b.voteScore ? 1: -1;
      })
    }
  case SET_COMMENT_TO_EDIT:
    return {
      ...state,
      selectedComent: action.payload,
      newCommentAuthor: action.payload.author,
      newCommentMessage:action.payload.body    
      
    };
  case ON_NEW_COMMENT_MESSAGE_CHANGE:
    return {
      ...state,
      newCommentMessage: action.payload
    };
  case ON_NEW_COMMENT_AUTHOR_CHANGE: 
    return {
      ...state,
      newCommentAuthor: action.payload
    };
  case ON_CREATE_NEW_COMMENT:
    return {
      ...state,
      commentList: [...state.commentList, action.payload].sort((a,b) => {
        return a.voteScore < b.voteScore ? 1: -1;
      })
    };
  case ON_DELETE_COMMENT:
    return { 
      ...state,
      commentList: state.commentList
        .filter(comment =>  comment.id !== action.payload.id)
        .sort((a,b) => {
          return a.voteScore < b.voteScore ? 1: -1;
        })
    }

  default:
    return state
  }
};
