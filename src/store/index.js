import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "../reducers";

import vrmData from '../middlewares/vrmData'

const middlewares = applyMiddleware(vrmData);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;