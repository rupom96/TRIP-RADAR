import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //the whole object is printing    
        console.log(data);

        axios.post('https://grisly-mummy-07425.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package added successfully');
                    reset();
                }

            })

    }

    return (
        <div className="add-package">
            <h1 className="mt-5 pt-5 mb-5 pb-3">Add a new trip package: </h1>

            <form className="container text-start w-75" onSubmit={handleSubmit(onSubmit)}>
                <h6> Trip place name: </h6>
                <input {...register("name", { required: true })} className="form-control" placeholder="Place Name" />


                <h6> Trip Short details: </h6>
                <textarea {...register("short_details", { required: true })} className="form-control" rows="3" placeholder="Short details" />

                <h6> Trip Full details: </h6>
                <textarea {...register("details", { required: true })} className="form-control" rows="6" placeholder="Place/package Details" />


                <h6> District of the place: </h6>
                <input {...register("district", { required: true })}
                    className="form-control" placeholder="Place District" />

                <h6> Division of the place: </h6>
                <input {...register("division", { required: true })}
                    className="form-control" placeholder="Division" />

                <h6> Country of the place: </h6>
                <input {...register("country", { required: true })}
                    className="form-control" placeholder="Country" />

                <h6> Package cost: </h6>
                <input type="number" {...register("cost", { required: true })} className="form-control" placeholder="Cost" />

                <h6> Trip place image URL: </h6>
                <input {...register("image", { required: true })}
                    className="form-control" placeholder="Image URL" />

                <input className="btn btn-primary" type="submit" value="Add the package" />
            </form>


        </div>
    );
};

export default AddPackage;