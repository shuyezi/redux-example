/*
 * action 创建函数
 */

import { HOME } from '../constant/actionType';

export const showHome = ()=>{
	return {
		type: HOME
	}
}

export const showDemo = ()=>{
	return {
		type: DEMO
	}
}

export const showTest = ()=>{
	return {
		type: TEST
	}
}