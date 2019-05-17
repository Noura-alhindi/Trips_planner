import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.visittelluride.com/site/assets/files/36264/dojet_tex.jpg"
              alt="First slide"
              width="600"
              height="480"
            />
           
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://whatson.ae/dubai/wp-content/uploads/2016/09/Kyo-header-963x400.jpg"
              alt="Third slide"
              width="600"
              height="480"
            />
            
  
            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.davidgriffen.com/wp-content/uploads/2019/04/Sydney-Food-Restaurant-Photographer_David-Griffen-33.jpg"
              alt="Secont slide"
              width="600"
              height="480"
            /> 
            
  
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.vox-cdn.com/thumbor/wDMGcp7qWsr5fozJRYwBPxwwxaU=/0x0:4500x2045/1200x0/filters:focal(0x0:4500x2045):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12725133/Zela_London___Cocktail_Bar.jpg"
              alt="Third slide"
              width="600"
              height="480"
            />
           
            
  
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              {/* <p> */}
                {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
              {/* </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
//   render(<ControlledCarousel />);

  export default ControlledCarousel;