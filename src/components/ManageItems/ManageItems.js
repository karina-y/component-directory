
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ManageItems.scss';
import { Tab, Tabs } from 'react-bootstrap';
import ViewAllItems from './ViewAllItems';
import Editor from './Editor';
import ToastMe from '../ToastMe/ToastMe';
import ViewItem from './ViewItem';

class ManageItems extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  key: `add-${props.item}`,
	  editing: false,
	  viewing: false
	}

	autoBind(this);
  }

  handleTabChange(key) {
	this.setState({
	  key
	});
  }

  handleEdit(post) {
	this.setState({
	  editing: true,
	  viewing: false,
	  currentPost: post,
	  key: `edit-${this.props.item}`
	});
  }

  handleView(post) {
	this.setState({
	  currentPost: post,
	  viewing: true,
	  editing: false,
	  key: `view-${this.props.item}`
	})
  }

  render() {
	return (
			<div className="ManageItems">

			  <div className="side-bar">
				<ViewAllItems endpoint={this.props.endpoint}
							  page={this.props.item}
							  handleEdit={this.handleEdit}
							  currentUser={this.props.currentUser.username}
							  handleView={this.handleView}/>
			  </div>

			  <div className="item-details">
				<Tabs id={`manage-${this.props.item}-tabs`}
					  onSelect={key => this.handleTabChange(key)}
					  activeKey={this.state.key}>


				  <Tab eventKey={`add-${this.props.item}`} title={`Add ${this.props.item}`}>
					<Editor post={{}}
							endpoint={this.props.endpoint}
							currentUser={this.props.currentUser.username}/>
				  </Tab>

				  {this.state.editing &&
				  <Tab eventKey={`edit-${this.props.item}`} title={`edit ${this.props.item}`}>
					<Editor post={this.state.currentPost}
							endpoint={this.props.item}
							currentUser={this.props.currentUser.username}/>
				  </Tab>
				  }

				  {this.state.viewing &&
				  <Tab eventKey={`view-${this.props.item}`} title={`view ${this.props.item}`}>
					<ViewItem currentUser={this.props.currentUser.username}
							  item={this.state.currentPost} />
				  </Tab>
				  }
				</Tabs>
			  </div>

			  <ToastMe ref={this.toastMe} />

			</div>
	)
  }
}


ManageItems.propTypes = {
  currentUser: PropTypes.object.isRequired,
  item: PropTypes.string.isRequired, //must be unique each time
  endpoint: PropTypes.string.isRequired
};

export default ManageItems;
