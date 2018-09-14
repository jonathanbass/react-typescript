export default function UserReducer(state = [], action: any) {
    switch(action.type) {
        case 'Users':
        return action.users;
        break;
        default: throw new Error('ERROR: unrecognised type');
    }
}