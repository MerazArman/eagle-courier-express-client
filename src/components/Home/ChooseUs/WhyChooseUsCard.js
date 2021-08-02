import React from 'react';


const WhyChooseUsCard = ({bestInfo}) => {

    const {title, description, img, background} = bestInfo;
    return (
        <div className="col-lg-4 col-md-4 text-center ">
            <div className={`mt-3 border px-3 choose-card-${background} `}>
            <p className="fs-3 text-light">{img} </p>
            <div className="">
                <h5 className=" text-light">{title} </h5>
                <p className="text-gray fs-6"> {description} </p>
            </div>
            </div>
        </div>
    );
};

export default WhyChooseUsCard;