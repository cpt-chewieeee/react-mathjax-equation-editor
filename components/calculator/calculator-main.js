var React = require('react');

var CalInput = require('./calculator-input');
var Pads = require('./pads/pads-main');
module.exports = React.createClass({
	render: function(){
		return (
			<div className="cal-main">
				<CalInput />
				<Pads />
			</div>
		)
	}
})