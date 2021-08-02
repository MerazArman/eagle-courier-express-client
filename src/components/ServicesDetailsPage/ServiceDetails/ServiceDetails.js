import React from 'react';
import detailsPic from '../../../images/2008.i518.020.delivery design concept.jpg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServiceDetails = () => {


    useEffect(() => {
        AOS.init({
            duration:2000,
            offset: 160,
            once: false,
            easing: 'ease',
        })
    },[])

    const { serviceKey } = useParams()
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch(`https://calm-hollows-51020.herokuapp.com/showAllServices/${serviceKey}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data, data.prices);
                setServices(data)

            })
    }, [serviceKey])


    return (
        <section style={{ border: '' }}>
            <div className="row  align-items-center ">
                <div className="col-md-6">
                    <img src={detailsPic} className="img-fluid p-5" alt="" />
                </div>

                <div className="col-md-6"  data-aos="fade-right">
                    <h6 className="text-center text-muted"> <small> YOUR SELECTED SERVICE </small> </h6>
                    <div className=" mx-auto"  style={{borderBottom: '3px solid #01D28E', borderRadius: '2px',width: '90px'}}>  </div>
                    <h3 className="text-center"> {services.title} Service</h3>
                    <p className="pr-5"> <span >  Description </span> : <br />
                        {services.description}
                    </p>
                    <p className="pr-5 lh-1 ">
                        <span > Service Category </span>:    {services.category}
                    </p>
                    <p className="pr-5 lh-1">
                        <span > Service Type </span>:    {services.type}
                    </p>
                    <div className="text-center">
                        <button className="btn all-btn">Below Your Price List     <div className=" text-center"><HiOutlineArrowNarrowDown></HiOutlineArrowNarrowDown> </div></button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;