import { HOME } from '../constant/actionType';

const initState = {
	author: "初始化初始化",
	poisition: "初始化初始化",
	pageTitle: "初始化初始化",
	bodyText: "初始化初始化"
}

const home = (state = initState, action)=>{
	switch(action.type){
		case HOME:
			return Object.assign({}, state, {
				author: "jimmy",
				poisition: "Home Page",
				pageTitle: "Home Title",
				bodyText: "Home Body"
			});
		default:
			return state;
	}
}

export default home;