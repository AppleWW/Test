import { AnyAction } from 'redux';
interface ProfileState {}
const initState: ProfileState = {};

export default function (
  state: ProfileState = initState,
  action: AnyAction
): ProfileState {
  return state;
}
