var React = require('react');
var Inputs = require('./specials/inputs');

module.exports = React.createClass({
	render: function(){
		var math = katex.renderToString(this.state.dangerouslyInput);
		return (
			<div className="input-container">
				<div className="cal-input">
					<div id="calculator-output" dangerouslySetInnerHTML={{ __html: math }}></div>
				</div>
				<div className="fill-input">
					{(this.state.status? <Inputs limits={this.state.limit} values={this.state.values}  updateSelectedIndex={this.props.updateSelectedIndex} inputsOnChange={this.props.inputsOnChange} inputsSubmit={this.props.inputsSubmit}/> : '')}
				</div>
			</div>
		)
	},
	getInitialState: function(){
		return {
			dangerouslyInput: '',
			status: false,
			limit: 0,
			values: ['','']
		}
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			dangerouslyInput: nextProps.inputs,
			status: nextProps.showInputBoxes.status,
			limit: nextProps.showInputBoxes.limit,
			values: nextProps.showInputBoxes.values
		});
	}
});