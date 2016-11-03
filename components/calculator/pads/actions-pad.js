var React = require('react');
var Panel = require('react-bootstrap/lib/Panel');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="actions-pad col-sm-12 col-md-12 col-lg-12">
				<Panel>
					<ul className="list-inline text-center">
						<li><button type="button" className="btn btn-danger" onClick={this.onActionClick.bind(this, 'clear')}><i className="fa fa-trash"/></button></li>
						<li><button type="button" className="btn btn-default" onClick={this.onActionClick.bind(this, 'nav-left')}><i className="fa fa-arrow-left"/></button></li>
						<li><button type="button" className="btn btn-default" onClick={this.onActionClick.bind(this, 'nav-right')}><i className="fa fa-arrow-right"/></button></li>
						<li><button type="button" className="btn btn-default" onClick={this.onActionClick.bind(this, 'undo')}><i className="fa fa-undo"/></button></li>
						<li><button type="button" className="btn btn-default" onClick={this.onActionClick.bind(this, 'delete')}><i className="fa fa-long-arrow-left"/></button></li>
					</ul>
				</Panel>
			</div>
		)
	},
	onActionClick: function(type){
		this.props.onActionClick(type);
	}
})