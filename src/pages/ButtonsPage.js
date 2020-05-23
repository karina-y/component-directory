import React from 'react';
import Buttons from '../components/Buttons/Buttons';
import { Container } from 'react-bootstrap'


const ButtonsPage = props => (
		<div className="ButtonsPage">

		  <div className="component-container" id="accordion">
			<h1>ButtonsPage</h1>
			<Buttons index={0} title="Accordion Panel Title" content="Accordion Panel Content" />
		  </div>


		</div>
);

ButtonsPage.defaultProps = {

};

ButtonsPage.propTypes = {
};

export default ButtonsPage;
