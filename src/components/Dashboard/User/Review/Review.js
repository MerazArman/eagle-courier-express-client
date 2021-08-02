import React, { useState } from 'react';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';
import reviewImg from '../../../../images/5385893.jpg'

const Review = () => {

    const [newReview, setNewReview] = useState({});
    const reviewFormValidation = (e) =>{
        console.log(e.target.value, e.target.name);
        const newInfo = {...newReview}
        newInfo[e.target.name] = e.target.value;
        setNewReview(newInfo);
    }
    const reviewSubmitHandler = (e) => {

        fetch(`https://calm-hollows-51020.herokuapp.com/addNewReview`, {
            method: 'POST',
            headers:{ 'content-type': 'application/json'},
            body:JSON.stringify(newReview)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        e.preventDefault();
    }

    console.log(newReview);

    return (
        <section className="" style={{border: ''}} >
            <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar>


            <div className="container" style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '', boxShadow: '' }}>
                    <div className="row">
                        <div className="col-md-5 my-auto">
                            <img src={reviewImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-7">
                        <form action="" onSubmit={reviewSubmitHandler} style={{border: ''}} className=" p-5" >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                    <input type="text" class="form-control" name="reviewName" onBlur={reviewFormValidation} placeholder="" required />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Company's name/Destination</label>
                    <input type="text" class="form-control" name ="work" placeholder="" onBlur={reviewFormValidation} required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"> Description </label>
                    <textarea class="form-control" name="comment" rows="3" onBlur={reviewFormValidation} required></textarea>
                </div>
                <div>
                    <input className="btn all-btn" type="submit" value="Submit" />
                </div>
            </form>
                        </div>
                    </div>
            </div>
            
        </section>
    );
};

export default Review;