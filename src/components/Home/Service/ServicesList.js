import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ServicesList = ({service}) => {

    useEffect(() => {
        AOS.init({
            duration:1500,
            offset: 160,
            once: false,
            easing: 'ease',
        })
    },[])

    // console.log(service);
    const {title, description, img, key} = service;
    return (
        <div className=" col-lg-4 col-md-6 col-12 mt-5 text-center ">
        <div className="card  service-card " data-aos="fade-up">
        <img src={img} className="w-25 card-img-top mx-auto pt-3" alt="" />
        <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="text-muted"> {description} </p>
            <Link to={`/serviceDetailsPage/${key}`}>
            <button className="btn all-btn"> Read More <BsArrowRight></BsArrowRight> </button>
            </Link>
            
        </div>
        </div>
    </div>
    );
};

export default ServicesList;