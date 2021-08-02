import React, { useState } from 'react';
import BookingForm from './BookingForm';


const PriceCard = ({servicePrice, services}) => {
    console.log(servicePrice, services);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
const {kg, price, day} = servicePrice;
    return (
        
            <div className="col-md-3 mb-4 ">
                <div className="card">
                    <div className="card-body text-center">
                        <h6 className="text-muted"> {kg}   / {day}  </h6>
                        <h6>{services.type} </h6>
                        <h5 className="card-title"> ৳ {price}  + 1% COD </h5>
                        <button onClick={openModal} className="btn all-btn">Choose Plane</button>
                        <BookingForm modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}  services={services} servicePrice={servicePrice}></BookingForm>
                    </div>
                </div>
            </div>
       
    );
};

export default PriceCard;