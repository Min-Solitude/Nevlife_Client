export interface IAuth {
    username: string
    email: string
    authentication: IAuthentication
    _id: string
}

export interface IAuthentication {
    password: string
    salt?: string
    sessionToken?: string
}

export interface IUser {
    username: string
    email: string
    address: string
    avatar: string
    phoneNumber: string
    _id: string
}
