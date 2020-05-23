import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ViewAllTasks.scss';
import Loader from '../Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faCheck, faExclamationTriangle, faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons/index';
import ToastMe from '../ToastMe/ToastMe';
import { Button, FormControl } from 'react-bootstrap';
import { Checkbox } from 'pretty-checkbox-react';
import "pretty-checkbox/dist/pretty-checkbox.min.css";

class ViewAllTasks extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  filter: "all",
	  scrollVal: 0
	}

	this.toastMe = React.createRef();

	autoBind(this);
  }

  static dueThisWeek(dueDate) {
	//get next sunday from today first
	const today = new Date();
	const nextSundayFromToday = new Date(today.setDate(today.getDate() + (7 + 7 - today.getDay()) % 7));

	//does duedate occur between today and the next sunday from today?
	dueDate = new Date(dueDate);

	const dueBySunday = dueDate <= nextSundayFromToday && !(dueDate > nextSundayFromToday);

	return dueBySunday;
  }

  scrollRight() {
	let currentScrollVal = this.state.scrollVal;

	if (currentScrollVal === 0) {
	  this.setState({
		scrollVal: 1
	  });
	} else {
	  return;
	}
  }

  scrollLeft() {
	let currentScrollVal = this.state.scrollVal;

	if (currentScrollVal === 1) {
	  this.setState({
		scrollVal: 0
	  });
	} else {
	  return;
	}
  }

  render() {
	const filter = this.state.filter;
	const now = new Date();
	now.setHours(0,0,0,0);

	return (
			<div className="ViewAllTasks">

			  {this.props.tasks && this.props.tasks.length > 0 ?
					  <React.Fragment>
						<div className="task-search">
						  <FormControl type="text"
									   placeholder="Search"
									   className="search-bar"
									   onChange={this.props.handleSearch} />

						  <FontAwesomeIcon icon={faSearch} title="search" />
						</div>

						<div className={`task-filter ${this.state.scrollVal === 0 ? 'left' : 'right'}`}>
						  <FontAwesomeIcon icon={faChevronLeft}
										   title="scroll left"
										   onClick={this.scrollLeft} />

						  <Button onClick={() => this.setState({filter: "all"})}
								  className={`underline-btn ${this.state.filter === "all" ? 'active' : ''}`}
								  variant="default">
							All
						  </Button>

						  <Button onClick={() => this.setState({filter: "urgent"})}
								  className={`underline-btn ${this.state.filter === "urgent" ? 'active' : ''}`}
								  variant="default">
							Urgent
						  </Button>
						  <Button onClick={() => this.setState({filter: "inProgress"})}
								  className={`underline-btn ${this.state.filter === "inProgress" ? 'active' : ''}`}
								  variant="default">
							In Progress
						  </Button>

						  <Button onClick={() => this.setState({filter: "pending"})}
								  className={`underline-btn ${this.state.filter === "pending" ? 'active' : ''}`}
								  variant="default">
							Pending
						  </Button>

						  <Button onClick={() => this.setState({filter: "complete"})}
								  className={`underline-btn ${this.state.filter === "complete" ? 'active' : ''}`}
								  variant="default">
							Completed
						  </Button>

						  <Button onClick={() => this.setState({filter: "dueThisWeek"})}
								  className={`underline-btn ${this.state.filter === "dueThisWeek" ? 'active' : ''}`}
								  variant="default">
							Due This Week
						  </Button>

						  <Button onClick={() => this.setState({filter: "assignedToMe"})}
								  className={`underline-btn ${this.state.filter === "assignedToMe" ? 'active' : ''}`}
								  variant="default">
							Assigned To Me
						  </Button>

						  <Button onClick={() => this.setState({filter: "assignedByMe"})}
								  className={`underline-btn ${this.state.filter === "assignedByMe" ? 'active' : ''}`}
								  variant="default">
							Assigned By Me
						  </Button>

						  <FontAwesomeIcon icon={faChevronRight}
										   title="scroll right"
										   onClick={this.scrollRight} />
						</div>

						{this.props.tasks.map((task, index) => {
						  //this is ridiculous i need to find a better way
						  return (task.display !== false && (
								  (filter === "all") ||
								  (filter === "urgent" && task.urgent === true) ||
								  (filter === "inProgress" && task.inProgress === true) ||
								  (filter === "pending" && (!task.inProgress && !task.complete)) ||
								  (filter === "complete" && task.complete === true) ||
								  (filter === "dueThisWeek" && ViewAllTasks.dueThisWeek(task.dueDate)) ||
								  (filter === "assignedToMe" && task.assignedTo === this.props.currentUser.username) ||
								  (filter === "assignedByMe" && (task.createdBy === this.props.currentUser.username && task.assignedTo !== this.props.currentUser))
						  ))
								  ?
								  <div key={index}>
									<div className="icons">
									  <FontAwesomeIcon icon={faPencilAlt}
													   title="Edit task"
													   onClick={() => this.props.handleEdit(task)} />

									  <FontAwesomeIcon icon={faTrash}
													   title="Delete Task"
													   onClick={() => this.props.handleDelete(task.taskId)} />

									  <Checkbox shape="round"
												bigger={true}
												color="success"
												animation="jelly"
												className="animated-checkbox"
												checked={task.complete || false}
												onChange={() => this.props.handleCompleteChange(task)}
												svg={<FontAwesomeIcon icon={faCheck}
																	  size="1x"
																	  title="Used space"/>} />
									</div>

									<div className="task-summary">
									  <div className="task-status">
										<div className={task.complete ? 'status-badge success' : task.inProgress ? 'status-badge primary' : task.dueDate < now ? 'status-badge danger' : 'status-badge warning'}>
										  {task.complete ? 'COMPLETE' : task.inProgress ? 'IN PROGRESS' : task.dueDate < now ? 'DELAYED' : 'PENDING'}
										</div>

										{task.urgent ? <FontAwesomeIcon icon={faExclamationTriangle} title="urgent" /> : ''}
									  </div>

									  <div className="task-title">
										<span onClick={() => this.props.handleView(task)}>{task.title}</span>
									  </div>
									</div>

								  </div>
								  :
								  ''
						})}
					  </React.Fragment>
					  : this.props.tasks !== null ?
							  <Loader loading={true} isAdmin={true} />
							  : <h4 style={{textTransform: 'capitalize'}}>No {this.props.page}s</h4>
			  }

			  <ToastMe ref={this.toastMe} />

			</div>
	)
  }
}


ViewAllTasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCompleteChange: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
};

export default ViewAllTasks;




