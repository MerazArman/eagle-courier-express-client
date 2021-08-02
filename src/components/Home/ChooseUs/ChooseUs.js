import React from 'react';
import WhyChooseUsCard from './WhyChooseUsCard';
import './ChooseUs.css';
import { Ri24HoursFill} from 'react-icons/ri';
import {  AiOutlineHistory} from 'react-icons/ai';
import {  GiSmartphone} from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const chooseData = [
    {
        key: '1a',
        title: '24/7 Services Provide',
        description:'Our company is reliable, and our work is trusted. We provide worry-free service .',
        img: <Ri24HoursFill></Ri24HoursFill>,
        background:'dark'
    },
    {
        key: '2a',
        title: 'Quick Delivery Process',
        description:'Our company is reliable, and our work is trusted. We provide worry-free service .',
        img:<AiOutlineHistory></AiOutlineHistory>,
        background:'primary'
    },
    {
        key: '4a',
        title: 'Online Payment Service',
        description:'Our company is reliable, and our work is trusted. We provide worry-free service .',
        img:<GiSmartphone></GiSmartphone>,
        background:'dark'
    }
]

const ChooseUs = () => {

    useEffect(() => {
        AOS.init({
            duration:1000,
            offset: 140,
            once: false,
            easing: 'ease',
        })
    },[])

    return (
        <section  className="choose-us-body mt-3 pt-3">
           <div className="container" >
           <div className="text-center pb-4" >
                <h3 data-aos="fade-right">Why Choose Us</h3>
                <p  data-aos="fade-left">Fastest Delivery and Courier service with Best Price!</p>
            </div>
            <div className="row mb-3 pb-5" data-aos="fade-up" >
                {
                    chooseData.map(bestInfo => <WhyChooseUsCard bestInfo={bestInfo} key={bestInfo.key}></WhyChooseUsCard>)
                }
            </div>
           </div>
        </section>
    );
};

export default ChooseUs;