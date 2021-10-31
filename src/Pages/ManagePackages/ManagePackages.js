import React from 'react';
import useOrder from '../../hooks/useOrder';
import ManagePackage from '../ManagePackage/ManagePackage';
import { HashLink } from 'react-router-hash-link';


const ManagePackages = () => {


    const [order] = useOrder();


    const afterClickDelete = (remainingOrders) => {
        // setOrder(remainingOrders);
        window.location.reload();

    };

    const afterClickApprove = () => {

        window.location.reload();

    }

    return (
        <div className="packages mt-5 pt-5">
            <h1>All ordered packages:</h1>

            {order.length === 0 &&

                <h5 className="mt-5 text-danger">Maybe no one haven't placed any order yet! If have, we are fetching your data, please wait...</h5>
            }
            <div className="mt-3">
                <h5> Want to book/order more trip package? <HashLink to="/home#servicesid">Click Here to go to Packages</HashLink> </h5>
            </div>

            <div className="card-container px-5 mt-5">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* per order card will be set here */}
                    {
                        order.map(data =>
                            <ManagePackage
                                key={data._id}
                                order={data}
                                afterClickDelete={afterClickDelete}
                                afterClickApprove={afterClickApprove}
                            ></ManagePackage>)
                    }


                </div>

            </div>

        </div>
    );
};

export default ManagePackages;