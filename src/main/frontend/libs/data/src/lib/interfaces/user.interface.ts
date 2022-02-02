export interface User {
    username: string,
    roles: Array<string>,
    token_type: string,
    access_token: string,
    expires_in: number,
    refresh_token: string
}