import React from 'react';
// import { useContext } from 'react';
// import { UserContext } from '../../../../App';

const Orders = ({parcel}) => {
    console.log(parcel);
    const {_id, kg, day, price} = parcel;
    const {img, description, title, type, status} = parcel.services
  
    return (
        <section className=" col-lg-6 col-md-12 col-sm-12 col-12 ">
           
            <div className="w-100  p-4 mb-5 bg-body " style={{boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)'}} >
            <img className="w-25" src={img} alt="" />
            <div className="d-flex justify-content-between">
                <h6> Delivery-id:  {_id}</h6>
                <h6 className="p-2 text-light" style={{backgroundColor:'#98A5E5'}}>{status}</h6>
            </div>
            <div className="d-flex justify-content-between">
                <h5>{title}</h5>
                <h5>{type}</h5>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className="d-flex justify-content-between">
                <h6>{kg}</h6>
                <h6>{day}</h6>
                <h6>${price}</h6>
            </div>
        </div> 

        </section>
    );
};

export default Orders;