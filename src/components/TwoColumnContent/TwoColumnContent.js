
import React from 'react';
import './TwoColumnContent.scss';
import PropTypes from 'prop-types';


class TwoColumnContent extends React.Component {
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
			<div className={`TwoColumnContent ${additionalOuterClasses}`}>

			  {this.props.topLabel && <h4 className="top-label title">{this.props.topLabel}</h4>}

			  {this.props.leftItem === "image" ?
					  <div className={`left ${this.props.leftItem}`} style={{backgroundImage: `url('${this.props.leftContent}')`}}>
					  </div>
					  :
					  <div className={`left ${this.props.leftItem}`}>
						{this.props.leftContent}
					  </div>
			  }


			  {this.props.rightItem === "image" ?
					  <div className={`right ${this.props.rightItem}`} style={{backgroundImage: `url('${this.props.rightContent}')`}}>
					  </div>
					  :
					  <div className={`right ${this.props.rightItem}`}>
						{this.props.rightContent}
					  </div>
			  }
			</div>
	)
  }
}

/*  ACCEPTABLE PROP VALUES
	leftItem/rightItem:         a string defining the type sending over, can be either "image" or "text" ONLY. if adding new types please update this comment.
	leftContent/rightContent:	an html element, ie <img alt="meaningful text" src="/" /> or <div>hi</div>
	additionalOuterClasses:		any extra classes you wanna add so you can add new styles
 */

TwoColumnContent.propTypes = {
  leftItem: PropTypes.string.isRequired,
  // rightItem: PropTypes.string.isRequired,
  additionalOuterClasses: PropTypes.string,
  topLabel: PropTypes.string,
};

export default TwoColumnContent;



