var React = require('react');


module.exports = React.createClass({
	render: function(){
		return (
			<div className='jumbotron container'>
				{this.props.children}
			</div>
		)
	}
})