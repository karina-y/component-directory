import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

class ToastMe extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }

  handleSuccess(msg) {
	toast.success(msg, {
	  position: "top-right",
	  autoClose: 5000,
	  hideProgressBar: false,
	  closeOnClick: true,
	  pauseOnHover: true,
	  draggable: true
	});
  }

  handleInfo(msg) {
	toast.info(msg, {
	  position: "top-right",
	  autoClose: 5000,
	  hideProgressBar: false,
	  closeOnClick: true,
	  pauseOnHover: true,
	  draggable: true
	});
  }

  handleError(msg) {
	toast.error(msg || "An error has occured, please refresh and try again.", {
	  position: "top-right",
	  autoClose: 5000,
	  hideProgressBar: false,
	  closeOnClick: true,
	  pauseOnHover: true,
	  draggable: true
	});
  }

  handleWarn(msg) {
	toast.warn(msg, {
	  position: "top-right",
	  autoClose: 5000,
	  hideProgressBar: false,
	  closeOnClick: true,
	  pauseOnHover: true,
	  draggable: true
	});
  }

  render() {

	return (
			<ToastContainer position="top-right"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop
							closeOnClick
							rtl={false}
							pauseOnVisibilityChange={false}
							draggable
							pauseOnHover />
	)
  }
}


ToastMe.propTypes = {
  // notificationType: PropTypes.string.isRequired,	//should be string of either "error", "success", "info", or "warning"
};

export default ToastMe;



