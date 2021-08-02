import React from 'react';
import TestimonialSlide from './TestimonialSlide';
import './testimonial.css'


const Testimonial = () => {

    return (
        <section className=" py-5 mt-3 text-light" style={{border:'', backgroundColor:'#343A40'}}>
                
                <div className="container-fluid ">
                <div className="text-center">
                    <h6 className="text-uppercase ">Testimonial</h6>
                    <div className="testimonial-head mx-auto"></div>
                    <h3 className="text-light"> Kinds Words From Clients</h3>
                </div>

                <div className="px-4">

                    <TestimonialSlide></TestimonialSlide>
                </div>
                </div>
        </section>
    );
};

export default Testimonial;