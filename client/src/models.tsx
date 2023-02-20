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