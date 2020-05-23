import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './TaskEditor.scss';
import 'react-quill/dist/quill.snow.css';
import { Button, Col, FormControl, FormGroup, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.min.css";
import { Checkbox } from 'pretty-checkbox-react';
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClock, faExclamation } from '@fortawesome/free-solid-svg-icons/index';

class TaskEditor extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  task: props.task,
	  titleError: false,
	  dueDateError: false,
	  htmlContentError: false
	}

	autoBind(this);
  }

  static getDerivedStateFromProps(props, state) {
	if (props.task && props.task.taskId && (props.task.taskId !== state.task.taskId)) {
	  return props;
	}

	return state;
  }

  handleChange(type, e) {

	let currentTask = this.state.task;

	if (type === "complete" || type === "inProgress" || type === "urgent") {

	  currentTask[type] = !currentTask[type];

	  if (currentTask[type] && type === "complete") {
	    currentTask.inProgress = false;
	  } else if (currentTask[type] && type === "inProgress") {
		currentTask.complete = false;
	  }

	} else if (type === "title" || type === "content" || type === "notes" || type === "assignedTo") {
	  currentTask[type] = e.target.value;
	} else if (type === "dueDate" && e !== null) {
	  currentTask[type] = e;
	} else {
	  currentTask[type] = e;
	}

	this.setState({
	  task: currentTask
	});
  }

  handleSubmit = async e => {
    console.log("submitting", this.state.task);

	let errorsFound = false;

	if (!this.state.task.title) {
	  errorsFound = true;
	  this.setState({titleError: true});
	} else {
	  this.setState({titleError: false});
	}

	if (!this.state.task.dueDate) {
	  errorsFound = true;
	  this.setState({dueDateError: true});
	} else {
	  this.setState({dueDateError: false});
	}


	if (!errorsFound) {
	  if (window.confirm("Are you sure you want to submit this task?")) {

		let data = {
		  title: this.state.task.title,
		  content: this.state.task.content,
		  notes: this.state.task.notes,
		  createdBy: this.state.task.createdBy ? this.state.task.createdBy : this.props.currentUser.username,
		  assignedTo: this.state.task.assignedTo ? this.state.task.assignedTo : this.props.currentUser.username,
		  urgent: this.state.task.urgent || false,
		  dueDate: Date.parse(this.state.task.dueDate),
		  inProgress: this.state.task.inProgress || false,
		  complete: this.state.task.complete || false,
		  completedAt: this.state.task.completedAt,
		  createdAt: this.state.task.createdAt,
		  updatedAt: this.state.task.updatedAt
		}

		try {
		  await TaskEditor.createOrEditTask(data);

		  this.setState({
			success: true
		  });


		} catch (e) {
		  console.log("err on handlesubmit", e);
		}
	  }
	}


  }

  static createOrEditTask(data) {
	let methodType = 'POST';
	console.log("data", data);

	if (data.taskId) {
	  methodType = 'PUT';
	}

	fetch(`${process.env.REACT_APP_API_ROOT}/task`, {
	  method: methodType,
	  headers: {
		'Content-Type': 'application/json'

	  },
	  body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then((response) => {
			  console.log("success", response);
			},
			(error) => {
			  console.log("err on createTask", error);
			})
  }


  render() {

	const title = this.state.task.title || '';
	const content =  this.state.task.content || '';
	const notes = this.state.task.notes || '';
	const createdBy = this.state.task.createdBy || '';	//can't edit this, just for viewing
	const assignedTo = this.state.task.assignedTo || this.props.currentUser.username;
	const urgent = this.state.task.urgent || false;
	const dueDate = this.state.task.dueDate || null;
	const inProgress = this.state.task.inProgress || false;
	const complete = this.state.task.complete || false;
	const completedAt = this.state.task.completedAt || ''; //can't edit this, just for viewing
	const createdAt = this.state.task.createdAt || '';
	const updatedAt = this.state.task.updatedAt || '';


	return (
			<div className="TaskEditor">

			  {/*title*/}
			  <Row>
				<Col sm={12}>
				  <FormGroup controlId="editorTitle">
					<FormControl type="text"
								 placeholder="Title"
								 className="editor-title"
								 value={title}
								 onChange={(e) => this.handleChange('title', e)}/>
					<div className={`error-message ${this.state.titleError === true ? 'slide-down' : ''}`}>
					  Please enter a title.
					</div>
				  </FormGroup>
				</Col>
			  </Row>

			  <Row>
				<Col sm={6}>
				  <FormGroup controlId="editorContent">
					<FormControl as="textarea"
								 rows={6}
								 placeholder="Content"
								 className="editor-content"
								 value={content}
								 onChange={(e) => this.handleChange('content', e)}/>
				  </FormGroup>
				</Col>

				<Col sm={6}>
				  <FormGroup controlId="editorNotes">
					<FormControl as="textarea"
								 rows={6}
								 placeholder="Notes"
								 className="editor-notes"
								 value={notes}
								 onChange={(e) => this.handleChange('notes', e)}/>
				  </FormGroup>
				</Col>
			  </Row>

			  <Row style={{marginTop: '20px'}}>
				<Col sm={6}>
				  <div className="task-item">
					<label className="label-margin">Due by:</label>

					{dueDate && this.state.task.taskId ?
							<DatePicker placeholderText="When is this due?"
										selected={new Date(dueDate)}
										disabled={true}
										showTimeSelect
										timeFormat="h:mm aa"
										timeIntervals={15}
										disabledKeyboardNavigation={true}
										dateFormat="MMMM d, yyyy h:mm aa"
										timeCaption="time"
							/>
							:
							<DatePicker placeholderText="When is this due?"
										selected={dueDate ? new Date(dueDate) : new Date()}
										onChange={(e) => this.handleChange('dueDate', e)}
										showTimeSelect
										timeFormat="h:mm aa"
										timeIntervals={15}
										disabledKeyboardNavigation={true}
										dateFormat="MMMM d, yyyy h:mm aa"
										timeCaption="time"
							/>
					}

					<div className={`error-message ${this.state.dueDateError === true ? 'slide-down' : ''}`}>
					  Please enter a due date.
					</div>

				  </div>

				  <div className="task-item">
					<label className="label-margin">Assign To:</label>

					<FormControl onChange={(e) => this.handleChange('assignedTo', e)}
								 as="select"
								 defaultValue={assignedTo}
								 style={{width: '200px', display: 'inline-block'}}>
					  <option value={this.props.currentUser.username}>Myself</option>
					  <option value="1">Karina</option>
					  <option value="2">Hubert</option>
					  <option value="3">John</option>
					</FormControl>
				  </div>
				</Col>

				{this.state.task.taskId ?
						<Col sm={6}>

						  <div className="task-item">
							<Checkbox shape="round"
									  bigger={true}
									  color="primary"
									  animation="jelly"
									  className="animated-checkbox"
									  checked={inProgress}
									  onChange={(e) => this.handleChange('inProgress', e)}
									  svg={<FontAwesomeIcon icon={faClock}
															size="1x"
															title="Used space"/>}>In Progress</Checkbox>
						  </div>

						  <div className="task-item">
							<Checkbox shape="round"
									  bigger={true}
									  color="success"
									  animation="jelly"
									  className="animated-checkbox"
									  checked={complete}
									  onChange={(e) => this.handleChange('complete', e)}
									  svg={<FontAwesomeIcon icon={faCheck}
															size="1x"
															title="Used space"/>}>Completed</Checkbox>
						  </div>


						  <div className="task-item">
							<Checkbox shape="round"
									  bigger={true}
									  color="danger"
									  animation="jelly"
									  className="animated-checkbox"
									  checked={urgent}
									  onChange={(e) => this.handleChange('urgent', e)}
									  svg={<FontAwesomeIcon icon={faExclamation}
															size="1x"
															title="Used space"/>}>Urgent</Checkbox>
						  </div>
						</Col>
						:
						<Col sm={6} style={{textAlign: 'right'}}>

						  <div className="task-item">
							<Checkbox shape="round"
									  bigger={true}
									  color="danger"
									  animation="jelly"
									  className="animated-checkbox"
									  svg={<FontAwesomeIcon icon={faExclamation}
															size="1x"
															title="Used space"/>}>Urgent</Checkbox>
						  </div>

						  <Button onClick={this.handleSubmit}
								  style={{marginTop: '15px'}}
								  variant='success'
								  size='large'>Save Task</Button>
						</Col>
				}
			  </Row>



			</div>
	)
  }
}


TaskEditor.propTypes = {
  currentUser: PropTypes.string,
  task: PropTypes.object
};

export default TaskEditor;




