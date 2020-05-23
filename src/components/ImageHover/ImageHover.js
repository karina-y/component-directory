
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ImageHover.scss';
import ColorEnums from '../../utils/colors';

const COLOR_ENUMS = ColorEnums.COLOR_ENUMS;

class ImageHover extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }


  render() {

	return (
			<div className={`ImageHover content ${this.props.additionalOuterClasses || ''}`} style={{width: this.props.width, height: this.props.height}}>

				<div className="grid">
				  <figure className={`effect-${this.props.effect}`}
						  style={this.props.effect !== "oscar" && this.props.effect !== "dexter" && this.props.effect !== "roxy" ? {backgroundColor: this.props.backgroundColor || COLOR_ENUMS.brandBlue} : {}}>

					<div style={{backgroundImage: `url('${this.props.image}')`}} className="image" />
					<figcaption>
					  <div>
						{this.props.title}
						<p>{this.props.subtitle}</p>
						{this.props.children}
					  </div>
					</figcaption>
				  </figure>
				</div>

			  </div>
	)
  }
}

/*
	effect options are: lily, sadie, honey, layla, zoe, oscar, marley, ruby, roxy, bubba, romeo, dexter, sarah, chico, milo
	title should come in the format of an h4 with an optional span (to make the text bold) within the h4, ie <h4>hi there</h4> OR <h4>hi <span>there</span></h4>
*/

ImageHover.propTypes = {
  effect: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  subtitle: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string, //if nothing is provided will default to brandBlue. will not apply to oscar, dexter, or roxy
  duration: PropTypes.number,
  delay: PropTypes.number,
  additionalOuterClasses: PropTypes.string,
};

export default ImageHover;



