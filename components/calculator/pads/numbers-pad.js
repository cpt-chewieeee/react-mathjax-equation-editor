var React = require('react');
var Panel = require('react-bootstrap/lib/Panel');

module.exports = React.createClass({
	render: function(){
		return(
			<div className="numbers-pad col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<Panel>
					<div className="row">
						<div className="numbers col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2 col-lg-10 col-lg-offset-2">
							<div>
								<button type="button" className="btn btn-default btn-lg">1</button>
								<button type="button" className="btn btn-default btn-lg">2</button>
								<button type="button" className="btn btn-default btn-lg">3</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg">4</button>
								<button type="button" className="btn btn-default btn-lg">5</button>
								<button type="button" className="btn btn-default btn-lg">6</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg">7</button>
								<button type="button" className="btn btn-default btn-lg">8</button>
								<button type="button" className="btn btn-default btn-lg">9</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg"> . </button>
								<button type="button" className="btn btn-default btn-lg">0</button>
								<button type="button" className="btn btn-default btn-lg">?</button>
							</div>
						</div>
					</div>
				</Panel>

			</div>

		)
	}
});