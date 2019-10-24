
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ParallaxBanner.scss';
import { Button } from 'react-bootstrap'

class ParallaxBanner extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }

  handleClick() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	this.props.history.push(this.props.navigateTo);
  }

  render() {

	return (
			<div className={`ParallaxBanner ${this.props.additionalOuterClasses || ''}`}>
			  <div className={`background ${this.props.image}`}></div>

			  {/*{this.props.content ?*/}
			  {/*<div className="content">{this.props.content}</div>*/}
			  {/*: ''*/}
			  {/*}*/}

			  <div className="content">
				<Button size={this.props.buttonSize}
						className={this.props.buttonClasses}
						onClick={this.handleClick}>
				  {this.props.buttonText}
				</Button>
			  </div>


			</div>
	)
  }
}


ParallaxBanner.propTypes = {
  image: PropTypes.string.isRequired,	//this is done in scss to in breakpoints region, shouldn't be url
  content: PropTypes.object,
  additionalOuterClasses: PropTypes.string,
  buttonClasses: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonSize: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default ParallaxBanner;



