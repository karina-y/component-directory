import React from 'react';
import AccordionPanel from '../components/AccordionPanel/AccordionPanel';
import { Container } from 'react-bootstrap'


const AccordionPanelPage = props => (
		<div className="AccordionPanelPage">

		  <div className="component-container" id="accordion">
			<h1>AccordionPanelPage</h1>
			<AccordionPanel index={0} title="Accordion Panel Title" content="Accordion Panel Content" />
		  </div>


		</div>
);

AccordionPanelPage.defaultProps = {

};

AccordionPanelPage.propTypes = {
};

export default AccordionPanelPage;
