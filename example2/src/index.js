import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import App from '../components/App';

let store = createStore(rootReducer);
store.subscribe(()=>console.log("数据发生改变了咯：", store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("wrapper")
);