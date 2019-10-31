import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './InputField.scss';
import { FormControl, FormGroup } from 'react-bootstrap';

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
							 className={this.props.class}
							 value={this.props.value}
							 onChange={(e) => this.handleValidation(this.props.property, e)}/>
				<div className={`error-message ${this.props.error === true ? 'slide-down' : ''}`}>
				  {this.props.errorMessage}
				</div>
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
  value: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  property: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  validateAs: PropTypes.string.isRequired,
};

export default InputField;



