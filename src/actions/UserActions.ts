// import { Dispatch } from 'redux';
// import { UsersApi } from '../api/UsersApi';
// import { User } from '../models/User';

// export function getUsersSuccess(users: User[]) {
//     return {type: 'Users', users};
//   }

// export function GetAllUsers() {
//     return (dispatch: Dispatch) => {
//         return UsersApi.GetAllUsers()
//             .then((users) => {
//                 dispatch(getUsersSuccess(users));
//             });
//     }
// }