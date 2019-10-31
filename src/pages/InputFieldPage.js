import React from 'react';
import { Container } from 'react-bootstrap';
import InputField from '../components/InputField/InputField'

const InputFieldPage = props => (
		<Container className="InputFieldPage">
		  <div className="component-container" id="accordion">
			<h1>InputFieldPage</h1>
			<InputField controlId="titleField"
						type="text"
						placeholder="Title"
						class={}
						value={}
						validateAs="string"
						property={}
						error={}
						errorMessage={}
		  </div>
		</Container>
);

InputFieldPage.defaultProps = {

};

InputFieldPage.propTypes = {
};

export default InputFieldPage;
