import { Component } from 'react';
import { withRouter } from 'react-router-dom'

//with react router when a route changes the page doesn't scroll up to the top of the new route, this solves that
class RestoreScroll extends Component {
  componentDidUpdate(prevProps) {
	if (this.props.location.pathname !== prevProps.location.pathname) {
	  window.scrollTo(0, 0);
	}
  }

  render() {
	return this.props.children;
  }
}

export default withRouter(RestoreScroll);
