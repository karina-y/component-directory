import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './Navigation.scss';
import { Image } from 'react-bootstrap';
import BurgerMenu from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faImages, faTasks, faFileAlt, faUserTie, faUsers, faBriefcase, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


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
		// fallDown: {buttonText: 'Fall Down', items: 2},
		// reveal: {buttonText: 'Reveal', items: 1}
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
		title: "Accordion",
		icon: faDesktop
	  },
	  {
		href: "imagecarousel",
		title: "Image Carousel",
		icon: faImages
	  },
	  {
		href: "imagehover",
		title: "Image Hover",
		icon: faTasks
	  },
	  {
		href: "loader",
		title: "Loader",
		icon: faFileAlt
	  },
	  {
		href: "parallaxbanner",
		title: "Parallax Bar",
		icon: faUserTie
	  },
	  {
		href: "quotecard",
		title: "Quote Card",
		icon: faUsers
	  },
	  {
		href: "shadowbox",
		title: "ShadowBox",
		icon: faBriefcase
	  },
	  {
		href: "staffcard",
		title: "StaffCard",
		icon: faSignOutAlt
	  },
	  {
		href: "blog",
		title: "ManageBlogs",
		icon: faSignOutAlt
	  },
	  {
		href: "buttons",
		title: "Buttons",
		icon: faSignOutAlt
	  },
	  {
		href: "task",
		title: "ManageTasks",
		icon: faSignOutAlt
	  },
	  {
		href: "twocolumncontent",
		title: "TwoColumnContent",
		icon: faSignOutAlt
	  },
	  {
		href: "twocolumnfade",
		title: "TwoColumnFade",
		icon: faSignOutAlt
	  },
	  {
		href: "twocolumnpopup",
		title: "TwoColumnPopup",
		icon: faSignOutAlt
	  },
	  {
		href: "twocolumntext",
		title: "TwoColumnText",
		icon: faSignOutAlt
	  },
	  {
		href: "textimageoverlap",
		title: "TextImageOverlap",
		icon: faSignOutAlt
	  },
	];

	return (
			<React.Fragment>

			  <div className="navbar-container">
				<nav className="custom-navbar">
				  <div className="brand"><Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" /></div>

				  {Object.keys(this.state.menus).map((menu) => {
					return (
							<a key={menu}
							   className={menu === this.state.currentMenu ? 'active' : ''}
							   onClick={() => this.setState({currentMenu: menu})}>
							  {this.state.menus[menu].buttonText}
							</a>
					);
				  })}
				</nav>
			  </div>

			  <div className="side-navbar-container">
				<div className="side-navbar" style={{height: '100%'}}>
				  <SideNavWrapper wait={20} side={this.state.side}>
					<Menu id={this.state.currentMenu} pageWrapId="pageWrap" outerContainerId="outerContainer" right={this.state.side === 'right'}>
					  {anchors.map((item, index) => {
						return <a key={index}
								  href={item.href}
								  className={`side-nav-link ${window.location.pathname === `/${item.href}` ? 'active' : ''}`}
								  onClick={() => this.setState({active: index})}><span><FontAwesomeIcon icon={item.icon} title={item.title} /> {item.title}</span></a>
					  })}
					</Menu>
				  </SideNavWrapper>
				</div>
			  </div>

			</React.Fragment>
	);
  }
}

export default Navigation;
