import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import lives from './lives';
import tiles from './tiles';
import control from './control';


const rootReducer = combineReducers({lives, tiles, control, routing: routerReducer});

export default rootReducer;
