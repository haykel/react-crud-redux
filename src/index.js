
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { createStore, combineReducers} from 'redux';
import { Provider  } from 'react-redux';


import postReducer from './reducers/postReducer';
import logReducer from './reducers/logReducer';

const rootReducer = combineReducers({
    rA:postReducer,
    rB:logReducer
})

const store = createStore(rootReducer);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root')
);