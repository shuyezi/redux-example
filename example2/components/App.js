import React from 'react';
import ReactDom from 'react-dom';

import Buttons from './Buttons';
import HomePart from './HomePart';

class App extends React.Component{
	render(){
		return(
			<div>
				<Buttons />
				<HomePart />
			</div>
		)
	}
}

export default App;