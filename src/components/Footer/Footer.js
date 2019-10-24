
import React from 'react';
import autoBind from 'react-autobind';
import './Footer.scss';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	}

	autoBind(this);
  }


  render() {

	return (
			<footer className="Footer flex-rw">

			  {/*TODO implement once we have more content released */}
			  {/*<ul className="footer-list-top">
				<li><h5 className="footer-list-header">Lorem Ipsum</h5></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
			  </ul>

			  <ul className="footer-list-top">
				<li><h5 className="footer-list-header">Lorem Ipsum</h5></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
			  </ul>

			  <ul className="footer-list-top">
				<li><h5 className="footer-list-header">Lorem Ipsum</h5></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
				<li><Link to='/' className="generic-anchor footer-list-anchor">LINK HERE</Link></li>
			  </ul>*/}


			  {/*<section className="footer-social-section flex-rw">
				<span className="footer-social-overlap footer-social-connect">
				CONNECT <span className="footer-social-small">with</span> US
				</span>
				<span className="footer-social-overlap footer-social-icons-wrapper">
				  <Link to="https://www.pinterest.com/paviliongift/" className="generic-anchor" target="_blank" rel="noopener noreferrer" title="Pinterest" itemProp="significantLink"><i className="fa fa-pinterest"></i/>
				  <Link to="https://www.facebook.com/paviliongift" className="generic-anchor" target="_blank" rel="noopener noreferrer" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook"></i/>
				  <Link to="https://twitter.com/PavilionGiftCo" className="generic-anchor" target="_blank" rel="noopener noreferrer" title="Twitter" itemProp="significantLink"><i className="fa fa-twitter"></i/>
				  <Link to="http://instagram.com/paviliongiftcompany" className="generic-anchor" target="_blank" rel="noopener noreferrer" title="Instagram" itemProp="significantLink"><i className="fa fa-instagram"></i/>
				  <Link to="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" className="generic-anchor" target="_blank" rel="noopener noreferrer" title="Youtube" itemProp="significantLink"><i className="fa fa-youtube"></i/>
				  <Link to="https://plus.google.com/+Paviliongift/posts" className="generic-anchor" target="_blank" rel="noopener noreferrer" title="Google Plus" itemProp="significantLink"><i className="fa fa-google-plus"></i></Link>
				</span>
			  </section>*/}

			  <section className="footer-bottom-section flex-rw">

				<div className="footer-bottom-wrapper">
				  <i className="fa fa-copyright" role="copyright">
				  </i> &copy; {new Date().getFullYear()} 40 Years of Zen in <address className="footer-address" role="company address">Kent, WA</address> <i className="footer-bottom-rights">All Rights Reserved</i>
				</div>

				<div className="footer-bottom-wrapper">
				  <Link to="/billing-policies" className="generic-anchor" rel="nofollow">Billing and Refund Policies</Link> | <Link to="/privacy-policy" className="generic-anchor" rel="nofollow">Privacy</Link>
				</div>

			  </section>
			</footer>
	)
  }
}


Footer.propTypes = {

};

export default Footer;



