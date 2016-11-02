var React = require('react');
var EquationsPad = require('./equations-pad');
var NumbersPad = require('./numbers-pad');
var ActionsPad = require('./actions-pad');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="container cal-pads">
				<div className="row">
					<ActionsPad />

				</div>
				<div className="row">
					<EquationsPad />
					<NumbersPad />
				</div>
			</div>
		)
	}
})