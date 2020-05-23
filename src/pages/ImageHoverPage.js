import React from 'react';
import { Container } from 'react-bootstrap';
import ImageHover from '../components/ImageHover/ImageHover';
import ColorEnums from '../utils/colors';
import DummyData from '../utils/dummyData';

const COLOR_ENUMS = ColorEnums.COLOR_ENUMS;
const PEOPLE = DummyData.People.EXTENDED;


const ImageHoverPage = props => (
		<div className="ImageHoverPage">

		  <div className="component-container imagehover-components" id="imagehover">
			<h1>ImageHover</h1>
			{PEOPLE.map((item, index) => {
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
		</div>
);

ImageHoverPage.defaultProps = {

};

ImageHoverPage.propTypes = {
};

export default ImageHoverPage;
