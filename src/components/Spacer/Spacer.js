
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './Spacer.scss';

class Spacer extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }


  render() {

	return (
			<div className={`Spacer pad-${this.props.margin}`} style={{backgroundColor: this.props.background || 'transparent'}}>
			</div>
	)
  }
}


Spacer.propTypes = {
  margin: PropTypes.number.isRequired,
  background: PropTypes.string
};

export default Spacer;



