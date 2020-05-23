import React from 'react';
import ManageItems from '../components/ManageItems/ManageItems';
import DummyData from '../utils/dummyData';

const CURRENT_USER = DummyData.People.CURRENT_USER;

const ManageCareerPage = props => (
		<div className="ManageCareerPage">
		  <div className="component-container" id="managecareer">
			<ManageItems item="career" endpoint="career" currentUser={CURRENT_USER} />
		  </div>
		</div>
);


export default ManageCareerPage;
