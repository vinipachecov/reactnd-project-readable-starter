import API from '../utils/API';
import { 
  SEND_CATEGORIES,
  SEND_CURRENT_CATEGORY
} from './ActionTypes';

export const getCategories = () => {
  return async dispatch => {
    const res = await API.getCategories();
    res.categories.unshift({ name: 'all' });
    dispatch({ type: SEND_CATEGORIES, payload: res.categories });    
  }
};

export const setCurrentCategory = (category) => ({
  type: SEND_CURRENT_CATEGORY, payload: category
})  
