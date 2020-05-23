import React from 'react';
import ManageItems from '../components/ManageItems/ManageItems';
import DummyData from '../utils/dummyData';

const CURRENT_USER = DummyData.People.CURRENT_USER;

const ManageBlogPage = props => (
		<div className="ManageBlogPage">
		  <div className="component-container" id="manageblog">
			<ManageItems item="blog" endpoint="blog" currentUser={CURRENT_USER} />
		  </div>
		</div>
);


export default ManageBlogPage;
