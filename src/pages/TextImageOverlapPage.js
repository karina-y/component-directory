import React from 'react';
import { Container } from 'react-bootstrap';
import TextImageOverlap from '../components/TextImageOverlap/TextImageOverlap';


const TextImageOverlapPage = props => (
		<Container className="TextImageOverlapPage">
		  <div className="component-container" id="textimageoverlap">
			<h1>TextImageOverlap: left</h1>

			<TextImageOverlap imagePlacement="left"
							  mainImage="/images/landscape_01.jpeg"
							  subImage="/images/landscape_02.jpg"
							  mainImageAlt="Bulletproof Supplements"
							  subImageAlt="Bulletproof Supplements"
							  text={<div className="supplements">
								<div>Top Notch Supplements and Supplementation to Reach Peak Performance.</div>
								<div><span className="quote">“In my Neurofeedback journey I discovered I could go twice as long if I was eating the right foods
								and taking the right supplements. I made sure you get everything you need."</span> <span className="quoter">- Dave Asprey</span></div>
							  </div>}
			/>

		  </div>
		</Container>
);

TextImageOverlapPage.defaultProps = {

};

TextImageOverlapPage.propTypes = {
};

export default TextImageOverlapPage;
