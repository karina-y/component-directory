import React from 'react';
import autoBind from 'react-autobind';
import './Navigation.scss';
import { Container, Image } from 'react-bootstrap';


class Navigation extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  active: 1
	}

	autoBind(this);
  }


  render() {
	const active = this.state.active;


	return (
			<div className="navbar-container">
			  <div>
				<nav className="custom-navbar">
				  <div className="brand"><Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" /></div>

				  <div className={`nav-link ${active === 1 ? 'active' : ''}`}><a href="#accordion" onClick={() => this.setState({active:1})}>Accordion</a></div>
				  <div className={`nav-link ${active === 2 ? 'active' : ''}`}><a href="#imagecarousel" onClick={() => this.setState({active:2})}>Image Carousel</a></div>
				  <div className={`nav-link ${active === 3 ? 'active' : ''}`}><a href="#imagehover" onClick={() => this.setState({active:3})}>Image Hover</a></div>
				  <div className={`nav-link ${active === 4 ? 'active' : ''}`}><a href="#loader" onClick={() => this.setState({active:4})}>Loader</a></div>
				  <div className={`nav-link ${active === 5 ? 'active' : ''}`}><a href="#parallaxbanner" onClick={() => this.setState({active:5})}>Parallax Banner</a></div>
				  <div className={`nav-link ${active === 5 ? 'active' : ''}`}><a href="#quotecard" onClick={() => this.setState({active:6})}>Quote Card</a></div>
				  <div className={`nav-link ${active === 5 ? 'active' : ''}`}><a href="#shadowbox" onClick={() => this.setState({active:7})}>ShadowBox</a></div>

				</nav>
			  </div>
			</div>
	)
  }
}


export default Navigation;
