import React from 'react';
import autoBind from 'react-autobind';
import './StaffCard.scss';
import ShadowBox from '../ShadowBox/ShadowBox';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faClock, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/index';
import DummyData from '../../utils/dummyData';

const PEOPLE = DummyData.People.BASE;

class StaffCard extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  allUsers: []
	}

	autoBind(this);
  }

  componentWillMount() {
	fetch(`${process.env.REACT_APP_API_ROOT}/users/id`, {
	  method: 'GET',
	  headers: {
		'Content-Type': 'application/json'
	  }
	})
	.then(response => response.json())
	.then((response) => {

			  console.log("users response", response);

			  if (response && response.length > 0) {
				this.setState({
				  allUsers: response
				});
			  } else {
			    this.setState({
				  allUsers: null
				});
			  }

			},
			(error) => {
			  console.log("err on getusers", error);
			})
  }


  render() {

	return (
			<div className="StaffCard">
			  {PEOPLE.map((item, index) => {
				return <ShadowBox hoverAction={false}
								  popoutHover={false}
								  shadowLevel={2}
								  additionalOuterClasses="staff-card"
								  key={index}>

				  <div className="profile">
					<div className="profile-photo">
					  <Image src={item.picture} title={`${item.given_name} ${item.family_name}`}/>
					</div>

					<p className="name">{item.given_name} {item.family_name}</p>
					<label className="pink job-title">{item['custom:job_title']}</label>
				  </div>

				  <div className="contact">
					<p><FontAwesomeIcon icon={faMapMarkerAlt} title="locale" /> {item.locale}</p>
					<p><FontAwesomeIcon icon={faClock} title="schedule" /> {item['custom:schedule']}</p>
					<p><FontAwesomeIcon icon={faEnvelope} title="e-mail address" /> {item.email}</p>
					<p><FontAwesomeIcon icon={faPhone} title="phone number" /> {item.phone_number}</p>
				  </div>
				</ShadowBox>
			  })}

			</div>
	)
  }
}


StaffCard.propTypes = {
};

export default StaffCard;



