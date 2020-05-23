import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ManageTasks.scss';
import { Tab, Tabs } from 'react-bootstrap';
import ToastMe from '../ToastMe/ToastMe';
import TaskEditor from './TaskEditor';
import ViewAllTasks from './ViewAllTasks';
import ViewItem from './ViewItem';
import DummyData from '../../utils/dummyData';

const TASKS = DummyData.Items.TASKS;

class ManageTasks extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  key: "add-task",
	  editing: false,
	  viewing: false,
	  tasks: [],
	  currentTask: {},
	}

	this.toastMe = React.createRef();

	autoBind(this);
  }

  componentDidMount() {
	this.setState({
	  tasks: TASKS
	});


	//TODO remove return
	return;
	this.getTasks();
  }

  getTasks() {
	fetch(`${process.env.REACT_APP_API_ROOT}/task/all`, {
	  method: 'GET',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  // body: JSON.stringify({role: 'marketing'})
	})
	.then(response => response.json())
	.then((response) => {

			  console.log("response", response);

			  if (response && response.Items && response.Items.length > 0) {
				this.setState({
				  tasks: response.Items
				});
			  } else {
				this.setState({
				  tasks: null
				});
			  }

			},
			(error) => {
			  console.log("err on gettasks", error);
			})
  }

  handleDelete(taskId) {
	console.log("taskid", taskId)

	if (window.confirm(`Are you sure you want to delete this task?`)) {
	  fetch(`${process.env.REACT_APP_API_ROOT}/task/${taskId}`, {
		method: 'DELETE'
	  })
	  .then(response => response.json())
	  .then((response) => {
				if (response.statusCode === 400) {
				  this.toastMe.current.handleError(`Something went wrong, please refresh and try again.`);
				  console.log("fake success", response);
				} else {
				  console.log("success", response);
				  this.toastMe.current.handleSuccess(`Successfully deleted task`);
				  this.getTasks();
				}
			  },
			  (error) => {
				console.log("err on deletetask", error);
			  });
	}

  }

  handleCompleteChange(task) {
	task.urgent = task.urgent ? task.urgent : false;
	task.inProgress = task.inProgress ? task.inProgress : false;

	console.log("here")

	if (window.confirm(`Are you sure you want to set this task to ${task.complete ? 'incomplete' : 'complete'}?`)) {
	  task.complete = !task.complete;

	  fetch(`${process.env.REACT_APP_API_ROOT}/task/${task.taskId}`, {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(task)
	  })
	  .then(response => response.json())
	  .then((response) => {
				if (response.statusCode === 400) {
				  this.toastMe.current.handleError(`Something went wrong, please refresh and try again.`);
				  console.log("fake success", response);
				} else {
				  console.log("success", response);
				  this.toastMe.current.handleSuccess(`Successfully updated task`);
				  this.getTasks();
				}
			  },
			  (error) => {
				console.log("err on handleCompleteChangeTask", error);
			  })
	}
  }

  handleTabChange(key) {
	this.setState({
	  key
	});
  }

  handleEdit(task) {
	this.setState({
	  editing: true,
	  viewing: false,
	  currentTask: task,
	  key: "edit-task"
	});
  }

  handleView(task) {
    this.setState({
	  currentTask: task,
	  viewing: true,
	  editing: false,
	  key: "view-task"
	})
  }

  handleSearch(e) {
	const search = e.target.value;
	let tasks = this.state.tasks;
	let words = search.split(" ");

	let searchArg1 = (words.length == 1) ? words : words.join(".*");
	let RE1 = new RegExp(searchArg1, "i");

	let searchArg2 = (words.length == 1) ? words : words.join(".*") + '|' + words.reverse().join(".*");
	let RE2 = new RegExp(searchArg2, "i");


	if (search) {
	  for (let i = 0; i < tasks.length; i++) {
		let task = tasks[i];

		// let titleMatch = task.title.split(/[\s,\?\,\.!]+/).some(f => f === search) || task.title.includes(search);
		// let contentMatch = task.content.split(/[\s,\?\,\.!]+/).some(f => f === search) || task.content.includes(search);
		let searchThrough = task.title + " ".concat(task.content);

		if (!RE1.test(searchThrough) && !RE2.test(searchThrough)) {
		  task.display = false;
		} else {
		  task.display = true;
		}
	  }
	} else {
	  for (let i = 0; i < tasks.length; i++) {
		tasks[i].display = true;
	  }
	}

	this.setState({
	  tasks
	});
  }

  render() {
	return (
			<div className="ManageTasks">
			  <div className="side-bar">
				<ViewAllTasks handleEdit={this.handleEdit}
							  currentUser={this.props.currentUser.username}
							  tasks={this.state.tasks}
							  handleDelete={this.handleDelete}
							  handleCompleteChange={this.handleCompleteChange}
							  handleSearch={this.handleSearch}
							  handleView={this.handleView} />
			  </div>

			  <div className="task-details">

				<Tabs id="manage-task-tabs"
					  onSelect={key => this.handleTabChange(key)}
					  activeKey={this.state.key}>

				  <Tab eventKey="add-task" title="Add Task">
					<TaskEditor currentUser={this.props.currentUser.username}
								task={{}} />
				  </Tab>

				  {this.state.editing &&
				  <Tab eventKey="edit-task" title="Edit Task">
					<TaskEditor currentUser={this.props.currentUser.username}
								task={this.state.currentTask} />
				  </Tab>
				  }

				  {this.state.viewing &&
				  <Tab eventKey="view-task" title="View Task">
					<ViewItem currentUser={this.props.currentUser.username}
								item={this.state.currentTask} />
				  </Tab>
				  }

				</Tabs>
			  </div>

			  <ToastMe ref={this.toastMe} />

			</div>
	)
  }
}


ManageTasks.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default ManageTasks;

