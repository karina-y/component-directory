/*
created by: karina
created date: 11/16/17
*/


import React from 'react';
import PropTypes from 'prop-types';
import './QuoteCard.scss';
// import Fade from 'react-reveal/Fade';

class QuoteCard extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}
  }

  render() {
	const bootstrapColClasses = this.props.bootstrapColClasses != null ? this.props.bootstrapColClasses : "";

	return (
			<div className="QuoteCard">
			  {this.props.data && this.props.data.length > 0 ? <div className="testimonial-row">
						{this.props.data.map((item, index) => {
						  return <div className="card" key={index}>
							<div className="quote">
							  {item.quote}
							</div>
							<div className="quoter">- {item.name} {item.jobTitle &&
							<span className="job-title">{item.jobTitle}</span>}</div>
						  </div>
						})}
					  </div>

					  : <div className="card">
						<div className="quote">
						  {this.props.quote}
						</div>
						<div className="quoter">- {this.props.name} {this.props.jobTitle &&
						<span className="job-title">{this.props.jobTitle}</span>}</div>
					  </div>
			  }
			</div>



	)
  }
}

/*  ACCEPTABLE PROP VALUES
    data: array of multiple [quote, name, jobtitle]
 */

QuoteCard.propTypes = {
  quote: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  data: PropTypes.array
};

export default QuoteCard;




