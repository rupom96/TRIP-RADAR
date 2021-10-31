import React from 'react';

import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import MyPackage from '../MyPackage/MyPackage';
import { HashLink } from 'react-router-hash-link';

const MyPackages = () => {
    const [order] = useOrder();
    const { user } = useAuth();

    const afterClickDelete = (remainingOrders) => {
        // setOrder(remainingOrders);
        window.location.reload();

    }

    let myOrders = order?.filter(e => e.user_id === user.uid);
    console.log(myOrders);

    return (
        <div className="packages mt-5 pt-5">
            <h1>My ordered packages:</h1>

            {myOrders.length === 0 &&

                <h5 className="mt-5 text-danger">Maybe you haven't placed any order yet! If you have, please wait...</h5>
            }
            <div className="mt-3">
                <h5> Want to book/order more trip package? <HashLink to="/home#servicesid">Click Here to go to Packages</HashLink> </h5>
            </div>

            <div className="card-container px-5 mt-5">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* per order card will be set here */}
                    {
                        myOrders.map(data =>
                            <MyPackage
                                key={data._id}
                                myorder={data}
                                afterClickDelete={afterClickDelete}
                            ></MyPackage>)
                    }


                </div>

            </div>

        </div>
    );
};

export default MyPackages;