
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './Editor.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Col, FormControl, FormGroup, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.min.css";
import { Switch } from 'pretty-checkbox-react';
import "pretty-checkbox/dist/pretty-checkbox.min.css";

class Editor extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  post: props.post,
	  titleError: false,
	  htmlContentError: false
	}

	autoBind(this);
  }

  static getDerivedStateFromProps(props, state) {
	if (props.post && props.post.blogId && (props.post.blogId !== state.post.blogId) ||
			props.post && props.post.careerId && (props.post.careerId !== state.post.careerId)) {
	  return props;
	}

	return state;
  }

  //we have to keep the html in a separate state var because quill is a beyatch
  handleHtmlChange (html) {
	let post = this.state.post;
	post.htmlContent = html;

	this.setState({ post });
  }

  handleChange(type, e) {

	let currentPost = this.state.post;

	if (type === "active") {

	  currentPost[type] = !currentPost[type];
	  currentPost.scheduledFor = null;
	  currentPost.draft = false;

	} else if (type === "draft") {

	  currentPost[type] = !currentPost[type];
	  currentPost.scheduledFor = null;
	  currentPost.active = false;

	} else if (type === "scheduledFor" && e !== null) {

	  currentPost[type] = e;
	  currentPost.active = false;
	  currentPost.draft = false;

	} else if (type === "title") {
	  currentPost[type] = e.target.value;
	} else {
	  currentPost[type] = e;
	}

	this.setState({
	  post: currentPost
	});
  }

  handleSubmit = async e => {
	let errorsFound = false;

	if (!this.state.post.htmlContent || this.state.post.htmlContent === "<p><br></p>") {
	  errorsFound = true;
	  this.setState({htmlContentError: true});
	} else {

	  // let post = this.state.post;
	  // post.htmlContent = this.state.htmlContent;

	  this.setState({htmlContentError: false});
	}

	if (!this.state.post.title) {
	  errorsFound = true;
	  this.setState({titleError: true});
	} else {
	  this.setState({titleError: false});
	}

	if (!errorsFound) {
	  if (window.confirm("Are you sure you want to submit this post?")) {

		let data = {
		  htmlContent: this.state.post.htmlContent,
		  title: this.state.post.title,
		  active: this.state.post.active || false,
		  draft: this.state.post.draft || false,
		  userId: this.props.currentUser.username
		}

		if (this.props.endpoint === "blog") {
		  data.scheduledFor = Date.parse(this.state.post.scheduledFor) || "";
		}

		if (this.state.post.careerId) {
		  data.careerId = this.state.post.careerId;
		} else if (this.state.post.blogId) {
		  data.blogId = this.state.post.blogId;
		}

		try {
		  await Editor.createOrEditPost(data, this.props.endpoint);

		  this.setState({
			success: true
		  });


		} catch (e) {
		  console.log("err on handlesubmit", e);
		}
	  }
	}


  }

  static createOrEditPost(data, endpoint) {
	let methodType = 'POST';
	console.log("data", data);

	if (endpoint === "career" && data.careerId) {
	  methodType = 'PUT';
	  endpoint = `${endpoint}/${data.careerId}`;
	} else if (endpoint === "blog" && data.blogId) {
	  methodType = 'PUT';
	  endpoint = `${endpoint}/${data.blogId}`;
	}

	fetch(`${process.env.REACT_APP_API_ROOT}/${endpoint}`, {
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
			  console.log("err on createPost", error);
			})
  }

  //TODO
  /*
  	- add media in the form of grid-gallery or carousel or hero image
  	- add api call to insert into db
  */

  render() {

	const modules = {
	  toolbar: [
		[{ 'header': [false, 4, 5, 6] }],
		['bold', 'italic', 'underline','strike', 'blockquote'],
		[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
		['link', 'image'],
		['clean']
	  ],
	};

	const formats = [
	  'header',
	  'bold', 'italic', 'underline', 'strike', 'blockquote',
	  'list', 'bullet', 'indent',
	  'link', 'image'
	];

	const htmlContent = this.state.post.htmlContent || '';
	const title = this.state.post.title || '';
	const active =  this.state.post.active || false;
	const draft = this.state.post.draft || false;
	const scheduledFor = this.state.post.scheduledFor || null;



	return (
			<div className="Editor">

			  {/*title*/}
			  <Row>
				<Col sm={12}>
				  <FormGroup controlId="editorTitle">
					<FormControl type="text"
								 placeholder={this.props.endpoint === "blog" ? "Blog Title" : this.props.endpoint === "career" ? "Job Title" : "Title"}
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
				<Col sm={12}>

				  <ReactQuill defaultValue={htmlContent}
							  onChange={this.handleHtmlChange}
							  modules={modules}
							  formats={formats}/>
				  <div className={`error-message ${this.state.htmlContentError === true ? 'slide-down' : ''}`}>
					Please type your post.
				  </div>
				</Col>
			  </Row>

			  <Row className="buttons">
				<Col sm={6}>
				  <div className="post-item" style={{marginBottom: '30px'}}>
					<Switch shape="fill"
							bigger={true}
							color="success"
							animation="jelly"
							className="pretty-checkbox-switch"
							checked={active}
							onChange={(e) => this.handleChange('active', e)}>
					  Active
					</Switch>
				  </div>

				  <div className="post-item" style={{marginBottom: '30px'}}>
					<Switch shape="fill"
							bigger={true}
							color="warning"
							animation="jelly"
							className="pretty-checkbox-switch"
							checked={draft}
							onChange={(e) => this.handleChange('draft', e)}>
					  Draft
					</Switch>
				  </div>

				  {this.props.endpoint === "blog" &&
				  <div style={{marginBottom: '30px'}}>
					<label className="label-margin pink">Schedule to post on:</label>

					<DatePicker
							placeholderText="Schedule for future date?"
							selected={new Date(scheduledFor)}
							onChange={(e) => this.handleChange('scheduledFor', e)}
							showTimeSelect
							timeFormat="h:mm aa"
							timeIntervals={15}
							disabledKeyboardNavigation={true}
							dateFormat="MMMM d, yyyy h:mm aa"
							timeCaption="time"
					/>
				  </div>
				  }
				</Col>

				<Col sm={6}>
				  <div style={{marginBottom: '30px', textAlign: 'right'}}>
					<Button onClick={this.preview}
							variant="success"
							size='small'>Preview</Button>
				  </div>

				  <div style={{marginBottom: '30px', textAlign: 'right'}}>
					<Button onClick={this.handleSubmit}
							variant="success"
							size='small'>Save and Submit</Button>
				  </div>
				</Col>


			  </Row>


			</div>
	)
  }
}


Editor.propTypes = {
  endpoint: PropTypes.string.isRequired,
  currentUser: PropTypes.string,
  post: PropTypes.object
};

export default Editor;




