import React from 'react';
import ManageTasks from '../components/ManageTasks/ManageTasks';
import DummyData from '../utils/dummyData';

const CURRENT_USER = DummyData.People.CURRENT_USER;

const ManageTaskPage = props => (
		<div className="ManageTaskPage">
		  <div className="component-container" id="manageTask">
			<ManageTasks item="task" endpoint="task" currentUser={CURRENT_USER} />
		  </div>
		</div>
);


export default ManageTaskPage;
