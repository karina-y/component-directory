import React from 'react';
import { Container } from 'react-bootstrap';
import QuoteCard from '../components/QuoteCard/QuoteCard'


const quoteData = [
  {
	name:"John Smith",
	jobTitle:"Job Title Here",
	quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
	name:"Jane Doe",
	jobTitle:"Job Title Here",
	quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
  },
  {
	name:"Jane Smith",
	jobTitle:"Job Title Here",
	quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]


const QuoteCardPage = props => (
		<div className="QuoteCardPage">
		  <div className="component-container" id="quotecard">
			<h1>QuoteCard</h1>

			<QuoteCard data={quoteData}/>

		  </div>
		</div>
);

QuoteCardPage.defaultProps = {

};

QuoteCardPage.propTypes = {
};

export default QuoteCardPage;
