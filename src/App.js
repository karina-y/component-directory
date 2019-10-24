import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/stylesheets/sitewide.scss';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import AccordionPanelPage from './pages/AccordionPanelPage'
import ImageCarouselPage from './pages/ImageCarouselPage'
import ImageHoverPage from './pages/ImageHoverPage'
import LoaderPage from './pages/LoaderPage'
import ParallaxBannerPage from './pages/ParallaxBannerPage'
import QuoteCardPage from './pages/QuoteCardPage'
import ShadowBoxPage from './pages/ShadowBoxPage'
import TextImageOverlapPage from './pages/TextImageOverlapPage'

class App extends Component {

  render() {
	return (
			<Router>
				<div className="App">
				  <Navigation props />

				  {/* routes */}
				  <Container className="routes">
					<Switch>

					  <Route exact path="/accordion" component={AccordionPanelPage} />
					  <Route exact path="/imagecarousel" component={ImageCarouselPage} />
					  <Route exact path="/imagehover" component={ImageHoverPage} />
					  <Route exact path="/loader" component={LoaderPage} />
					  <Route exact path="/parallaxbanner" component={ParallaxBannerPage} />
					  <Route exact path="/quotecard" component={QuoteCardPage} />
					  <Route exact path="/shadowbox" component={ShadowBoxPage} />
					  <Route exact path="/textimageoverlap" component={TextImageOverlapPage} />

					</Switch>
				  </Container>

				</div>
			</Router>
	);
  }
}

export default App;



