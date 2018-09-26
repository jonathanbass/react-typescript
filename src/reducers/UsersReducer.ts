import ApplicationTypes from "../types/ApplicationTypes";

export default function UsersReducer(state = {}, action: any) {
    state = { isLoading: true};
    switch(action.type) {
        case ApplicationTypes.Users:
        return { isLoading: false, users: action.users };
        
        default: return { ...state, users: [] };
    }
}