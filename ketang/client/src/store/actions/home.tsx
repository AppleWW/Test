import * as actionTypes from '../action-types';

export default {
  setCurrentCategory(currentCategory: string) {
    return {
      type: actionTypes.SET_CURRENT_CATEGORY,
      payload: currentCategory
    };
  }
};
