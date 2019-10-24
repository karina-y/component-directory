import React from 'react';
import { Container } from 'react-bootstrap'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel'

const images = [
  {image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&w=1000&q=80", title: "image title"},
  {image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&w=1000&q=80", title: "image title"},
  {image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&w=1000&q=80", title: "image title"},
  {image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&w=1000&q=80", title: "image title"},
  {image: "https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: "image title"},
];

const ImageCarouselPage = props => (
		<Container className="ImageCarouselPage">

		  <div className="component-container" id="imagecarousel">
			<h1>ImageCarousel</h1>
			<ImageCarousel grid={false} modal={false} images={images} id="carousel-1" />
		  </div>

		  <div className="component-container">
			<h1>ImageCarousel: grid</h1>
			<ImageCarousel grid={true} modal={false} images={images} id="carousel-2" />
		  </div>

		  <div className="component-container">
			<h1>ImageCarousel: modal</h1>
			<ImageCarousel grid={true} modal={true} images={images} id="carousel-3" />
		  </div>


		</Container>
);

ImageCarouselPage.defaultProps = {

};

ImageCarouselPage.propTypes = {
};

export default ImageCarouselPage;
