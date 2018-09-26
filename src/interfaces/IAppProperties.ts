import { User } from "../models/User";

export interface IAppProperties {
    GetAllUsers: () => Promise<User[]>;
    userReducer: IAppProperties;
    isLoading: boolean;
    users: User[];
}