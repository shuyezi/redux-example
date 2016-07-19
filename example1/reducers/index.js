import { combineReducers } from 'redux';

import reducerEventA from './reducerEventA';
import reducerEventB from './reducerEventB';

const rootReducers = combineReducers({
  reducerEventA,
  reducerEventB
});

export default rootReducers;