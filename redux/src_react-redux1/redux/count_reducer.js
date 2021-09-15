import { MINUS, ADD } from './constant';

const initState = 0;

export default function countReducer(prev = initState, action) {
  const { type, data } = action;

  switch (type) {
    case ADD:
      return data + prev;
    case MINUS:
      return prev - data;
    default:
      return prev;
  }
}
