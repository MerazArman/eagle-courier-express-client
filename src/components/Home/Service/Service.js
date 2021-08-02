import React, { useEffect, useState } from 'react';
import ServicesList from './ServicesList';
import './services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Service = () => {

    const [servicesData, setServicesData] = useState([]);

    useEffect(() =>{
        fetch(`https://calm-hollows-51020.herokuapp.com/showAllServices`)
        .then(res => res.json())
        .then(data => setServicesData(data))
    },[])


    useEffect(() => {
        AOS.init({
            duration:1000,
            offset: 160,
            once: false,
            easing: 'ease',
        })
    },[])

    return (
        <section  id="service"  className="mt-3 pt-3">
            
        <div className="container service-container">
        <div className="text-center pb-4" data-aos="fade-right">
             <h5 >Our Services</h5>
             <div className="testimonial-head mx-auto"></div>
             <h3>We Provide Various <br/> Category Delivery Services</h3>
         </div>
         <div className="row  mb-3 pb-5" >
             {
                 servicesData.map(service => <ServicesList key={service.key} service={service}></ServicesList>)
             }
         </div>
        </div>
     </section>
    );
};

export default Service;