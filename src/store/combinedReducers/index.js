import { combineReducers } from 'redux';

import fetchFeaturesReducer from './fetchFeaturesReducer';
// import saveSentenceReducer from './saveSentenceReducer';

const rootReducer = combineReducers({
    features: fetchFeaturesReducer,

});

export default rootReducer