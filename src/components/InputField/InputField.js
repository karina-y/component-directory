import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './InputField.scss';
import { FormControl, FormGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class InputField extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }

  handleValidation() {
	const validateAs = this.props.validateAs;

	if (validateAs === "string") {

	} else if (validateAs === "phone") {

	} else if (validateAs === "email") {

	} else if (validateAs === "boolean") {

	} else if (validateAs === "html") {

	} else if (validateAs === "email") {

	} else if (validateAs === "email") {

	} else if (validateAs === "email") {

	}
  }

  render() {

	return (
			<div className={`InputField ${this.props.bootstrapColClasses ? this.props.bootstrapColClasses : ''}`}>
			  <FormGroup controlId={this.props.controlId}>
				<FormControl type={this.props.type}
							 placeholder={this.props.placeholder}
							 className={`${this.props.class} ${this.props.sideIcon ? 'side-icon' : ''}`}
							 value={this.props.value || ''}
							 onChange={this.props.handleChange ? (e) => this.props.handleChange(e) : (e) => this.handleValidation(this.props.property, e)}/>


				{this.props.sideIcon &&
				<FontAwesomeIcon icon={this.props.sideIcon} title={this.props.placeholder} />
				}

				{this.props.errorMessage &&
				<div className={`error-message ${this.props.error === true ? 'slide-down' : ''}`}>
				  {this.props.errorMessage}
				</div>
				}

			  </FormGroup>
			</div>
	)
  }
}


InputField.propTypes = {
  bootstrapColClasses: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  value: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  property: PropTypes.string,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  validateAs: PropTypes.string,
  sideIcon: PropTypes.object
};

export default InputField;



