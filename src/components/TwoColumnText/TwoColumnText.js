
import React from 'react';
import './TwoColumnText.scss';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

class TwoColumnText extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  leftContent: props.leftContent,
	  rightContent: props.rightContent,
	  additionalOuterClasses: props.additionalOuterClasses,
	}
  }


  render() {

	const additionalOuterClasses = this.props.additionalOuterClasses ? this.props.additionalOuterClasses : '';

	return (

			<div className={`TwoColumnText ${additionalOuterClasses}`}>

			  <Fade left={true}
					duration={300}
					delay={200}
					scroll={true}>
				<div className="left">
				  {this.props.leftContent}
				</div>
			  </Fade>

			  <Fade right={true}
					duration={300}
					delay={300}>
				<div className="right">
				  {this.props.rightContent}
				</div>
			  </Fade>

			</div>
	)
  }
}

/*  ACCEPTABLE PROP VALUES
	leftContent/rightContent:   a string or html of text
	additionalOuterClasses:		any extra classes you wanna add so you can add new styles
 */

TwoColumnText.propTypes = {
  additionalOuterClasses: PropTypes.string
};

export default TwoColumnText;



