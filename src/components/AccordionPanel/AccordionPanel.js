
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './AccordionPanel.scss';

class AccordionPanel extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }


  render() {

	return (
			<div className="AccordionPanel">
			  <div className="content">
				{this.props.idPrefix ?
						<input id={`${this.props.idPrefix}-q${this.props.index}`} type="checkbox" className="panel" />
						:
						<input id={`q${this.props.index}`} type="checkbox" className="panel" />
				}

				<div className="plus">+</div>

				{this.props.idPrefix ?
						<label htmlFor={`${this.props.idPrefix}-q${this.props.index}`} className="panel-title">{this.props.title}</label>
						:
						<label htmlFor={`q${this.props.index}`} className="panel-title">{this.props.title}</label>
				}

				<div className="panel-content">{this.props.content}</div>
			  </div>
			</div>
	)
  }
}


AccordionPanel.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  idPrefix: PropTypes.string
  // content: PropTypes.string.isRequired,
};

export default AccordionPanel;



