import React from 'react';
import baner from '../../../images/2486_R0lVIERBTiA1NTEtMDU.jpg';
import baner2 from '../../../images/Project_44-09.jpg';
import baner3 from '../../../images/2486_R0lVIERBTiA1NTEtMjQ.jpg';
import './headerContent.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';





const HeaderContent = () => {

  useEffect(() => {
    AOS.init({
        duration:1500,
        offset: 150,
        once: false,
        easing: 'ease',
    })
},[])

  return (
    <div className=" ">
      <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators" >
          <button type="button" data-bs-target="#carouselExampleCaptions" style={{backgroundColor:'blue'}} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" style={{backgroundColor:'blue'}} data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" style={{backgroundColor:'blue'}} data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">

            <div className="row align-items-center ">
              <div className="col-md-6 ">
                <img src={baner} class="img-fluid" alt="..." data-aos="fade-right" />
              </div>
              <div className="col-md-5 ml-5" data-aos="fade-left">
                <h1 className="">ONLINE DELIVERY <br /> MADE EASY</h1>
                <p className="pr-4 text-start">Our company has grown into a dynamic force in transportation across the dynamic force in transportation world. </p>
                <button className="btn all-btn">BOOKING NOW</button>
              </div>
            </div>
          </div>



          <div class="carousel-item" data-bs-interval="2000">

            <div className="row align-items-center px-5">
              <div className="col-md-6 ">
              <h1 className="">WORLDWIDE <br /> LOGISTIC SERVICES</h1>
                <p className=" text-start pr-5 mt-3">Our company has grown into a dynamic force in transportation across the dynamic force in transportation world. </p>
                <button className="btn all-btn mt-3">BOOKING NOW</button>
              </div>
              <div className="col-md-6 second-slid-img">
                <img src={baner2} class="img-fluid" alt="..." />
              </div>
            </div>

          </div>


          <div class="carousel-item" data-bs-interval="3000">
            
          <div className="row align-items-center px-5">
              <div className="col-md-6 ">
                <h1 className="">WORLDWIDE <br /> COURIER SERVICES</h1>
                <p className=" text-start pr-5 mt-3">Our company has grown into a dynamic force in transportation across the dynamic force in transportation world. </p>
                <button className="btn all-btn mt-3">REGISTER FOR BOOKING</button>
              </div>
              <div className="col-md-6">
                <img src={baner3} class="img-fluid" alt="..." />
              </div>
            </div>

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
          <span class="carousel-control-prev-icon" aria-hidden="true" >  </span>
          <span class="visually-hidden" >Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderContent;