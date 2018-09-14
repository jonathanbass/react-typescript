import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';

export default function ConfigureStore(initialState = []) {
    return createStore(
        RootReducer,
        applyMiddleware(thunk)
    );
}
