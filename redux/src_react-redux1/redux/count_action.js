import { ADD, MINUS } from './constant';

export const addAction = (data) => ({ type: ADD, data });
export const minusAction = (data) => ({ type: MINUS, data });
export const addActionAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addAction(data));
    }, time);
  };
};
