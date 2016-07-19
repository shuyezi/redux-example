import { combineReducers } from 'redux';

import home from './home';
import demo from './demo';
import test from './test';

const rootReducer = combineReducers({
	home,
	demo,
	test
});

export default rootReducer;