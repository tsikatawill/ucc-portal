export interface IAuthState {
  isLoggedIn: boolean;
  loggedInUser: any;
}

export interface IAction {
  type: string;
  payload: any;
}
