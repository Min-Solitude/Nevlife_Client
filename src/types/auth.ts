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
