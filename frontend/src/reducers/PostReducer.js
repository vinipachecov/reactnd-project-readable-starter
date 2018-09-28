import { 
  SEND_ALL_POSTS, 
  SEND_CURRENT_CATEGORY, 
  SET_CURRENT_POST,
  SEND_UPDATED_POST
} from "../actions/ActionTypes";

const initialState = {
  postList: [],
  currentPost: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SEND_ALL_POSTS:
    return { ...state, postList: action.payload };
  case SEND_CURRENT_CATEGORY:
    return { ...state };
  case SET_CURRENT_POST:
    return { ...state, currentPost: action.payload };
  case SEND_UPDATED_POST:
    return { 
      ...state, 
      postList: state.postList.map(post => {
        if (post.id === action.payload.id) {
          return { ...post, ...action.payload};
        }
        return post;
      }),
      currentPost: state.currentPost && state.currentPost.id === action.payload.id ? action.payload : state.currentPost
    }
  default:
    return state;
  }
};
