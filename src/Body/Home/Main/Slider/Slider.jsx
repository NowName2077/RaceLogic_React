import React from 'react';
import {Carousel} from 'react-bootstrap';
import Audi from'../../../../Image/Slider/Home/AUDI.jpg';
import Civic from'../../../../Image/Slider/Home/CIVIC.jpg';
import Gtr from'../../../../Image/Slider/Home/GTR_32.jpg';
import Porsche from'../../../../Image/Slider/Home/PORSCHE.jpg';
import Subaru from'../../../../Image/Slider/Home/SUBARU.jpg';
import Fairlady from'../../../../Image/Slider/Home/240_Z.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
class Slider extends React.Component
{
    render()
    {
      return (
        <Carousel slide={true} wrap={true} controls={false}>
            <Carousel.Item interval={500}>
                <img className="d-block w-100"
                src={Audi}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Civic}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Gtr}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Porsche}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Subaru}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Fairlady}
                />
            </Carousel.Item>
        </Carousel>
        )
    
    }
}
export default Slider;