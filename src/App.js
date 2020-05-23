import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, withRouter, Route, Switch } from 'react-router-dom';
import './components/stylesheets/sitewide.scss';
import Navigation from './components/Navigation/Navigation';
import AccordionPanelPage from './pages/AccordionPanelPage';
import ImageCarouselPage from './pages/ImageCarouselPage';
import ImageHoverPage from './pages/ImageHoverPage';
import LoaderPage from './pages/LoaderPage';
import ParallaxBannerPage from './pages/ParallaxBannerPage';
import QuoteCardPage from './pages/QuoteCardPage';
import ShadowBoxPage from './pages/ShadowBoxPage';
import TextImageOverlapPage from './pages/TextImageOverlapPage';
import StaffCard from './components/StaffCard/StaffCard';
import ManageBlogPage from './pages/ManageBlogPage';
import ButtonsPage from './pages/ButtonsPage';
import ManageTaskPage from './pages/ManageTaskPage';
import TwoColumnContentPage from './pages/TwoColumnContentPage'
import TwoColumnFadePage from './pages/TwoColumnFadePage'
import TwoColumnPopupPage from './pages/TwoColumnPopupPage'
import TwoColumnTextPage from './pages/TwoColumnTextPage'

/*
TODO
- all components in dir

*/

const App = () => (

		<Router>
		  <div className="App" id="outerContainer">
			<Navigation />

			{/* routes */}
			<div className="routes" id="pageWrap">
			  <Switch>

				<Route exact path="/accordion" component={AccordionPanelPage} />
				<Route exact path="/imagecarousel" component={ImageCarouselPage} />
				<Route exact path="/imagehover" component={ImageHoverPage} />
				<Route exact path="/loader" component={LoaderPage} />
				<Route exact path="/parallaxbanner" component={ParallaxBannerPage} />
				<Route exact path="/quotecard" component={QuoteCardPage} />
				<Route exact path="/shadowbox" component={ShadowBoxPage} />
				<Route exact path="/textimageoverlap" component={TextImageOverlapPage} />
				<Route exact path="/staffcard" component={StaffCard} />
				<Route exact path="/blog" component={ManageBlogPage} />
				<Route exact path="/buttons" component={ButtonsPage} />
				<Route exact path="/task" component={ManageTaskPage} />
				<Route exact path="/twocolumncontent" component={TwoColumnContentPage} />
				<Route exact path="/twocolumnfade" component={TwoColumnFadePage} />
				<Route exact path="/twocolumnpopup" component={TwoColumnPopupPage} />
				<Route exact path="/twocolumntext" component={TwoColumnTextPage} />

			  </Switch>
			</div>

		  </div>
		</Router>
)

export default App;



