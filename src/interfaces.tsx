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

export interface courseInterface {
  code: string;
  title: string;
  cr: number;
  gd: string;
  gp: number;
}

export interface semesterResultsInterface {
  academicYear: string;
  semester: "first" | "second";
  semesterCourses: courseInterface[];
}
