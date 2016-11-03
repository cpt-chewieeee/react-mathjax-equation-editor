var React = require('react');
var EquationsPad = require('./equations-pad');
var NumbersPad = require('./numbers-pad');
var ActionsPad = require('./actions-pad');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="container cal-pads">
				<div className="row">
					<ActionsPad onActionClick={this.props.onActionClick}/>
				</div>
				<div className="row">
					<EquationsPad onEquationClick={this.props.onEquationClick} onSpecialClick={this.props.onSpecialClick}/>
					<NumbersPad onNumClick={this.props.onNumClick}/>
				</div>
			</div>
		)
	}
})