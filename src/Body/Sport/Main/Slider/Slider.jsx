import React from 'react';
import {Carousel} from 'react-bootstrap';
import AMG from'../../../../Image/Slider/Sport/AMG.jpg';
import GR from'../../../../Image/Slider/Sport/GR.jpg';
import M_Technik from'../../../../Image/Slider/Sport/M-Technik.jpg';
import NISMO from'../../../../Image/Slider/Sport/NISMO.jpg';
import STI from'../../../../Image/Slider/Sport/STI.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
class Slider extends React.Component
{
    render()
    {
      return (
        <Carousel slide={true} wrap={true} controls={false}>
            <Carousel.Item interval={500}>
                <img className="d-block w-100"
                src={AMG}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={GR}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={M_Technik}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={NISMO}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='d-block w-100' 
                src={STI}
                />
            </Carousel.Item>
        </Carousel>
        )
    
    }
}
export default Slider;