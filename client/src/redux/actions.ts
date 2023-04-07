import {
    SHOW_LOADER,
    HIDE_LOADER, AUTHORIZATION, REGISTRATION, AUTH_USER, DIALOGS,
} from './types'
import {allBackendRoutes} from "../models";

type methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | "DELETE"
interface optionFetchModel {
    method?: methods,
    headers?: any,
    body?: any
}


function fetchData(route: allBackendRoutes, type: string, Method: methods = 'GET' ,body: object = {}):object {
    return async (dispatch: Function) => {
        dispatch(showLoader())

        const options: optionFetchModel = {
            method: Method,
            headers: {
                'Authorization': localStorage.getItem('token') ?? null,
                'Content-Type': 'application/json',
            },
        }

        if (Method == 'POST') {
            options['body'] = body
        }

        const response = await fetch(`http://localhost:3005/${route}`, options)
        const json = await response.json()

        dispatch({type: type, payload: json})
        dispatch(hideLoader())
    }
}
function fetchDataGraphql(type: string, body: string, vars: object):object {
    return async (dispatch: Function) => {
        dispatch(showLoader())

        const options: optionFetchModel = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token') ?? null,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query: body, variables: vars})
        }

        const response = await fetch('http://localhost:3005/graphql/', options)
        const json = await response.json()

        dispatch({type: type, payload: json})
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

function fetchAuthDialogsUser (): object {
    return fetchData('api/dialogs', DIALOGS)
}


export function fetchUsersDialog (): any {
    return fetchAuthDialogsUser()
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
// export function fetchUsersDialog(): any {
//     const id = fetchData('api/user', 'MY_ID')
//     console.log(id)
//     return fetchDataGraphql(AUTH_USER, ` query ($id: ID!) {
//   user (_id: $id) {
//     dialogIds {
//       interlocutors {
//         _id
//         name
//         email
//       }
//       _id
//       messages {
//         message
//         sender
//         time
//       }
//     }
//   }
// }`, {"id": "JohnMark912"})
// }


export function showLoader():object {
    return {type: SHOW_LOADER}
}
export function hideLoader():object {
    return {type: HIDE_LOADER}
}
