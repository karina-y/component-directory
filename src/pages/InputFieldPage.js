import React from 'react';
import { Container } from 'react-bootstrap';
import InputField from '../components/InputField/InputField';

const InputFieldPage = props => (
		<div className="InputFieldPage">
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
						errorMessage={} />
		  </div>
		</div>
)

export default InputFieldPage;
