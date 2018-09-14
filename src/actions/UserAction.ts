import { UsersApi } from '../api/UsersApi';
import ApplicationTypes from '../types/ApplicationTypes';

export const GetAllUsers = () => async (dispatch: any) => {
    const users = await UsersApi.GetAllUsers();
    dispatch({ 
        type: ApplicationTypes.Users,
        users
    });
}