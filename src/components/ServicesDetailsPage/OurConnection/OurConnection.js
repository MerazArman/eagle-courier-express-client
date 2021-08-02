import React from 'react';
import mapImg from '../../../images/20945965.jpg'
const OurConnection = () => {
    return (
        <section style={{border: ''}} className="mt-3 pt-3">
            <div className="row  align-items-center">
                <h5 className="text-center"> CONNECTION </h5>
            <div className="col-md-6 pl-5">
                <p className="text-center lh-1"> <small> Our New Projects</small> </p>
                 <div className=" mx-auto"  style={{borderBottom: '3px solid #01D28E', borderRadius: '2px',width: '90px'}}>  </div>
                  <h3>Whatever your need, we guarantee the fastest service all over the country</h3>
                    <p>Eagle Courier Express provides logistics support in all 64 districts and 490+ sub districts across Bangladesh</p>
                    <div className="text-center">
                    <button className="btn all-btn ">Check Our Coverage Aria</button>
                    </div>
                </div>
                <div className="col-md-6">
                        <img src={mapImg} className="img-fluid p-5"alt="" />
                </div>
            </div>
        </section>
    );
};

export default OurConnection;