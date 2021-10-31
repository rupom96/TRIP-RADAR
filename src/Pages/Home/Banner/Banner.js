import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="mt-5">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/cXDVrrZ/banner-1e.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption text-left">
                        <h3 className="head-caption" >Welcome to TRIP RADAR</h3>
                        <p className="head-para" >Dont worry about your trip planning! We will do it for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/0yPxfZ4/banner-2e.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="head-caption">Try our packages</h3>
                        <p className="head-para">They cant be more affordable and high qualified than this! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/9297yWb/banner-3e.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="head-caption">Join Us</h3>
                        <p className="head-para">Contribute us for improvement!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>




        </div>
    );
};

export default Banner;