
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ViewAllItems.scss';
import Loader from '../Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt, faTrash, faEye, faEyeSlash, faChevronRight,
  faSearch, faChevronLeft
} from '@fortawesome/free-solid-svg-icons/index';
import ToastMe from '../ToastMe/ToastMe';
import { Button, FormControl } from 'react-bootstrap';
import ShadowBox from '../ShadowBox/ShadowBox';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import DummyData from '../../utils/dummyData';
import InputField from '../InputField/InputField'

const BLOGS = DummyData.Items.BLOGS;
const CAREERS = DummyData.Items.CAREERS;

class ViewAllItems extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  posts: [],
	  filter: "all",
	  scrollVal: 0
	}

	this.toastMe = React.createRef();

	autoBind(this);
  }

  componentDidMount() {
	this.setState({
	  posts: this.props.item === "blog" ? BLOGS : CAREERS
	});


	//TODO remove return
	return;
	this.getPosts();
  }

  getPosts() {
	fetch(`${process.env.REACT_APP_API_ROOT}/${this.props.endpoint}/all`, {
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
				  posts: response.Items
				});
			  } else {
				this.setState({
				  posts: null
				});
			  }

			},
			(error) => {
			  console.log("err on getposts", error);
			})
  }

  handleDelete(postId) {
	console.log("endpoint", this.props.endpoint);
	console.log("postid", postId)

	if (window.confirm(`Are you sure you want to delete this ${this.props.page}?`)) {
	  fetch(`${process.env.REACT_APP_API_ROOT}/${this.props.endpoint}/${postId}`, {
		method: 'DELETE'
	  })
	  .then(response => response.json())
	  .then((response) => {
				console.log("response", response);
				this.toastMe.current.handleSuccess(`Successfully deleted ${this.props.page}`);
				this.getPosts();
			  },
			  (error) => {
				console.log("err on deletepost", error);
			  });
	}

  }

  handleActiveChange(post) {

	if (window.confirm(`Are you sure you want to ${post.active ? 'deactivate' : 'activate'} this ${this.props.page}?`)) {
	  post.active = !post.active;

	  const id = post.blogId || post.careerId;
	  post.userId = this.props.currentUser.username;

	  fetch(`${process.env.REACT_APP_API_ROOT}/${this.props.endpoint}/${id}`, {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(post)
	  })
	  .then(response => response.json())
	  .then((response) => {
				console.log("success", response);
			  },
			  (error) => {
				console.log("err on handleActiveChange", error);
			  })
	}
  }

  handleSearch(e) {
	const search = e.target.value;
	let posts = this.state.posts;
	let words = search.split(" ");

	let searchArg1 = (words.length == 1) ? words : words.join(".*");
	let RE1 = new RegExp(searchArg1, "i");

	let searchArg2 = (words.length == 1) ? words : words.join(".*") + '|' + words.reverse().join(".*");
	let RE2 = new RegExp(searchArg2, "i");


	if (search) {
	  for (let i = 0; i < posts.length; i++) {
		let post = posts[i];

		// let titleMatch = post.title.split(/[\s,\?\,\.!]+/).some(f => f === search) || post.title.includes(search);
		// let contentMatch = post.content.split(/[\s,\?\,\.!]+/).some(f => f === search) || post.content.includes(search);
		let searchThrough = post.title + " ".concat(post.content);

		if (!RE1.test(searchThrough) && !RE2.test(searchThrough)) {
		  post.display = false;
		} else {
		  post.display = true;
		}
	  }
	} else {
	  for (let i = 0; i < posts.length; i++) {
		posts[i].display = true;
	  }
	}

	this.setState({
	  posts
	});
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
	const type = this.props.type;
	const filter = this.state.filter;

	const now = new Date();
	now.setHours(0,0,0,0);

	const list = [
	  { name: 'All' },
	  { name: 'Active' },
	  { name: 'Inactive' },
	  { name: 'Drafts' },
	  { name: 'In Queue' },
	  { name: 'item6' },
	  { name: 'item7' },
	  { name: 'item8' },
	  { name: 'item9' }
	];

	return (
			<div className="ViewAllItems">

			  {this.state.posts && this.state.posts.length > 0 ?
					  <React.Fragment>

						<div className="post-search">
						  <InputField controlId="searchBar"
									  type="text"
									  placeholder="Search"
									  class="search-bar"
									  handleChange={this.handleSearch}
									  sideIcon={faSearch}
									  error={false}/>
						</div>

						<div className={`post-filter ${this.state.scrollVal === 0 ? 'left' : 'right'}`}>
						  <FontAwesomeIcon icon={faChevronLeft}
										   title="scroll left"
										   onClick={this.scrollLeft} />

						  <Button onClick={() => this.setState({filter: "all"})}
								  className={`underline-btn ${this.state.filter === "all" ? 'active' : ''}`}
								  variant="default">
							All
						  </Button>

						  <Button onClick={() => this.setState({filter: "active"})}
								  className={`underline-btn ${this.state.filter === "active" ? 'active' : ''}`}
								  variant="default">

							Active
						  </Button>

						  <Button onClick={() => this.setState({filter: "inactive"})}
								  className={`underline-btn ${this.state.filter === "inactive" ? 'active' : ''}`}
								  variant="default">
							Inactive
						  </Button>

						  <Button onClick={() => this.setState({filter: "draft"})}
								  className={`underline-btn ${this.state.filter === "draft" ? 'active' : ''}`}
								  variant="default">
							Drafts
						  </Button>

						  {this.props.endpoint === "blog" &&
						  <Button onClick={() => this.setState({filter: "scheduled"})}
								  className={`underline-btn ${this.state.filter === "scheduled" ? 'active' : ''}`}
								  variant="default">
							In Queue
						  </Button>
						  }

						  <FontAwesomeIcon icon={faChevronRight}
										   title="scroll right"
										   onClick={this.scrollRight} />
						</div>

						{this.state.posts.map((post, index) => {
						  return type === "media" ?
								  <div key={index}>
									<Button onClick={(e) => this.handleSelect(index, null)}
											className="naked">
									  <ShadowBox hoverAction={false}
												 popoutHover={true}
												 shadowLevel={2}>
										<ResponsiveImage image={post.image} imageAlt={post.title} />
									  </ShadowBox>
									</Button>
								  </div>
								  :

								  (post.display !== false && (
										  (filter === "all") ||
										  (filter === "active" && post.active === true) ||
										  (filter === "inactive" && !post.active) ||
										  (filter === "draft" && post.draft === true) ||
										  (filter === "scheduled" && (post.date && post.date !== ""))
								  ))
										  ?
										  <div key={index}>
											<div className="icons">
											  <FontAwesomeIcon icon={faPencilAlt}
															   title="Edit post"
															   onClick={() => this.props.handleEdit(post)} />

											  <FontAwesomeIcon icon={faTrash}
															   title="Delete Post"
															   onClick={() => this.handleDelete(post.careerId || post.blogId)} />

											  <FontAwesomeIcon icon={post.active ? faEye : faEyeSlash}
															   title={post.active ? "Post is currently active." : "Post is currently deactivated."}
															   onClick={() => this.handleActiveChange(post)} />
											</div>

											<div className="post-summary">
											  <div className={post.active ? 'status-badge success' : post.scheduledFor > now ? 'status-badge primary' : post.draft ? 'status-badge warning' : 'status-badge danger'}>
												{post.active ? 'ACTIVE' : post.scheduledFor > now ? 'SCHEDULED' : post.draft ? 'DRAFT' : 'PENDING'}
											  </div>

											  <div className="post-title">
												<span onClick={() => this.props.handleView(post)}>{post.title}</span>
											  </div>
											</div>
										  </div>
										  :
										  ''
						})}
					  </React.Fragment>
					  : this.state.posts !== null ?
							  <Loader loading={true} isAdmin={true} />
							  :
							  <div className="post-filter">
								<h4 style={{textTransform: 'capitalize'}}>No {this.props.page}s</h4>
							  </div>
			  }

			  <ToastMe ref={this.toastMe} />

			</div>
	)
  }
}


ViewAllItems.propTypes = {
  endpoint: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired
};

export default ViewAllItems;



