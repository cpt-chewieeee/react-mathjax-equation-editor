var React = require('react');


module.exports = React.createClass({
	render: function(){
		var math = katex.renderToString(this.state.dangerouslyInput);
		return (
			<div className="cal-input">
				<div id="calculator-output" dangerouslySetInnerHTML={{ __html: math }}></div>
			</div>
		)
	},
	getInitialState: function(){
		return {
			dangerouslyInput: ''
		}
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			dangerouslyInput: nextProps.inputs
		});
	},
	componentDidMount: function(){
		// MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'calculator-output']);
	}
})