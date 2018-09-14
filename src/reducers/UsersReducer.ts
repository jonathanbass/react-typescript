import ApplicationTypes from "../types/ApplicationTypes";

export default function UsersReducer(state = [], action: any) {
    switch(action.type) {
        case ApplicationTypes.Users:
        return action.users;
        
        default: return state;
    }
}