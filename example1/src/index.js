import { createStore } from 'redux';
import rootReducers from '../reducers';

let store = createStore(rootReducers);

//数据发生改变的时候，redux会主动调用subscribe的回调方法
store.subscribe(()=>console.log("数据发生改变了咯：", store.getState()));

//手动触发actions
import { handleEventA, handleEventB } from '../actions';

let $eventa = document.getElementById("eventa");
let $eventb = document.getElementById("eventb");

$eventa.onclick = function(){
	store.dispatch(handleEventA("Hello, 我是事件A的handle方法"));
}

$eventb.onclick = function(){
	store.dispatch(handleEventB("Hello, 我是事件B的handle方法"));
}