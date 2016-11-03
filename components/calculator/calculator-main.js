var React = require('react');

var CalInput = require('./calculator-input');
var Pads = require('./pads/pads-main');
module.exports = React.createClass({
	render: function(){
		return (
			<div className="cal-main">
				<CalInput 
					inputs={this.state.dangerouslyString} 
					showInputBoxes={this.state.showInputBoxes} 
					updateSelectedIndex={this.updateSelectedIndex}
					inputsOnChange={this.inputsOnChange}
					inputsSubmit={this.inputsSubmit}
					/>
				<Pads onNumClick={this.numHandler} onActionClick={this.actionHandler} onEquationClick={this.equationHandler} onSpecialClick={this.specialHandler}/>
			</div>
		)
	},
	getInitialState: function() {
		return {
			actionStack: [],
			dangerouslyString: '',
			showInputBoxes: {status: false, limit: 0, values:['', '']},
			selectedIndex: null,
			displayFn: null
		}
	},
	numHandler: function(value){
		if(!this.state.showInputBoxes.status){
			var stack = this.state.actionStack;
			stack.push(value);
			this.setState({
				actionStack: stack,
				dangerouslyString: this.state.dangerouslyString + ' ' + value 
			});
		} else {
			var info = this.state.showInputBoxes;
			if(this.state.selectedIndex != null){
				info.values[this.state.selectedIndex] += value.toString();
				this.setState({
					showInputBoxes: info
				});
			}
		}
	},
	actionHandler: function(type){
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
	equationHandler: function(equation, type){
		console.log('equationHandler', equation);
		if(!this.state.showInputBoxes.status || type == 'special'){
			var stack = this.state.actionStack;
			stack.push(equation);
			this.setState({
				actionStack: stack,
				dangerouslyString: this.state.dangerouslyString + ' ' + equation
			});
		} 
	},
	specialHandler: function(typeName, limit, fn){
		var special = this.state.showInputBoxes;
		special.status = true;
		special.limit = limit;
		this.setState({showInputBoxes: special, displayFn: fn});
		// fn();
	},
	updateSelectedIndex: function(id){
		this.setState({selectedIndex: id});
	},
	inputsOnChange: function(id, value){
		var info = this.state.showInputBoxes;
		info.values[id] = value;
		this.setState({
			showInputBoxes: info
		});
	},
	inputsSubmit: function(){
		var info = this.state.showInputBoxes;
		var callback = this.state.displayFn;
		var values = info.values;
		if(info.limit == 1){
			callback(values[0], null)
		} else {
			callback(values[0], values[1]);
		}
		info.status = false;
		info.limit = 0;
		info.values = ['',''];
		this.setState({
			showInputBoxes: info,
			displayFn: null,
			selectedIndex: null,
		});
	}

})