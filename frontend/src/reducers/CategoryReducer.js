import { 
  SEND_CATEGORIES,
  SEND_CURRENT_CATEGORY
} from "../actions/ActionTypes";

const initialState = {
  categoryList: [],
  currentCategory: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SEND_CATEGORIES:
    return { ...state, categoryList: action.payload };
  case SEND_CURRENT_CATEGORY: 
    return { ...state, currentCategory: action.payload };
  default:
    return state
  }
};
