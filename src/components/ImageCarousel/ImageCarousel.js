
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import './ImageCarousel.scss';
import { Button, Carousel, Modal } from 'react-bootstrap'
import ShadowBox from '../ShadowBox/ShadowBox';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage'

class ImageCarousel extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  index: 0,
	  direction: null,
	  show: false
	}

	autoBind(this);
  }

  handleSelect(selectedIndex, e) {

	if (e) {
	  //if an arrow is clicked
	  this.setState({
		index: selectedIndex,
		direction: e.direction
	  });
	} else if (selectedIndex !== this.state.index) {
	  //if a grid image is clicked
	  const direction = selectedIndex > this.state.index ? "next" : "prev";

	  this.setState({
		index: selectedIndex,
		direction: direction
	  });
	}

  }

  handleClose() {
	this.setState({ show: false });
  }

  handleShow(selectedIndex) {
	this.setState({ show: true });
	this.handleSelect(selectedIndex, null);
  }

  render() {

	return (

			<div className={`ImageCarousel ${this.props.modal ? 'modal-carousel' : ''}`}>

			  {/*grid only with modal*/}

			  {/*grid with carousel*/}

			  {/*carousel only*/}

			  {this.props.grid && !this.props.modal ?

					  //grid with carousel
					  <div className="carousel-gallery full-width grid-carousel">

						<Carousel activeIndex={this.state.index}
								  direction={this.state.direction}
								  onSelect={this.handleSelect}
								  indicators={false}
								  id={this.props.id}>

						  {this.props.images.map((item, index) => {
							return (
									<Carousel.Item key={index}>

									  {item.image === "/images/facilities/11" ?
											  <ResponsiveImage image={item.image} imageAlt="image alt" additionalOuterClasses={`slide-${index} image obj-pos-bottom`}/>
											  :
											  <ResponsiveImage image={item.image} imageAlt="image alt" additionalOuterClasses={`slide-${index} image`}/>
									  }


									  <Carousel.Caption>
										{item.title ? <h5>{item.title}</h5> : ''}
										{item.desc ? <p>{item.desc}</p> : ''}
									  </Carousel.Caption>
									</Carousel.Item>
							)
						  })}

						</Carousel>

						<div className="image-grid">
						  {this.props.images.map((item, index) => {
							return (

									<Button key={index}
											onClick={(e) => this.handleSelect(index, null)}
											className="naked">
									  <ShadowBox hoverAction={false}
												 popoutHover={true}
												 shadowLevel={2}
												 isActive={this.state.index === index && this.state.direction ? true : false}>
										<ResponsiveImage image={item.image} imageAlt="image alt" />
									  </ShadowBox>
									</Button>
							)
						  })}
						</div>
					  </div>
					  : !this.props.modal ?
							  //no grid, just full width carousel
							  <div className="no-grid-carousel">
								<Carousel direction={this.state.direction}
										  onSelect={this.handleSelect}
										  indicators={false}
										  id={this.props.id}>

								  {this.props.images.map((item, index) => {
									return (
											<Carousel.Item key={index}>
											  {/*<div className={`slide-${index} image`} style={{backgroundImage: `url('${item.image}')`}}></div>*/}
											  <ResponsiveImage image={item.image} imageAlt="image alt" additionalOuterClasses={`slide-${index} image`} />
											  <Carousel.Caption>
												{item.title ? <h5>{item.title}</h5> : ''}
												{item.desc ? <p>{item.desc}</p> : ''}
											  </Carousel.Caption>
											</Carousel.Item>
									)
								  })}

								</Carousel>
							  </div>
							  :
							  //only grid, click opens modal
							  <div className="image-grid">
								{this.props.images.map((item, index) => {
								  return (
										  <Button key={index}
												  onClick={(e) => this.handleShow(index, null)}
												  className="naked">
											<ShadowBox hoverAction={false}
													   popoutHover={true}
													   shadowLevel={2}
													   isActive={this.state.index === index && this.state.direction ? true : false}>
											  <ResponsiveImage image={item.image} imageAlt="image alt" />
											</ShadowBox>
										  </Button>
								  )
								})}
							  </div>
			  }

			  {this.props.modal ?
					  <Modal show={this.state.show} onHide={this.handleClose} size="lg">
						<Modal.Body>
						  <Carousel activeIndex={this.state.index}
									direction={this.state.direction}
									onSelect={this.handleSelect}
									indicators={false}
									id={this.props.id}>

							{this.props.images.map((item, index) => {
							  return (
									  <Carousel.Item key={index}>
										{/*<div className={`slide-${index} image`} style={{backgroundImage: `url('${item.image}')`}}></div>*/}
										<ResponsiveImage image={item.image} imageAlt="image alt" additionalOuterClasses={`slide-${index} image`} />
										<Carousel.Caption>
										  {item.title ? <h5>{item.title}</h5> : ''}
										  {item.desc ? <p>{item.desc}</p> : ''}
										</Carousel.Caption>
									  </Carousel.Item>
							  )
							})}

						  </Carousel>
						</Modal.Body>
					  </Modal>
					  :
					  ''
			  }

			</div>
	)
  }
}


ImageCarousel.propTypes = {
  grid: PropTypes.bool.isRequired,	//pick just grid or modal, not both
  modal: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
  autoplay: PropTypes.bool,
  id: PropTypes.string.isRequired
};

export default ImageCarousel;



