import React from 'react';
import {Carousel} from 'react-bootstrap';
import Dodge from'../../../../Image/Slider/Auto/Dodge.jpg';
import Ford from'../../../../Image/Slider/Auto/Ford.jpg';
import Jaguar from'../../../../Image/Slider/Auto/Jaguar.jpg';
import Lamborghini from'../../../../Image/Slider/Auto/Lamborghini.jpg';
import Subaru from'../../../../Image/Slider/Auto/Subaru.jpg';
import Volkswagen from'../../../../Image/Slider/Auto/Volkswagen.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
class Slider extends React.Component
{
    render()
    {
      return (
        <Carousel slide={true} wrap={true} controls={false}>
            <Carousel.Item interval={500}>
                <img className="d-block w-100"
                src={Dodge}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Ford}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Jaguar}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Lamborghini}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Subaru}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={Volkswagen}
                />
            </Carousel.Item>
        </Carousel>
        )
    
    }
}
export default Slider;