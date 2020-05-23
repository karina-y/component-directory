
import React from 'react';
import PropTypes from 'prop-types';
import './TextImageOverlap.scss';
import Fade from 'react-reveal/Fade';

const TextImageOverlap = props => (

		props.imagePlacement === "left" ?

				<div className={`TextImageOverlap ${props.additionalOuterClasses || ''} image-left`}>
				  <div className="left images">
					<Fade up={true}
						  duration={600}
						  delay={200}>
					  <img alt={props.mainImageAlt} src={props.mainImage} className="main-image"/>
					</Fade>

					<Fade up={true}
						  duration={600}
						  delay={100}>
					  <img alt={props.subImageAlt} src={props.subImage} className="sub-image"/>
					</Fade>

				  </div>

				  <Fade up={true}
						duration={600}
						delay={200}>
					<div className="right text">
					  {props.titleText &&
					  <span className="title-style">
						{props.titleText}
					  </span>
					  }

					  {props.subText &&
					  <span className="sub-style">
						{props.subText}
					  </span>
					  }
					</div>
				  </Fade>
				</div>

				:

				<div className={`TextImageOverlap ${props.additionalOuterClasses || ''} image-right`}>
				  <Fade up={true}
						duration={600}
						delay={200}>
					<div className="left text">
					  {props.titleText &&
					  <span className="title-style">
						{props.titleText}
					  </span>
					  }

					  {props.subText &&
					  <span className="sub-style">
						{props.subText}
					  </span>
					  }
					</div>
				  </Fade>

				  <div className="right images">
					<Fade up={true}
						  duration={600}
						  delay={200}>
					  <img alt={props.mainImageAlt} src={props.mainImage} className="main-image"/>
					</Fade>

					<Fade up={true}
						  duration={600}
						  delay={100}>
					  <img alt={props.subImageAlt} src={props.subImage} className="sub-image"/>
					</Fade>

				  </div>
				</div>
)

/*  ACCEPTABLE PROP VALUES
    imagePlacement:            	string "left" or "right ONLY
    mainImage:					string image url
    subImage:					string image url
    text:						string text
	additionalOuterClasses:		any extra classes you wanna add so you can add new styles
 */


TextImageOverlap.propTypes = {
  imagePlacement: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  subImage: PropTypes.string.isRequired,
  mainImageAlt: PropTypes.string.isRequired,
  subImageAlt: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired,
  additionalOuterClasses: PropTypes.string
};


export default TextImageOverlap;
