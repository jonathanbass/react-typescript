import { User } from "../models/User";

export class UsersApi {
    public static GetAllUsers: () => Promise<User[]> = async () => {
        const request = new Request('http://localhost:8080/api/v1/users/new', {
            method: 'GET'
        });

        const response = await fetch(request);
        const users = await response.json();
        return users;
    };
}