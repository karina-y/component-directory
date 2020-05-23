import React from 'react';
import { Container } from 'react-bootstrap';
import TwoColumnFade from '../components/TwoColumnFade/TwoColumnFade';
import Spacer from '../components/Spacer/Spacer'


const TwoColumnFadePage = props => (
		<div className="TwoColumnFadePage">
		  <div className="component-container" id="twocolumnfade">
			<h1>TwoColumnFade: left image</h1>

			<TwoColumnFade leftItem="image"
						   leftContent="/images/angelslanding_768.jpg"
						   rightContent={<div className="findme">
							 hi there
						   </div>} />

			<Spacer margin={100}/>

			<h1>TwoColumnFade: right image</h1>

			<TwoColumnFade leftItem="text"
						   rightContent="/images/angelslanding_768.jpg"
						   leftContent={<div className="findme">
							 hi there
						   </div>} />

		  </div>
		</div>
);

TwoColumnFadePage.defaultProps = {

};

TwoColumnFadePage.propTypes = {
};

export default TwoColumnFadePage;
