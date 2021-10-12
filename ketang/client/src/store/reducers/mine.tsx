import { AnyAction } from 'redux';
import { MineState, LOGIN_TYPES } from '@/typings/state';

const initState: MineState = {
  loginState: LOGIN_TYPES.UN_VALIDATE,
  user: null,
  error: null
};

export default function (
  state: MineState = initState,
  action: AnyAction
): MineState {
  return state;
}
