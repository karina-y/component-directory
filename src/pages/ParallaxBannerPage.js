import React from 'react';
import { Container } from 'react-bootstrap'
import ParallaxBanner from '../components/ParallaxBanner/ParallaxBanner'


const ParallaxBannerPage = props => (
		<div className="ParallaxBannerPage">
		  <div className="component-container" id="parallaxbanner">
			<h1>ParallaxBanner</h1>

			<ParallaxBanner image="badwater"
							buttonClasses="pink-dark-btn popup"
							navigateTo="#parallaxbanner"
							buttonText="Parallax Banner"
							buttonSize="large"
							history={props.history} />
		  </div>
		</div>
);

ParallaxBannerPage.defaultProps = {

};

ParallaxBannerPage.propTypes = {
};

export default ParallaxBannerPage;
