import React from 'react';
import { Container } from 'react-bootstrap'
import ParallaxBanner from '../components/ParallaxBanner/ParallaxBanner'


const ParallaxBannerPage = props => (
		<Container className="ParallaxBannerPage">
		  <div className="component-container" id="parallaxbanner">
			<h1>ParallaxBanner</h1>

			<ParallaxBanner image="landscape_01"
							buttonClasses="dark-pink-btn popup"
							navigateTo="#parallaxbanner"
							buttonText="Parallax Banner"
							buttonSize="large"
							history={props.history} />
		  </div>
		</Container>
);

ParallaxBannerPage.defaultProps = {

};

ParallaxBannerPage.propTypes = {
};

export default ParallaxBannerPage;
