import React from 'react';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import DummyData from '../utils/dummyData';

const NOEXT = DummyData.Images.NOEXT;

const ImageCarouselPage = props => (
		<div className="ImageCarouselPage">

		  <div className="component-container" id="imagecarousel">
			<h1>ImageCarousel</h1>
			<ImageCarousel grid={false} modal={false} images={NOEXT} id="carousel-1" />
		  </div>

		  <div className="component-container">
			<h1>ImageCarousel: grid</h1>
			<ImageCarousel grid={true} modal={false} images={NOEXT} id="carousel-2" />
		  </div>

		  <div className="component-container">
			<h1>ImageCarousel: modal</h1>
			<ImageCarousel grid={true} modal={true} images={NOEXT} id="carousel-3" />
		  </div>


		</div>
);

ImageCarouselPage.defaultProps = {

};

ImageCarouselPage.propTypes = {
};

export default ImageCarouselPage;
