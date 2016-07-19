import { EVENT_B } from '../actions';


const initState = {};

const reducerEventB = (state = initState, action)=>{
	switch(action.type){
		case EVENT_B:
			return Object.assign({}, state, {
				eventType: 'EVENT_B',
				text: action.text,
				author: "jimmy"
			});
		default:
			return state;
	}
}

export default reducerEventB;