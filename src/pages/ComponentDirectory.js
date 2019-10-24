import React from 'react';
import AccordionPanel from '../components/AccordionPanel/AccordionPanel';
import { Container, Row } from 'react-bootstrap'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import ImageHover from '../components/ImageHover/ImageHover';
import ColorEnums from '../utils/colors';
import Fade from 'react-reveal/Fade';
import Loader from '../components/Loader/Loader'
import ParallaxBanner from '../components/ParallaxBanner/ParallaxBanner'
import ShadowBox from '../components/ShadowBox/ShadowBox'
import QuoteCard from '../components/QuoteCard/QuoteCard'
import TextImageOverlap from '../components/TextImageOverlap/TextImageOverlap'

const COLOR_ENUMS = ColorEnums.COLOR_ENUMS;

const images = [
  {image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&w=1000&q=80", title: "image title"},
  {image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&w=1000&q=80", title: "image title"},
  {image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&w=1000&q=80", title: "image title"},
  {image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&w=1000&q=80", title: "image title"},
  {image: "https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: "image title"},
];

const people = [
  {
	picture: "http://www.ronswansongrill.com/images/ron-bbq.jpg",
	fname: "Ron",
	lname: "Swanson",
	jobTitle: "Professional Griller",
	schedule: "Whenever I Damn Well Please",
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
	email: "andydwyer@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "marley"
  }
];

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

const quoteData = [
  {
	name:"John Smith",
	jobTitle:"Job Title Here",
	quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
	name:"Jane Doe",
	jobTitle:"Job Title Here",
	quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
  },
  {
	name:"Jane Smith",
	jobTitle:"Job Title Here",
	quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]

const ComponentDirectory = props => (
		<Container className="ComponentDirectory">

		  <div className="component-container" id="accordion">
			<h1>AccordionPanel</h1>
			<AccordionPanel index={0} title="Accordion Panel Title" content="Accordion Panel Content" />
		  </div>

		  <div className="component-container" id="imagecarousel">
			<h1>ImageCarousel</h1>
			<ImageCarousel grid={false} modal={false} images={images} id="carousel-1" />
		  </div>

		  <div className="component-container">
			<h1>ImageCarousel: grid</h1>
			<ImageCarousel grid={true} modal={false} images={images} id="carousel-2" />
		  </div>

		  <div className="component-container">
			<h1>ImageCarousel: modal</h1>
			<ImageCarousel grid={true} modal={true} images={images} id="carousel-3" />
		  </div>

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

		  <div className="component-container" id="loader">
			<h1>Loader</h1>
			<Loader isLoading={true}/>
		  </div>

		  <div className="component-container" id="parallaxbanner">
			<h1>ParallaxBanner</h1>

			<ParallaxBanner image="landscape_01"
							buttonClasses="dark-pink-btn popup"
							navigateTo="#parallaxbanner"
							buttonText="Parallax Banner"
							buttonSize="large"
							history={props.history} />
		  </div>

		  <div className="component-container" id="quotecard">
			<h1>QuoteCard</h1>

			<QuoteCard data={quoteData}/>

		  </div>

		  <div className="component-container" id="shadowbox">
			<h1>ShadowBox</h1>

			<Row>
			  <ShadowBox hoverAction={true}
						 popoutHover={false}
						 shadowLevel={4}
						 bootstrapColClasses={"col-sm-6"}>
				Shadow
			  </ShadowBox>

			  <ShadowBox hoverAction={true}
						 popoutHover={true}
						 shadowLevel={4}
						 bootstrapColClasses={"col-sm-6"}>
				Popout
			  </ShadowBox>
			</Row>

		  </div>

		  <div className="component-container" id="textimageoverlap">
			<h1>TextImageOverlap: left</h1>

			<TextImageOverlap imagePlacement="left"
							  mainImage="/images/landscape_01.jpeg"
							  subImage="/images/landscape_02.jpg"
							  mainImageAlt="Bulletproof Supplements"
							  subImageAlt="Bulletproof Supplements"
							  text={<div className="supplements">
								<div>Top Notch Supplements and Supplementation to Reach Peak Performance.</div>
								<div><span className="quote">“In my Neurofeedback journey I discovered I could go twice as long if I was eating the right foods
								and taking the right supplements. I made sure you get everything you need."</span> <span className="quoter">- Dave Asprey</span></div>
							  </div>}
							  />

		  </div>

		  <div className="component-container">
			<h1>TextImageOverlap: right</h1>

			<TextImageOverlap imagePlacement="right"
							  mainImage="/images/landscape_02.jpg"
							  subImage="/images/landscape_01.jpeg"
							  mainImageAlt="Bulletproof Diet"
							  subImageAlt="Bulletproof Diet"
							  text="Eat the highest quality food with your private Bulletproof chef. Food for your brain, Nourishment for Your soul. A private chef means all your unique dietary needs are met."
							  />

		  </div>


		</Container>
);

ComponentDirectory.defaultProps = {

};

ComponentDirectory.propTypes = {
};

export default ComponentDirectory;
