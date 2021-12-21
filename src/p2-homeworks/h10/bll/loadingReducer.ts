import {ActionsType} from './store';

export type PreloaderType = {
    isLoading: boolean
}

const initState:PreloaderType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionsType): PreloaderType => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: action.status
            }
        }
        default:
            return state;
    }
}

export type LoadingAT = {
    type: 'SET_LOADING'
    status: boolean
}

export const loadingAC = (status: boolean): LoadingAT => {
    return {type: 'SET_LOADING', status}
}