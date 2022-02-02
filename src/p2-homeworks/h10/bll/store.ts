import {combineReducers, createStore } from 'redux'
import {LoadingAT, loadingReducer} from './loadingReducer'
import {ChangeThemeAT, themeReducer} from '../../h12/bll/themeReducer';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer

})

const store = createStore(reducers)

export default store

export type ActionsType = LoadingAT | ChangeThemeAT;

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
