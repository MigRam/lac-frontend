import {guid, ID} from '@datorama/akita';

export interface User {
  username: string,
  roles: string,
  token_type: string,
  access_token: string,
  expires_in: number,
  refresh_token: string
}

export interface Authentication {
  id: ID;
  user: User;
  isAuthenticated: boolean
}

export function createAuthentication(): Authentication {

  return {
    id: guid(),
    user: {},
    isAuthenticated: false
  } as Authentication;
}
