var React = require('react');


module.exports = React.createClass({
	render: function(){
		var inputs = [];
		var variables = [
			{name: 'a', clickAction: this.handleClick.bind(this, 0), changeAction: this.handleChange.bind(this, 0)}, 
			{name: 'b', clickAction: this.handleClick.bind(this, 1), changeAction: this.handleChange.bind(this, 1)}
		];
		for(var i = 0; i < this.props.limits; i++){
			inputs.push(<li key={i}><label>{variables[i].name} = <input type="text" onClick={variables[i].clickAction} onChange={variables[i].changeAction} value={this.state.values[i]}/> </label></li>)
		}		
		return (
			<div className="form-inline">
				<ul className="list-inline">
					{inputs}
					<li><button type="button" className="btn btn-default btn-xs" onClick={this.handleSubmit}>Submit</button></li>
				</ul>
			</div>
		)
	},
	getInitialState: function() {
		return {
			values: ['','']
		}
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({
			values: nextProps.values
		});
	},
	handleClick: function(id){
		this.props.updateSelectedIndex(id);
	},
	handleChange: function(id, event){
		this.props.inputsOnChange(id, event.target.value);
	},
	handleSubmit: function(){
		this.props.inputsSubmit();
	}
})