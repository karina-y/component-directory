import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ViewItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons/index'
import ToastMe from '../ToastMe/ToastMe';

class ViewItem extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	this.toastMe = React.createRef();

	autoBind(this);
  }


  render() {
	const item = this.props.item;

	return (
			<div className="ViewItem">

			  {item.taskId &&
			  <div className="item-header">
				<span className=""><FontAwesomeIcon icon={faClock} title="due date" /> {new Date(item.dueDate).toDateString()}</span>

				<span className="push-right"><b>Assigned By:</b> {item.createdBy}</span>
			  </div>
			  }

			  <h1 className="item-title">{item.title}</h1>

			  <div className="item-content">
				{item.taskId ?
						item.content
						: <div dangerouslySetInnerHTML={{__html: item.htmlContent}}></div>
				}
			  </div>

			  {item.taskId &&
			  <div className="item-notes">
				<h5><b>Notes:</b></h5>

				{item.notes}
			  </div>
			  }

			  <ToastMe ref={this.toastMe} />

			</div>
	)
  }
}


ViewItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ViewItem;



