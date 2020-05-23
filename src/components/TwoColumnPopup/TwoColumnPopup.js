
import React from 'react';
import PropTypes from 'prop-types';
import './TwoColumnPopup.scss';
import { Container, Grid } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

class TwoColumnPopup extends React.Component {
  constructor(props) {
	super(props);

	this.state = {

	}
  }

  render() {

	const additionalOuterClasses = this.props.additionalOuterClasses ? this.props.additionalOuterClasses : '';

	return (
			<Container className={`TwoColumnPopup ${additionalOuterClasses}`}>
			  {this.props.leftItem === "image" ?
					  <Fade up={true}
							duration={this.props.imageDuration}
							delay={this.props.delay}>
						<div className={`left ${this.props.leftItem}`} style={{backgroundImage: `url('${this.props.leftContent}')`}}>
						</div>
					  </Fade>
					  :
					  <Fade up={true}
							duration={this.props.textDuration}
							delay={this.props.delay}>
						<div className={`left focus ${this.props.leftItem}`}>
						  {this.props.leftContent}
						</div>
					  </Fade>
			  }


			  {this.props.rightItem === "image" ?
					  <Fade up={true}
							duration={this.props.imageDuration}
							delay={this.props.delay}>
						<div className={`right ${this.props.rightItem}`} style={{backgroundImage: `url('${this.props.rightContent}')`}}>
						</div>
					  </Fade>
					  :
					  <Fade up={true}
							duration={this.props.textDuration}
							delay={this.props.delay}>
						<div className={`right focus ${this.props.rightItem}`}>
						  {this.props.rightContent}
						</div>
					  </Fade>
			  }
			</Container>
	)
  }
}

/*  ACCEPTABLE PROP VALUES
    focus:            			string "left" or "right ONLY
	leftItem/rightItem:         a string defining the type sending over, can be either "image" or "text" ONLY. if adding new types please update this comment.
	leftContent/rightContent:	an html element, ie <img alt="meaningful text" src="/" /> or <div>hi</div>
	additionalOuterClasses:		any extra classes you wanna add so you can add new styles
 */


TwoColumnPopup.propTypes = {
  leftItem: PropTypes.string.isRequired,
  rightItem: PropTypes.string.isRequired,
  additionalOuterClasses: PropTypes.string,
  imageDuration: PropTypes.number,
  textDuration: PropTypes.number,
  delay: PropTypes.number,
};


export default TwoColumnPopup;
