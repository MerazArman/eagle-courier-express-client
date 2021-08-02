import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import OurConnection from '../OurConnection/OurConnection';
import PricesType from '../PricesType/PricesType';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const ServicesDetailsPage = () => {
    return (
        <main style={{border: ''}} className="container-fluid">
            <Navbar></Navbar>
            <ServiceDetails></ServiceDetails>
            <PricesType></PricesType>
            <OurConnection></OurConnection>
            <Footer></Footer>
        </main>
    );
};

export default ServicesDetailsPage;