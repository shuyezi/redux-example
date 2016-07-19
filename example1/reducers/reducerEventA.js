import { EVENT_A } from '../actions';


const initState = {};

const reducerEventA = (state = initState, action)=>{
	switch(action.type){
		case EVENT_A:
			return Object.assign({}, state, {
				eventType: 'EVENT_A',
				text: action.text
			});
		default:
			return state;
	}
}

export default reducerEventA;