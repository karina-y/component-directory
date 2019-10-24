import React from 'react';
import { Container } from 'react-bootstrap';
import ImageHover from '../components/ImageHover/ImageHover';
import ColorEnums from '../utils/colors';

const COLOR_ENUMS = ColorEnums.COLOR_ENUMS;

const peopleMore = [
  {
	picture: "http://www.ronswansongrill.com/images/ron-bbq.jpg",
	fname: "Ron",
	lname: "Swanson",
	jobTitle: "Professional Griller",
	schedule: "Whenever I Damn Well Please",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	email: "ronswanson@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "lily"
  },
  {
	picture: "https://mediaproxy.salon.com/width/972/https://media.salon.com/2012/11/knope_campaign_rect.jpg",
	fname: "Leslie",
	lname: "Knope",
	jobTitle: "Deputy Director",
	schedule: "All day errday",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "leslieknope@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "sadie"
  },
  {
	picture: "https://cdn.shopify.com/s/files/1/0094/8142/0858/products/tomhead2_720x.png?v=1564497223",
	fname: "Tom",
	lname: "Haverford",
	jobTitle: "Administrator",
	schedule: "9-5pm M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "tomhaverford@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "honey"
  },
  {
	picture: "https://vignette.wikia.nocookie.net/characters/images/6/6f/April_Ludgate.JPG/revision/latest?cb=20170707011218",
	fname: "April",
	lname: "Ludgate",
	jobTitle: "Asst. to Ron Swanson",
	schedule: "sometimes",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "tomhaverford@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "layla"
  },
  {
	picture: "https://i2.wp.com/27.media.tumblr.com/tumblr_m039wpRS3H1roujg8o1_500.png",
	fname: "Donna",
	lname: "Meagle",
	jobTitle: "Permits Secretary",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "donnameagle@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "zoe"
  },
  {
	picture: "https://cdn.theatlantic.com/assets/media/img/mt/2015/02/jerry_pie/lead_720_405.png?mod=1533691730",
	fname: "Jerry",
	lname: "Gergich",
	jobTitle: "Office Manager",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "jerrygergich@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "oscar"
  },
  {
	picture: "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/31/11/campaign_images/webdr09/25-signs-youre-actually-andy-dwyer-from-parks-and-2-32741-1406822103-2_dblbig.jpg",
	fname: "Andy",
	lname: "Dwyer",
	jobTitle: "Asst. to Leslie Knope",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "andydwyer@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "marley"
  },
  {
	picture: "http://www.ronswansongrill.com/images/ron-bbq.jpg",
	fname: "Ron",
	lname: "Swanson",
	jobTitle: "Professional Griller",
	schedule: "Whenever I Damn Well Please",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "ronswanson@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "ruby"
  },
  {
	picture: "https://mediaproxy.salon.com/width/972/https://media.salon.com/2012/11/knope_campaign_rect.jpg",
	fname: "Leslie",
	lname: "Knope",
	jobTitle: "Deputy Director",
	schedule: "All day errday",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "leslieknope@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "roxy"
  },
  {
	picture: "https://cdn.shopify.com/s/files/1/0094/8142/0858/products/tomhead2_720x.png?v=1564497223",
	fname: "Tom",
	lname: "Haverford",
	jobTitle: "Administrator",
	schedule: "9-5pm M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "tomhaverford@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "bubba"
  },
  {
	picture: "https://vignette.wikia.nocookie.net/characters/images/6/6f/April_Ludgate.JPG/revision/latest?cb=20170707011218",
	fname: "April",
	lname: "Ludgate",
	jobTitle: "Asst. to Ron Swanson",
	schedule: "sometimes",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "tomhaverford@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "romeo"
  },
  {
	picture: "https://i2.wp.com/27.media.tumblr.com/tumblr_m039wpRS3H1roujg8o1_500.png",
	fname: "Donna",
	lname: "Meagle",
	jobTitle: "Permits Secretary",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	email: "donnameagle@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "dexter"
  },
  {
	picture: "https://cdn.theatlantic.com/assets/media/img/mt/2015/02/jerry_pie/lead_720_405.png?mod=1533691730",
	fname: "Jerry",
	lname: "Gergich",
	jobTitle: "Office Manager",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "jerrygergich@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "sarah"
  },
  {
	picture: "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/31/11/campaign_images/webdr09/25-signs-youre-actually-andy-dwyer-from-parks-and-2-32741-1406822103-2_dblbig.jpg",
	fname: "Andy",
	lname: "Dwyer",
	jobTitle: "Asst. to Leslie Knope",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "andydwyer@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "chico"
  },
  {
	picture: "http://www.ronswansongrill.com/images/ron-bbq.jpg",
	fname: "Ron",
	lname: "Swanson",
	jobTitle: "Professional Griller",
	schedule: "Whenever I Damn Well Please",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	email: "ronswanson@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "milo"
  },
];

const ImageHoverPage = props => (
		<Container className="ImageHoverPage">

		  <div className="component-container imagehover-components" id="imagehover">
			<h1>ImageHover</h1>
			{peopleMore.map((item, index) => {
			  return <ImageHover duration={500}
								 delay={200}
								 effect={item.hover}
								 backgroundColor={COLOR_ENUMS.brandMagenta}
								 image={item.picture}
								 title={<h4><span>{item.fname}</span> {item.lname} <p className="job-title">{item.jobTitle}</p></h4>}
								 width="500px"
								 height="700px"
								 additionalOuterClasses="text-bottom"
								 subtitle={item.desc}
								 key={index}/>

			})}
		  </div>
		</Container>
);

ImageHoverPage.defaultProps = {

};

ImageHoverPage.propTypes = {
};

export default ImageHoverPage;
