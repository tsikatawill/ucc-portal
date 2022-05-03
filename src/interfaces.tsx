export interface IAuthState {
  isLoggedIn: boolean;
  loggedInUser: any;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface NotificationInterface {
  id: number;
  title: string;
  noteText: string;
  condition?: string;
}
