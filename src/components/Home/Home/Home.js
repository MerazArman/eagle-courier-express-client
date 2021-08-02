import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import TopService from '../TopService/TopService';



const Home = () => {
    return (
        <main style={{border: ''}} className="container-fluid">
            <Header></Header>
            <ChooseUs></ChooseUs>
            <Service></Service>
            <About></About>
            <TopService></TopService>
            <Contact></Contact>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </main>
    );
};

export default Home;