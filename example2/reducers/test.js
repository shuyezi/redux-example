import { TEST } from '../constant/actionType';

const initState = {
	author: "初始化初始化",
	poisition: "初始化初始化",
	pageTitle: "初始化初始化",
	bodyText: "初始化初始化"
}

const test = (state = initState, action)=>{
	switch(action.type){
		case TEST:
			return Object.assign({}, state, {
				author: "jimmy",
				poisition: "Test Page",
				pageTitle: "Test Title",
				bodyText: "Test Body"
			});
		default:
			return state;
	}
}

export default test;