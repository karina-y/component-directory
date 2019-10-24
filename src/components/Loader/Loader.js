
import React from 'react';
import './Loader.scss';

const Loader = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
	return <div className="Loader loading">
	  <div className="dots-container">
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
	  </div>
	</div>;
  }
  // Handle the error state
  else if (error) {
	return <div className="Loader err">
	  <div className="dots-container">
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
	  </div>
	</div>;
  }
  else {
	return <div className="Loader default">
	  <div className="dots-container">
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
		<div className="dots"></div>
	  </div>

	</div>
  }
};

export default Loader
