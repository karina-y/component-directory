import React from 'react';
import { Container } from 'react-bootstrap';
import Loader from '../components/Loader/Loader';


const LoaderPage = props => (
		<Container className="LoaderPage">
		  <div className="component-container" id="loader">
			<h1>Loader</h1>
			<Loader isLoading={true}/>
		  </div>

		</Container>
);

LoaderPage.defaultProps = {

};

LoaderPage.propTypes = {
};

export default LoaderPage;
