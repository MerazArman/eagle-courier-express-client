import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Checkout from '../../CheckoutPage/Checkout/Checkout';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

const BookingForm = ({modalIsOpen, setIsOpen, services, servicePrice}) => {

  const [userLogged, setUserLogged] = useContext(UserContext)
  const [formData, setFormData] = useState({});
  const [formState, setFormState] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function closeModal() {
      setIsOpen(false);
    }
  

    const onSubmit = (data) =>{
      setFormData(data)
      setFormState(data)
    //   const orderDetails = {...userLogged, data, services, servicePrice}
    //   // console.log(orderDetails);
    //   fetch('http://localhost:4050/addUsersOrder', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(orderDetails)
    // })
    // .then(res => res.json())
    // .then(success => {
    //     console.log(success);
    // })
    }


    return (
        <div className="">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="mt-3">Direction</h2>
        
      <section style={{ display: formState ? 'none' : 'block' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6">
                    <h5>From</h5>
                     {/* <div className="form-group">
                    <input type="datetime-local" className="form-control"  placeholder="Select Time"  {...register("time", { required: true })} />
                    {errors.time && <span className="text-danger">This field is required</span>}
                    </div> */}
                    <div className="form-group">
                    <input type="text" className="form-control"  value={userLogged.name} placeholder="Your Name" {...register("name", { required: true, maxLength: 80 })} />
                    {errors.name && <span className="text-danger">This field is required</span>} 
                    </div>
                    <div className="form-group">
                    <input type="email" placeholder="Email" value={userLogged.email}  className="form-control"  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"placeholder="Mobile Number" {...register("mobile", { required: true })} />
                    {errors.mobile && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="row form-group">
                        <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Country" {...register("country", { required: true })} />
                        {errors.country && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Postal Code" {...register("postalCode", { required: true })} />
                        {errors.postalCode && <span className="text-danger">This field is required</span>}
                        </div>
                    </div> 
                    <div className="row form-group">
                        <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="City" {...register("city", { required: true })} />
                        {errors.city && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="State" {...register("state", { required: false })} />
                        </div>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"   placeholder="Address" {...register("address", { required: true, maxLength: 90 })} />
                    {errors.name && <span className="text-danger">This field is required</span>} 
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"   placeholder="Address-2" {...register("address2", { required:false, maxLength: 90 })} />
                    </div>
                   
                </div>
                <div className="col-md-6">
                    <h5>To</h5>
                <div className="form-group">
                    <input type="text" className="form-control"   placeholder="Your Name" {...register("nameTo", { required: true, maxLength: 80 })} />
                    {errors.nameTo && <span className="text-danger">This field is required</span>} 
                    </div>
                    <div className="form-group">
                    <input type="email" placeholder="Email" className="form-control"  {...register("emailTo", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.emailTo && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"placeholder="Mobile Number" {...register("mobileTo", { required: true })} />
                    {errors.mobileTo && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="row form-group">
                        <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Country" {...register("countryTo", { required: true })} />
                        {errors.countryTo && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Postal Code" {...register("postalCodeTo", { required: true })} />
                        {errors.postalCodeTo && <span className="text-danger">This field is required</span>}
                        </div>
                    </div> 
                    <div className="row form-group">
                        <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="City" {...register("cityTo", { required: true })} />
                        {errors.cityTo && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="State" {...register("stateTo", { required: false })} />
                        </div>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"   placeholder="Address" {...register("addressTo", { required: true, maxLength: 90 })} />
                    {errors.addressTo && <span className="text-danger">This field is required</span>} 
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"   placeholder="Address-2" {...register("address2To", { required:false, maxLength: 90 })} />
                    </div>
                </div>
                <div className="mt-3  d-flex justify-content-between">
                    <button className="btn btn-danger"onClick={closeModal}>close</button>
                    <input className="btn all-btn " type="submit" />
                    
                    </div>
            </div>
        </form>
      </section>

          <section style={{ display: formState ? 'block' : 'none' }}>
              <Checkout services={services} servicePrice={servicePrice} formData={formData} closeModal={closeModal}></Checkout>
          </section>
        
      </Modal>
        </div>
    );
};

export default BookingForm;