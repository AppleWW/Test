import { ReducersMapObject, AnyAction, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import home from './home';
import mine from './mine';
import cart from './cart';
import profile from './profile';
import history from '@/history';
import { CombinedState } from '@/typings';
import produce from 'immer';
import { combineReducers } from 'redux-immer';

//[K in keyof S]: Reducer<S[K], A>
let reducers: ReducersMapObject<CombinedState, AnyAction> = {
    home,
    mine,
    profile,
    cart,
    router: connectRouter(history)
}
const rootReducer: Reducer<CombinedState, any> = combineReducers<CombinedState>(produce, reducers);
/**
export type Reducer<S = any, A extends Action = AnyAction> = 
(state: S | undefined,action: A) => S
 */

export default rootReducer;

/*
export type RootState = {
    //迭代reducers所有的key  reducers[key]是reducer类型 ReturnType返回此函数类型的返回值类型
    [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
}
export function combineReducers<S>(
    reducers: ReducersMapObject<S, any>
): Reducer<CombinedState<S>>
export type ReducersMapObject<S = any, A extends Action = Action> = {
    [K in keyof S]: Reducer<S[K], A>
} */