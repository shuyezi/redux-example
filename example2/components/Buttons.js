import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { HOME, DEMO, TEST } from '../constant/actionType';
import * as actions from '../actions';

class Buttons extends React.Component{
	homeHandle(){
		const { dispatch } = this.props;
		dispatch({type: HOME});
	}

	demoHandle(){
		const { dispatch } = this.props;
		dispatch({type: DEMO});
	}

	testHandle(){
		const { dispatch } = this.props;
		dispatch({type: TEST});
	}

	render(){
		return(
			<div>
				<div className='buttons' onClick={this.homeHandle.bind(this)}><label>看首页</label></div>
				<div className='buttons' onClick={this.demoHandle.bind(this)}><label>看DEMO页</label></div>
				<div className='buttons' onClick={this.testHandle.bind(this)}><label>看测试页</label></div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect()(Buttons);