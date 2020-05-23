
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './Buttons.scss';
import { Button } from 'react-bootstrap'

class Buttons extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }


  render() {

	return (
			<div className="Buttons">
			  <div>
				<h3>Underline Button</h3>
				<Button className="underline-btn" variant="default">Underline Btn</Button>
				<Button className="underline-btn active" variant="default">Underline Btn (active)</Button>
			  </div>

			  <div>
				<h3>Popup Button</h3>
				<Button className="magenta-btn popup">Magenta</Button>
				<Button className="pink-light-btn popup">Light Pink</Button>
				<Button className="pink-dark-btn popup">Dark Pink</Button>
				<Button className="blue-light-btn popup">Light Blue</Button>
				<Button className="blue-dark-btn popup">Dark Blue</Button>
				<Button className="purple-light-btn popup">Light Purple</Button>
				<Button className="purple-dark-btn popup">Dark Purple</Button>

				<Button className="popup" variant="success">Success</Button>
				<Button className="popup" variant="info">Info</Button>
				<Button className="popup" variant="danger">Danger</Button>
				<Button className="popup" variant="warning">Warning</Button>
			  </div>

			  <div>
				<h3>Regular Button</h3>
				<Button className="magenta-btn">Magenta</Button>
				<Button className="pink-light-btn">Light Pink</Button>
				<Button className="pink-dark-btn">Dark Pink</Button>
				<Button className="blue-light-btn">Light Blue</Button>
				<Button className="blue-dark-btn">Dark Blue</Button>
				<Button className="purple-light-btn">Light Purple</Button>
				<Button className="purple-dark-btn">Dark Purple</Button>

				<Button variant="success">Success</Button>
				<Button variant="info">Info</Button>
				<Button variant="danger">Danger</Button>
				<Button variant="warning">Warning</Button>
			  </div>

			  <div>
				<h3>Regular Button (inverted)</h3>
				<Button className="invert magenta-btn">Magenta</Button>
				<Button className="invert pink-light-btn">Light Pink</Button>
				<Button className="invert pink-dark-btn">Dark Pink</Button>
				<Button className="invert blue-light-btn">Light Blue</Button>
				<Button className="invert blue-dark-btn">Dark Blue</Button>
				<Button className="invert purple-light-btn">Light Purple</Button>
				<Button className="invert purple-dark-btn">Dark Purple</Button>

				<Button className="invert" variant="success">Success</Button>
				<Button className="invert" variant="info">Info</Button>
				<Button className="invert" variant="danger">Danger</Button>
				<Button className="invert" variant="warning">Warning</Button>
			  </div>

			  <div>
				<h3>Naked Button</h3>
				<Button className="naked">Naked</Button>
			  </div>

			  <div>
				<h3>Sizes</h3>
				<Button variant="success" size="sm">Small</Button>
				<Button variant="info" size="md">Medium</Button>
				<Button variant="danger" size="lg">Large</Button>
			  </div>
			</div>
	)
  }
}


Buttons.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  idPrefix: PropTypes.string
  // content: PropTypes.string.isRequired,
};

export default Buttons;



