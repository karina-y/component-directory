import React from 'react';
import TwoColumnText from '../components/TwoColumnText/TwoColumnText';
import Spacer from '../components/Spacer/Spacer'


const TwoColumnTextPage = props => (
		<div className="TwoColumnTextPage">
		  <div className="component-container" id="twocolumntext">
			<h1>TwoColumnText</h1>

			<TwoColumnText leftContent={<div className="findme">
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
			</div>}
						   rightContent={<div className="findme">
							 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
						   </div>} />


		  </div>
		</div>
);

TwoColumnTextPage.defaultProps = {

};

TwoColumnTextPage.propTypes = {
};

export default TwoColumnTextPage;
