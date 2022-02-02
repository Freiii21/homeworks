import {ActionsType} from '../../h10/bll/store';

type themeType = {
    theme: string
}

const initState: themeType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ActionsType): themeType => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return {
                ...state,
                theme: action.color
            };
        default: return state;
    }
};

export type ChangeThemeAT = {
    type: "CHANGE_COLOR",
    color: string
}

export const changeThemeAC = (color: string): ChangeThemeAT => {
    return {
        type: "CHANGE_COLOR",
        color
    }
};