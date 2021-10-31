import React from 'react';


const Staff = () => {
    return (
        <div className="container mt-5 px-5">
            <h1>Our Team:</h1>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/k3CX9yH/staf4.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Helena Texas</h5>
                            <p className="card-text">Founder and CEO</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/n7qDh0b/staf1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Nick Gear</h5>
                            <p className="card-text">Chief Finance Officer</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/QC85RhY/staf3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mrs. Sophie Turner</h5>
                            <p className="card-text">Head of trip package planning</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/PQg2rJ7/staf2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mr. Tony Stark</h5>
                            <p className="card-text">Head of Marketing</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Staff;