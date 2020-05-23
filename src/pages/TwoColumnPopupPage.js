import React from 'react';
import { Container } from 'react-bootstrap';
import TwoColumnPopup from '../components/TwoColumnPopup/TwoColumnPopup';
import Spacer from '../components/Spacer/Spacer'
import ShadowBox from '../components/ShadowBox/ShadowBox'


const TwoColumnPopupPage = props => (
		<div className="TwoColumnPopupPage">
		  <div className="component-container" id="twocolumnpopup">
			<h1>TwoColumnPopup: left image</h1>

			<TwoColumnPopup leftItem="image"
							rightItem="text"
							leftContent="/images/angelslanding_768.jpg"
							rightContent={<ShadowBox shadowLevel={4} hoverAction={false} popoutHover={false}>
							  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</ShadowBox>} />

			<Spacer margin={100}/>

			<h1>TwoColumnPopup: right image</h1>

			<TwoColumnPopup leftItem="text"
							rightItem="image"
							leftContent={<ShadowBox shadowLevel={4} hoverAction={false} popoutHover={false}>
							  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</ShadowBox>}
							rightContent="/images/angelslanding_768.jpg" />

		  </div>
		</div>
);

TwoColumnPopupPage.defaultProps = {

};

TwoColumnPopupPage.propTypes = {
};

export default TwoColumnPopupPage;
