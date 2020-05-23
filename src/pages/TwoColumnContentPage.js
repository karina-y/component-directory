import React from 'react';
import { Container } from 'react-bootstrap';
import TwoColumnContent from '../components/TwoColumnContent/TwoColumnContent';
import Spacer from '../components/Spacer/Spacer'


const TwoColumnContentPage = props => (
		<div className="TwoColumnContentPage">
		  <div className="component-container" id="twocolumncontent">
			<h1>TwoColumnContent: left image</h1>

			<TwoColumnContent leftItem="image"
							  leftContent="/images/angelslanding_768.jpg"
							  rightContent={<div className="findme">
								hi there
							  </div>} />

			<Spacer margin={100}/>

			<h1>TwoColumnContent: right image</h1>

			<TwoColumnContent leftItem="text"
							  rightContent="/images/angelslanding_768.jpg"
							  leftContent={<div className="findme">
								hi there
							  </div>} />

		  </div>
		</div>
);

TwoColumnContentPage.defaultProps = {

};

TwoColumnContentPage.propTypes = {
};

export default TwoColumnContentPage;
