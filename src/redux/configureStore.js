import { createStore } from 'redux'
import { Reducer, initialState } from './reducer'

export const ConfigureStore = () =>{
    //create store first
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}