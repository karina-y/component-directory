import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './Navigation.scss';
import { Image } from 'react-bootstrap';
import BurgerMenu from 'react-burger-menu';

class SideNavWrapper extends Component {
  constructor (props) {
	super(props);
	this.state = {
	  hidden: false
	};
  }

  componentWillReceiveProps(nextProps) {
	const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

	if (sideChanged) {
	  this.setState({hidden : true});

	  setTimeout(() => {
		this.show();
	  }, this.props.wait);
	}
  }

  show() {
	this.setState({hidden : false});
  }

  render() {
	let style;

	if (this.state.hidden) {
	  style = {display: 'none'};
	}

	return (
			<div style={style} className={this.props.side}>
			  {this.props.children}
			</div>
	);
  }
}

class Navigation extends Component {
  constructor (props) {
	super(props);
	this.state = {
	  active: 0,
	  currentMenu: 'slide',
	  side: 'left',
	  style: "side",
	  menus: {
		slide: {buttonText: 'Slide', items: 1},
		stack: {buttonText: 'Stack', items: 1},
		elastic: {buttonText: 'Elastic', items: 1},
		bubble: {buttonText: 'Bubble', items: 1},
		push: {buttonText: 'Push', items: 1},
		pushRotate: {buttonText: 'Push Rotate', items: 2},
		scaleDown: {buttonText: 'Scale Down', items: 2},
		scaleRotate: {buttonText: 'Scale Rotate', items: 2},
		fallDown: {buttonText: 'Fall Down', items: 2},
		reveal: {buttonText: 'Reveal', items: 1}
	  }
	};

	autoBind(this);
  }



  render() {
	const active = this.state.active;
	const Menu = BurgerMenu[this.state.currentMenu];
	const anchors = [
	  {
		href: "accordion",
		title: "Accordion"
	  },
	  {
		href: "imagecarousel",
		title: "Image Carousel"
	  },
	  {
		href: "imagehover",
		title: "Image Hover"
	  },
	  {
		href: "loader",
		title: "Loader"
	  },
	  {
		href: "parallaxbanner",
		title: "Parallax Bar"
	  },
	  {
		href: "quotecard",
		title: "Quote Card"
	  },
	  {
		href: "shadowbox",
		title: "ShadowBox"
	  },
	]

	console.log(this.props.history)

	return (
			<React.Fragment>
					<div id="outer-container" className="side-navbar" style={{height: '100%'}}>

					  <div className="navbar-container">
						<nav className="custom-navbar">
						  <div className="brand"><Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" /></div>

						  {Object.keys(this.state.menus).map((menu) => {
							return (
									<a key={menu}
									   className={menu === this.state.currentMenu ? 'current-demo' : ''}
									   onClick={() => this.setState({currentMenu: menu})}>
									  {this.state.menus[menu].buttonText}
									</a>
							);
						  })}
						</nav>
					  </div>

					  <SideNavWrapper wait={20} side={this.state.side}>
						<Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={this.state.side === 'right'}>
						  {anchors.map((item, index) => {
							return <a key={index}
									  href={item.href}
									  className={`side-nav-link ${window.location.pathname === `/${item.href}` ? 'active' : ''}`}
									  onClick={() => this.setState({active: index})}><span>{item.title}</span></a>
						  })}
						</Menu>
					  </SideNavWrapper>

					  {/*<main id="page-wrap">
						<h1>Side Menu</h1>
						<a className={`side-button left ${this.state.side === "left" ? 'active' : ''}`} onClick={() => this.setState({side: 'left'})}>Left</a>
						<a className={`side-button right ${this.state.side === "right" ? 'active' : ''}`} onClick={() => this.setState({side: 'right'})}>Right</a>
						<nav className="demo-buttons">
						  {Object.keys(this.state.menus).map((menu) => {
							return (
									<a key={menu}
									   className={menu === this.state.currentMenu ? 'current-demo' : ''}
									   onClick={() => this.setState({currentMenu: menu})}>
									  {this.state.menus[menu].buttonText}
									</a>
							);
						  })}
						</nav>
					  </main>*/}

					</div>


			</React.Fragment>
	);
  }
}

export default Navigation;
