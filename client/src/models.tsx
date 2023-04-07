export interface UserDialogModel {
    id: any,
    name: string,
    image: string,
    message: string,
    time: string,
}

export interface MessageModel {
    id: any,
    name: string,
    time: string,
    content: string,
    image: string
}

export interface CurrentUserModel {
    name: string,
    status: string,
    image: string,
}

export interface ThemesProps {
    theme: Theme,
}
export interface Theme {
    colors: {
        bg: string,
        fg: string,
        primaryBg: string,
        borderColor: string,
    }
}

export interface StoryModel {
    id: any,
    image: string,
    name: string,
}


export type allBackendRoutes = 'api/registration' | 'api/login' | 'api/user' | 'api/dialogs'

export interface StateModel {
    app: {
        authData: any
        authUser: any
    }
}