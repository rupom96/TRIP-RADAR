import React from 'react';
// import { Button, Card } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import Service from '../Service/Service';

const Services = () => {
    const [data] = useData();

    const handleClickService = () => {

    }

    return (
        <div className="services mt-5">
            <h1 id="servicesid">Our Trip Packages:</h1>
            <div className="card-container px-5 mt-5">

                {data.length === 0 &&

                    <div class="d-flex justify-content-center mt-5 mb-5">
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* per card will be set here */}
                    {
                        data.map(data =>
                            <Service
                                key={data._id}
                                service={data}
                                handleClickService={handleClickService}
                            ></Service>)
                    }


                </div>

            </div>

        </div>
    );
};

export default Services;