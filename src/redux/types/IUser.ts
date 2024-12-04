export interface IUser {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  followers: any[];
  following: any[];
  _id: string;
  createdAt: string;
  updatedAt: string;
}
