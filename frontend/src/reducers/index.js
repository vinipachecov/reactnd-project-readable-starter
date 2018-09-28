import { combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import PostReducer from './PostReducer'
import CommentReducer from './CommentReducer';

export default combineReducers({
  categoryData: CategoryReducer,
  postData: PostReducer,
  commentData: CommentReducer
});

