var React = require('react');
var Panel = require('react-bootstrap/lib/Panel');

module.exports = React.createClass({
	render: function(){
		return(
			<div className="equations-pad col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<Panel>
					<div className="row">
						<div className="equations col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2 col-lg-10 col-lg-offset-2">
							<div>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'add')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#43;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'subtract')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#45;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'multiple')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#215;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'divide')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x00F7;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'sin')}>
									<math xmlns="http://www.w3.org/1998/Math/MathML" data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-id="4" data-semantic-children="0,2" data-semantic-content="3,0" data-semantic-complexity="7">
									  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="0" data-semantic-parent="4" data-semantic-operator="appl" data-semantic-complexity="2">sin</mi>
									  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl" data-semantic-complexity="1">&#x2061;</mo>
									</math>							
								</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'fraction')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mi>a</mi><mi>b</mi></mfrac></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'exponentiation')}><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>a</mi><mi>b</mi></msup></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'sqrt')}><math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mi>n</mi></msqrt></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'n-sqrt')}>
									<math xmlns="http://www.w3.org/1998/Math/MathML" data-semantic-complexity="5.8">
									  <mroot data-semantic-type="root" data-semantic-role="unknown" data-semantic-id="2" data-semantic-children="0,1" data-semantic-complexity="5.8">
									    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="1" data-semantic-parent="2" data-semantic-complexity="1">b</mi>
									    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="0" data-semantic-parent="2" data-semantic-complexity="1">a</mi>
									  </mroot>
									</math>
								</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'cos')}>
									<math xmlns="http://www.w3.org/1998/Math/MathML" data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-id="4" data-semantic-children="0,2" data-semantic-content="3,0" data-semantic-complexity="7">
									  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="0" data-semantic-parent="4" data-semantic-operator="appl" data-semantic-complexity="2">cos</mi>
									  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl" data-semantic-complexity="1">&#x2061;</mo>
									</math>						
								</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'lt')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x003C;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'gt')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x003E;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'lte')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x2264;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'gte')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x2265;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'tan')}>
									<math xmlns="http://www.w3.org/1998/Math/MathML" data-semantic-type="appl" data-semantic-role="prefix function" data-semantic-id="4" data-semantic-children="0,2" data-semantic-content="3,0" data-semantic-complexity="7">
									  <mi data-semantic-type="function" data-semantic-role="prefix function" data-semantic-font="normal" data-semantic-id="0" data-semantic-parent="4" data-semantic-operator="appl" data-semantic-complexity="2">tan</mi>
									  <mo data-semantic-type="punctuation" data-semantic-role="application" data-semantic-id="3" data-semantic-parent="4" data-semantic-added="true" data-semantic-operator="appl" data-semantic-complexity="1">&#x2061;</mo>
									</math>				
								</button>
							</div>
							<div>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, '(')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>(</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, ')')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>)</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'indef-integrals')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x222B;</mo></math></button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'def-integrals')}>
									<math xmlns="http://www.w3.org/1998/Math/MathML" data-semantic-complexity="7.6">
									  <msubsup data-semantic-type="limboth" data-semantic-role="integral" data-semantic-id="3" data-semantic-children="0,1,2" data-semantic-complexity="7.6">
									    <mo data-semantic-type="largeop" data-semantic-role="integral" data-semantic-id="0" data-semantic-parent="3" data-semantic-complexity="1">&#x222B;</mo>
									    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="1" data-semantic-parent="3" data-semantic-complexity="1">b</mi>
									    <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-id="2" data-semantic-parent="3" data-semantic-complexity="1">a</mi>
									  </msubsup>
									</math>
								</button>
								<button type="button" className="btn btn-default btn-lg" onClick={this.onEquationClick.bind(this, 'equal')}><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#61;</mo></math></button>
							</div>
						</div>
					</div>
				</Panel>
			</div>

		)
	},
	onEquationClick: function(type){
		var self = this;
		switch(type){
			case 'add':
				this.props.onEquationClick('+');
				break;
			case 'subtract':
				this.props.onEquationClick('-');
				break;
			case 'multiple':
				this.props.onEquationClick('\\times');
				break;
			case 'divide':
				this.props.onEquationClick('\\div');
				break;
			case 'lt':
				this.props.onEquationClick('\\lt');
				break;
			case 'gt':
				this.props.onEquationClick('\\gt');
				break;
			case 'lte':
				this.props.onEquationClick('\\le');
				break;
			case 'gte':
				this.props.onEquationClick('\\ge');
				break;
			case 'equal':
				this.props.onEquationClick('=');
				break;
			// case 'parenthesis':
			// 	this.props.onEquationClick('\\left(n\\right)');
			// 	break;
			case 'indef-integrals':
				this.props.onEquationClick('\\int');
				break;
			case 'def-integrals':
				// this.props.onEquationClick('\\int_n^y');
				this.props.onSpecialClick(type, 2, function(a, b){
					self.props.onEquationClick('\\int_{' + a + '}^{' + b + '}', 'special');
				});
				break;
			case 'sin':
				// this.props.onEquationClick('\\sin x');
				this.props.onSpecialClick(type, 1, function(a, b){
					self.props.onEquationClick('\\sin {' + a + '}', 'special');
				});
				break;
			case 'cos':
				// this.props.onEquationClick('\\cos x');
				this.props.onSpecialClick(type, 1, function(a, b){
					self.props.onEquationClick('\\cos {' + a + '}', 'special');
				});
				break;
			case 'tan':
				// this.props.onEquationClick('\\tan x');
				this.props.onSpecialClick(type, 1, function(a, b){
					self.props.onEquationClick('\\tan {' + a + '}', 'special');
				});
				break;
			case 'fraction':
				this.props.onSpecialClick(type, 2, function(a, b){
					self.props.onEquationClick('\\frac{' + a + '}{' + b + '}', 'special');
				});
				break;
			case 'exponentiation':
				this.props.onSpecialClick(type, 2, function(a, b){
					self.props.onEquationClick(a + '^{' + b + '}', 'special');
				});

				break;
			case 'sqrt':
				this.props.onSpecialClick(type, 1, function(a, b){
					self.props.onEquationClick('\\sqrt{' + a + '}', 'special');
				});
				break;
			case 'n-sqrt':
				this.props.onSpecialClick(type, 2, function(a, b){
					self.props.onEquationClick('\\sqrt[' + a + ']{' + b + '}', 'special');
				});
				break;
			default: // valid default: [a, b, x, y, (, )]
				this.props.onEquationClick(type);
				break;

		}
		// this.props.onEquationClick(type);
	}
});