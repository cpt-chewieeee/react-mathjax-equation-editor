var React = require('react');


module.exports = React.createClass({
	render: function(){
		return (
			<div className="cal-input">
				<span dangerouslySetInnerHTML={{ __html: "$\\int_n^y$" }}></span>
			</div>
		)
	}
})