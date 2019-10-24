
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './Hero.scss';

class Hero extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }

  render() {

	return (
			this.props.particles ?
					<div className="Hero with-particles">

					  {this.props.overlay ?
							  <div className="overlay">
							  </div>
							  : this.props.overlay ?
									  <div className="overlay">
									  </div>
									  : ''
					  }

					  <ParticleHero hero={true} particleCount={this.props.particleCount} particleColor={this.props.particleColor} />


					  <div className="hero-text">
						<h4 className="hero-title">{this.props.title}</h4>

						{
						  this.props.tagline
								  ?
								  <span className="hero-tagline">{this.props.tagline}</span>
								  :
								  ''
						}

					  </div>
					</div>
					:

					<div className={`Hero ${this.props.colorOverlay ? 'color-overlay' : ''}`}>

					  {this.props.overlay ?
							  <div className="overlay">
							  </div>
							  : this.props.overlay ?
									  <div className="overlay">
									  </div>
									  : ''
					  }


					  <div className="hero-text">
						<h4 className="hero-title">{this.props.title}</h4>

						{
						  this.props.tagline
								  ?
								  <span className="hero-tagline">{this.props.tagline}</span>
								  :
								  ''
						}

					  </div>
					</div>
	)
  }
}


Hero.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  // image: PropTypes.string.isRequired,	//due to page loading speeds this is done per parent component's scss file
  overlay: PropTypes.bool,
  colorOverlay: PropTypes.bool,
  particles: PropTypes.bool,
  particleCount: PropTypes.number,
  particleColor: PropTypes.string
};

export default Hero;



