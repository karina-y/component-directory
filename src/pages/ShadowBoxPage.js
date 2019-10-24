import React from 'react';
import { Container, Row } from 'react-bootstrap'
import ShadowBox from '../components/ShadowBox/ShadowBox'


const ShadowBoxPage = props => (
		<Container className="ShadowBoxPage">
		  <div className="component-container" id="shadowbox">
			<h1>ShadowBox</h1>

			<Row>
			  <ShadowBox hoverAction={true}
						 popoutHover={false}
						 shadowLevel={4}
						 bootstrapColClasses={"col-sm-6"}>
				Shadow
			  </ShadowBox>

			  <ShadowBox hoverAction={true}
						 popoutHover={true}
						 shadowLevel={4}
						 bootstrapColClasses={"col-sm-6"}>
				Popout
			  </ShadowBox>
			</Row>

		  </div>
		</Container>
);

ShadowBoxPage.defaultProps = {

};

ShadowBoxPage.propTypes = {
};

export default ShadowBoxPage;
