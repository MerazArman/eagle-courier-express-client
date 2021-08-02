import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakePrice from './fakePrice';
import PriceCard from './PriceCard';



const PricesType = () => {
    const {serviceKey} = useParams()
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
        <section style={{border:''}} className="mt-5">
            <div > 
                 <p className="text-center lh-1"> <small> Prices Category</small> </p>
                 <div className=" mx-auto"  style={{borderBottom: '3px solid #01D28E', borderRadius: '2px',width: '120px'}}>  </div>
                <h3 className="text-center lh-lg"> Please Set Your Preferred Price </h3>

                <div className="row">
                {/* {services.prices &&
                   services.prices.map(servicePrice => <PriceCard key={servicePrice.id} servicePrice={servicePrice} services={services} ></PriceCard>)
                   
                } */}

                {
                    fakePrice.map(servicePrice => <PriceCard key={servicePrice.id} servicePrice={servicePrice} services={services} ></PriceCard>)
                }
                </div>
            </div>
        </section>
    );
};

export default PricesType;