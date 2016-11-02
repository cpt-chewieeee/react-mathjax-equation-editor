var React = require('react');
var Panel = require('react-bootstrap/lib/Panel');

module.exports = React.createClass({
	render: function(){
		return(
			<div className="equations-pad col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<Panel>
					<div className="row">
						<div className="equations  col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2 col-lg-10 col-lg-offset-2">
							<div>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#43;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#45;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#215;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x00F7;</mo></math></button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mi>a</mi><mi>b</mi></mfrac></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>a</mi><mi>b</mi></msup></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mi>n</mi></msqrt></math></button>
								<button type="button" className="btn btn-default btn-lg">
									<math xmlns="http://www.w3.org/1998/Math/MathML" data-semantic-complexity="5.8">
									  <mroot data-semantic-type="root" data-semantic-role="unknown" data-semantic-id="2" data-semantic-children="0,1" data-semantic-complexity="5.8">
									    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="1" data-semantic-parent="2" data-semantic-complexity="1">n</mi>
									    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="0" data-semantic-parent="2" data-semantic-complexity="1">a</mi>
									  </mroot>
									</math>
								</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x003C;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x003E;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x2264;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x2265;</mo></math></button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#61;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>(</mo><mi>n</mi><mo>)</mo></math></button>
								<button type="button" className="btn btn-default btn-lg"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x222B;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg">
									<math xmlns="http://www.w3.org/1998/Math/MathML" data-semantic-complexity="7.6">
									  <msubsup data-semantic-type="limboth" data-semantic-role="integral" data-semantic-id="3" data-semantic-children="0,1,2" data-semantic-complexity="7.6">
									    <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="3" data-semantic-complexity="1">&#x222B;</mo>
									    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="1" data-semantic-parent="3" data-semantic-complexity="1">n</mi>
									    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="2" data-semantic-parent="3" data-semantic-complexity="1">y</mi>
									  </msubsup>
									</math>
								</button>
							</div>
						</div>

					</div>
				</Panel>
			</div>

		)
	}
});