import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import lives from './lives';
import tiles from './tiles';
//import gameTurn from './turn';


const rootReducer = combineReducers({lives, tiles, routing: routerReducer});

export default rootReducer;
