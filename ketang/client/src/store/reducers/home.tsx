import { AnyAction } from 'redux';
import * as actionTypes from '../action-types';
interface HomeState {}
const initState: HomeState = {
  currentCategory: 'all'
};

export default function (
  state: HomeState = initState,
  action: AnyAction
): HomeState {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload
      };
    default:
      return state;
  }
}
