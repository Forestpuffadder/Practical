import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../_reducers/rootReducer';

const loggerMiddleware = createLogger();

export const store =  createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware,loggerMiddleware)
);
