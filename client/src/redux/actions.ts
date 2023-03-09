import {
    SHOW_LOADER,
    HIDE_LOADER, AUTHORIZATION, REGISTRATION,
} from './types'
import {allBackendRoutes} from "../models";

type methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | "DELETE"
interface optionFetchModel {
    method?: methods,
    headers?: any,
    body?: any
}


function fetchData(route: allBackendRoutes, types: string, Method: methods = 'GET' ,body: object = {}):object {
    return async (dispatch: Function) => {
        dispatch(showLoader())

        const options: optionFetchModel = {
            method: Method,
            headers: {
                'Authorization': localStorage.getItem('token') ?? null,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }

        const response = await fetch(`http://localhost:3005/${route}`, options)
        const json = await response.json()

        dispatch({type: types, payload: json})
        dispatch(hideLoader())
    }
}
function fetchDataGraphql(route: string, types: string, body: object = {}):object {
    return async (dispatch: Function) => {
        dispatch(showLoader())

        const options: optionFetchModel = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token') ?? null,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }

        const response = await fetch(`http://localhost:3001/graphql/${route}`, options)
        const json = await response.json()

        dispatch({type: types, payload: json})
        dispatch(hideLoader())
    }
}


interface LoginData {
    email: string,
    password: string
}

export function fetchLoginData(body: LoginData): any  {
    return fetchData("api/login", AUTHORIZATION, "POST", body)
}



interface RegistrationData {
    name: string,
    login: string,
    email: string,
    password: string,
    repeatPassword: string,
}

export function fetchRegistrationData(body: RegistrationData): any  {
    return fetchData("api/registration", REGISTRATION, "POST", body)
}



export function showLoader():object {
    return {type: SHOW_LOADER}
}
export function hideLoader():object {
    return {type: HIDE_LOADER}
}
