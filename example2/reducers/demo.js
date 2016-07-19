import { DEMO } from '../constant/actionType';

const initState = {
	author: "初始化初始化",
	poisition: "初始化初始化",
	pageTitle: "初始化初始化",
	bodyText: "初始化初始化"
}

const demo = (state = initState, action)=>{
	switch(action.type){
		case DEMO:
			return Object.assign({}, state, {
				author: "jimmy",
				poisition: "Demo Page",
				pageTitle: "Demo Title",
				bodyText: "Demo Body"
			});
		default:
			return state;
	}
}

export default demo;