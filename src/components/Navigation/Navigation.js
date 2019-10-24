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
	  active: 1,
	  currentMenu: 'slide',
	  side: 'left',
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

  changeMenu(menu) {
	this.setState({currentMenu: menu});
  }

  changeSide(side) {
	this.setState({side});
  }

  getItems() {
	let items;

	switch (this.state.menus[this.state.currentMenu].items) {
	  case 1:
		items = [
		  <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
		  <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
		  <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
		  <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
		  <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
		  <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
		];
		break;
	  case 2:
		items = [
		  <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x" /><span>Sidebar</span></h2>,
		  <a key="1" href=""><i className="fa fa-fw fa-database" /><span>Data Management</span></a>,
		  <a key="2" href=""><i className="fa fa-fw fa-map-marker" /><span>Location</span></a>,
		  <a key="3" href=""><i className="fa fa-fw fa-mortar-board" /><span>Study</span></a>,
		  <a key="4" href=""><i className="fa fa-fw fa-picture-o" /><span>Collections</span></a>,
		  <a key="5" href=""><i className="fa fa-fw fa-money" /><span>Credits</span></a>
		];
		break;
	  default:
		items = [
		  <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
		  <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
		  <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
		  <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
		  <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
		  <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
		];
	}

	return items;
  }

  getMenu() {
	const Menu = BurgerMenu[this.state.currentMenu];

	return (
			<SideNavWrapper wait={20} side={this.state.side}>
			  <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={this.state.side === 'right'}>
				{this.getItems()}
			  </Menu>
			</SideNavWrapper>
	);
  }

  render() {
	const buttons = Object.keys(this.state.menus).map((menu) => {
	  return (
			  <a key={menu}
				 className={menu === this.state.currentMenu ? 'current-demo' : ''}
				 onClick={this.changeMenu.bind(this, menu)}>
				{this.state.menus[menu].buttonText}
			  </a>
	  );
	});
	const active = this.state.active;
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

	return (
			this.props.style === "side" ?
			<div id="outer-container" className="side-navbar" style={{height: '100%'}}>
			  {this.getMenu()}
			  <main id="page-wrap">
				<h1>Side Menu</h1>
				<a className={`side-button left ${this.state.side === "left" ? 'active' : ''}`} onClick={this.changeSide.bind(this, 'left')}>Left</a>
				<a className={`side-button right ${this.state.side === "right" ? 'active' : ''}`} onClick={this.changeSide.bind(this, 'right')}>Right</a>
				<nav className="demo-buttons">
				  {buttons}
				</nav>
			  </main>
			</div>
					:
					<div className="navbar-container">
						<nav className="custom-navbar">
						  {anchors.map((item, index) => {
							return <div className={`nav-link ${active === index ? 'active' : ''}`} key={index}><a href={`#${item.href}`} onClick={() => this.setState({active:item.index})}>{item.title}</a></div>
						  })}
						  <div className="brand"><Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" /></div>

						</nav>
					</div>
	);
  }
}

export default Navigation;
