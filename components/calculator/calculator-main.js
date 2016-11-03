var React = require('react');

var CalInput = require('./calculator-input');
var Pads = require('./pads/pads-main');
module.exports = React.createClass({
	render: function(){
		return (
			<div className="cal-main">
				<CalInput inputs={this.state.dangerouslyString}/>
				<Pads onNumClick={this.numHandler} onActionClick={this.actionHandler} onEquationClick={this.equationHandler}/>
			</div>
		)
	},
	getInitialState: function() {
		return {
			actionStack: [],
			dangerouslyString: ''
		}
	},
	numHandler: function(value){
		var stack = this.state.actionStack;
		stack.push(value);
		this.setState({
			actionStack: stack,
			dangerouslyString: this.state.dangerouslyString + ' ' + value 
		});
	},
	actionHandler: function(type){
		console.log("action", type);
		switch(type){
			case 'clear':
				this.setState({dangerouslyString: '', actionStack: []});
				break;
			case 'delete':
			case 'undo':
				var stack = this.state.actionStack;
				stack.pop();
				var new_strings = this.state.dangerouslyString.split(' ');
				new_strings.pop();
				this.setState({dangerouslyString: new_strings.join(' '), actionStack: stack});
				break;
			case 'nav-left':
			case 'nav-right':
			default:
				break;
		}
	},
	equationHandler: function(equation){
		// console.log('equation', equation);
		var stack = this.state.actionStack;
		stack.push(equation);
		this.setState({
			actionStack: stack,
			dangerouslyString: this.state.dangerouslyString + ' ' + equation
		});
	}

})