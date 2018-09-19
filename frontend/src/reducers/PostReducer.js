import { SEND_ALL_POSTS } from "../actions/ActionTypes";

const initialState = {
  postList: [],
  currentPost: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SEND_ALL_POSTS:
    return { ...state, postList: action.payload };
  default:
    return state
  }
};
