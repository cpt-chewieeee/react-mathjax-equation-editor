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
			dangerouslyString: '|',
			showInputBoxes: {status: false, limit: 0, values:['', '']},
			selectedIndex: null,
			displayFn: null,
			cursorIndex: 0
		}
	},
	insertBack: function(string, index){
		var set = string.split(' ');
		var cursor = set.splice(index, 1);
		set.push(cursor.pop());

		return {
			set: set.join(' '),
			index: index + 1
		}
	},
	numHandler: function(value){
		if(!this.state.showInputBoxes.status){
			var stack = this.state.actionStack;
			stack.push(value);
			// console.log('-->', stack);
			var new_string = this.state.dangerouslyString  + ' ' + value;
			// console.log('->', new_string.split(' '), new_string);
			var new_value;
			console.log('cursorIndex', this.state.cursorIndex, this.state.dangerouslyString.split(' '));
			if(this.state.cursorIndex === this.state.dangerouslyString.split(' ').length - 1){
				new_value = this.insertBack(new_string, this.state.cursorIndex);
			} else {
				new_value = this.insertMid(this.state.dangerouslyString, value, this.state.cursorIndex);
			}
			this.setState({
				actionStack: stack,
				dangerouslyString: new_value.set,
				cursorIndex: new_value.index
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
	insertMid: function(string, value, index){
		var array = string.split(' | ');
		var left = array[0];
		var right = array[1];
		right = (right? ' | ' + right : '');
		return {
			set: left + ' ' + value + right,
			index: index + 1
		}
	},
	undoAction: function(){
		if(this.state.actionStack.length != 0){
			var stack = this.state.actionStack;
			var last = stack.pop();
			var array = this.state.dangerouslyString.split(' ');
			var lastIndex = array.indexOf(last.toString());
			var new_tmp = array.splice(lastIndex, 1);
			this.setState({
				actionStack: stack,
				dangerouslyString: array.join(' '),
				cursorIndex: this.state.cursorIndex - 1
			});
		}
	},
	deleteClosesToCursor: function(){
		if(this.state.dangerouslyString.split(' ').length - 1 === this.state.cursorIndex){
			var array = this.state.dangerouslyString.split(' |');
			var left = array[0].split(' ');
			left.pop();
			var index = (this.state.cursorIndex - 1 < 0)? 0 : this.state.cursorIndex - 1;
			console.log('1:', this.state.cursorIndex, '2:', index);
			var new_string = (index == 0 ? '|' : left.join(' ') + ' |');
			this.setState({
				dangerouslyString: new_string,
				cursorIndex: index
			}); 
		} else if(this.state.cursorIndex > 0){
			// console.log(this.state.cursorIndex);
			// var array = this.state.dangerouslyString.split(' | ');
			// var left = array[0].split(' ');
			// left.pop();
			// var right = array[1];
			// console.log(left, '-', right);
			// this.setState({
			// 	dangerouslyString: left.join(' ') + ' | ' + right,
			// 	cursorIndex: this.state.cursorIndex - 1
			// });
		}
		
	},
	actionHandler: function(type){
		switch(type){
			case 'clear':
				this.setState({dangerouslyString: '|', cursorIndex: 0});
				break;
			case 'delete':
				this.deleteClosesToCursor();
				break;
			case 'undo':
				this.undoAction();
				break;
			case 'nav-left':
				if(this.state.cursorIndex != 0){
					var new_set = this.navRight(this.state.dangerouslyString, this.state.cursorIndex);
					this.setState({
						dangerouslyString: new_set.set,
						cursorIndex: new_set.index
					})
				}
				break;
			case 'nav-right':
				if(this.state.cursorIndex != this.state.dangerouslyString.split(' ').length - 1){
					var new_set = this.navLeft(this.state.dangerouslyString, this.state.cursorIndex);
					this.setState({
						dangerouslyString: new_set.set,
						cursorIndex: new_set.index
					});
				}
				break;
			default:
				break;
		}
	},
	navLeft: function(string, currentIndex){
		var array = string.split(' ');
		var current = array[0];
		var next = array[1];
		if(current === '|'){
			var tmp = current;
			array[0] = next;
			array[1] = tmp;
		} else {
			current = array[currentIndex];
			next = array[currentIndex + 1];
			var tmp = current;
			array[currentIndex] = next;
			array[currentIndex + 1] = tmp;
		}
		return {
			set: array.join(' '),
			index: currentIndex + 1
		}
	},
	navRight: function(string, currentIndex){
		var array = string.split(' ');
		var prePrevious = array[0];
		var previous = array[1];
		var index = currentIndex;
		if(previous === '|' && currentIndex === 1){
			var tmp = prePrevious;
			array[0] = previous;
			array[1] = prePrevious;
		} else {
			prePrevious = array[currentIndex - 1];
			previous = array[currentIndex];
			var tmp = prePrevious;
			array[currentIndex - 1] = previous;
			array[currentIndex] = prePrevious;
		}
		return {
			set: array.join(' '),
			index: currentIndex - 1
		};
	},
	equationHandler: function(equation, type){
		// console.log('equationHandler', equation);
		if(!this.state.showInputBoxes.status || type == 'special'){
			var stack = this.state.actionStack;
			// console.log('push', this.state.dangerouslyString + ' ' + equation);
			stack.push(equation);
			var new_value;
			var new_string = this.state.dangerouslyString + ' ' + equation;
			if(this.state.cursorIndex === this.state.dangerouslyString.split(' ').length - 1){
				new_value = this.insertBack(new_string, this.state.cursorIndex);
			} else {
				new_value = this.insertMid(this.state.dangerouslyString, equation, this.state.cursorIndex);
			}
			this.setState({
				actionStack: stack,
				dangerouslyString: new_value.set,
				cursorIndex: new_value.index
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
		var tmp = value[value.length - 1];
		if(!isNaN(tmp) || tmp === 'x' || tmp === 'y' || tmp === 'a' || tmp === 'b'){
			var info = this.state.showInputBoxes;
			info.values[id] = value;
			this.setState({
				showInputBoxes: info
			});
		}
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