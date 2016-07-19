import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Item extends React.Component {
	render(){
		return (
			<div>
				<h2>{this.props.config.pageTitle}</h2>
				<p>{this.props.config.bodyText}</p>
				<p>{this.props.config.poisition}</p>
			</div>
		);
	}
}

class HomePart extends React.Component{
	constructor(props, context) {
		super(props, context)
	}

	render(){
		return(
			<div>
				{[this.props.home, this.props.demo, this.props.test].map((item)=>{
					return <Item config={item} />
				})}
				
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


export default connect(mapStateToProps, mapDispatchToProps)(HomePart);