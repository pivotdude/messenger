import {AUTH_USER, AUTHORIZATION, DIALOGS, HIDE_LOADER, SHOW_LOADER} from "./types";
import {ActionModel} from "./ActionModel";

const initialState = {
    loading: false,
    authData: {},
    authUser: {},
    dialogs: {},
}

export const appReducer = (state = initialState, action: ActionModel) => {
    switch (action.type) {

        case DIALOGS:
            return {...state, dialogs: action.payload}

        case AUTH_USER:
            return {...state, authUser: action.payload}

        case AUTHORIZATION:
            return {...state, authData: action.payload}

        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}

        default: return state
    }
}