/**
 * what 描述
 * index模块的action
 */

/*
 * action 类型
 */

export const EVENT_A = 'EVENT_A';
export const EVENT_B = 'EVENT_B';

/*
 * action 创建函数
 */

export function handleEventA(text){
	return {
		type: EVENT_A,
		text
	}
}

export function handleEventB(text){
	return {
		type: EVENT_B,
		text
	}
}