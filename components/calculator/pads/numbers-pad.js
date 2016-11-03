var React = require('react');
var Panel = require('react-bootstrap/lib/Panel');

module.exports = React.createClass({
	render: function(){
		return(
			<div className="numbers-pad col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<Panel>
					<div className="row">
						<div className="numbers col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2 col-lg-10 col-lg-offset-2">
							<div>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 1)}>1</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 2)}>2</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 3)}>3</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 4)}>4</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 5)}>5</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 6)}>6</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 7)}>7</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 8)}>8</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 9)}>9</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, '.')}> . </button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, 0)}>0</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onNumClick.bind(this, '?')}>?</button>
							</div>
						</div>
					</div>
				</Panel>
			</div>
		)
	},
	onNumClick: function(value){
		this.props.onNumClick(value);
	}
});