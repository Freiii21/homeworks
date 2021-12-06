import {UserType} from '../HW8';

type sortAC = {
    type: "sort"
    payload: "up" | "down"
}

type checkAC = {
    type: "check"
    payload: number
}

type ActionTypes = sortAC | checkAC;

export const homeWorkReducer = (state: UserType[], action: ActionTypes): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === "up"){
                const copyState = [...state];
                return copyState.sort((a,b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === "down"){
                const copyState = [...state];
                return copyState.sort((a,b) => a.name < b.name ? 1 : -1)
            }
            return state
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}


