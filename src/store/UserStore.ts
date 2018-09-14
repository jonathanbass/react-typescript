import { createStore } from 'redux';
import RootReducer from '../reducers';

export default function ConfigureStore(state = []) {
    return createStore(
        RootReducer
    );
}
