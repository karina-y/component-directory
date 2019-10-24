import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/stylesheets/sitewide.scss';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import ComponentDirectory from './pages/ComponentDirectory';

class App extends Component {

  render() {
	return (
			<Router>
				<div className="App">
				  <Navigation props />

				  {/* routes */}
				  <Container className="routes">
					<Switch>

					  <Route exact path="/" component={ComponentDirectory} />

					</Switch>
				  </Container>

				</div>
			</Router>
	);
  }
}

export default App;



