
import React from 'react';
import './TwoColumnFade.scss';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';


class TwoColumnFade extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  leftItem: props.leftItem,
	  rightItem: props.rightItem,
	  leftContent: props.leftContent,
	  rightContent: props.rightContent,
	  additionalOuterClasses: props.additionalOuterClasses,
	}
  }


  render() {

	const additionalOuterClasses = this.props.additionalOuterClasses ? this.props.additionalOuterClasses : '';

	return (
			<div className={`TwoColumnFade ${additionalOuterClasses}`}>

			  {this.props.topLabel && <h4 className="top-label title">{this.props.topLabel}</h4>}


			  {this.props.leftItem === "image" ?
					  <div className="left image"
						   style={{backgroundImage: `linear-gradient(-45deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, .7), rgba(255, 255, 255, 0.1), rgba(255,255,255,0), rgba(255,255,255,0)), url(${this.props.leftContent})`}}>
					  </div>
					  :
					  <Fade left={true}
							duration={1000}
							delay={100}>
						<div className="left text">
						  {this.props.leftContent}
						</div>
					  </Fade>
			  }

			  {this.props.leftItem === "text" ?
					  <div className="right image"
						   style={{backgroundImage: `linear-gradient(-130deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, .1), rgba(255, 255, 255, 0.7), rgba(255,255,255,1), rgba(255,255,255,1)), url(${this.props.rightContent})`}}>
					  </div>
					  :
					  <Fade right={true}
							duration={1000}
							delay={100}>
						<div className="right text">
						  {this.props.rightContent}
						</div>
					  </Fade>
			  }
			</div>
	)
  }
}

/*  ACCEPTABLE PROP VALUES
	leftItem/rightItem:         a string defining the type sending over, can be either "image" or "text" ONLY. if adding new types please update this comment.
	leftContent/rightContent:	a string, this is done in scss to in breakpoints region, shouldn't be url
	additionalOuterClasses:		any extra classes you wanna add so you can add new styles
 */

TwoColumnFade.propTypes = {
  leftItem: PropTypes.string.isRequired,
  // rightItem: PropTypes.string.isRequired,
  additionalOuterClasses: PropTypes.string,
  topLabel: PropTypes.string,
};

export default TwoColumnFade;



