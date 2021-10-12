import home from './home';
import profile from './profile';
import mine from './mine';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '@/history';

const reducer = { home, profile, mine, router: connectRouter(history) };
export default combineReducers(reducer);
