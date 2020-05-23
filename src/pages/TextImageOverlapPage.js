import React from 'react';
import TextImageOverlap from '../components/TextImageOverlap/TextImageOverlap';
import Spacer from '../components/Spacer/Spacer'


const TextImageOverlapPage = props => (
		<div className="TextImageOverlapPage">
		  <div className="component-container" id="textimageoverlap">
			<h1>TextImageOverlap: image left</h1>

			<TextImageOverlap imagePlacement="left"
							  mainImage="/images/bentonite_768.jpg"
							  subImage="/images/bryce_350.jpg"
							  mainImageAlt="Bentonite Hills"
							  subImageAlt="Bryce Canyon"
							  titleText="TITLE Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
							  subText="SUB Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />

			<Spacer margin={100}/>

			<h1>TextImageOverlap: image right</h1>

			<TextImageOverlap imagePlacement="right"
							  mainImage="/images/bentonite_768.jpg"
							  subImage="/images/bryce_350.jpg"
							  mainImageAlt="Bentonite Hills"
							  subImageAlt="Bryce Canyon"
							  titleText="TITLE Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
							  subText="SUB Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />

		  </div>
		</div>
);

TextImageOverlapPage.defaultProps = {

};

TextImageOverlapPage.propTypes = {
};

export default TextImageOverlapPage;
