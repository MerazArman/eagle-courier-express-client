import React, { useState } from 'react';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';

const AddNewServices = () => {

    const [newServiceAdd, setNewServiceAdd] = useState({});
    const newServiceFormValidation = (e) => {
        console.log(e.target.value, e.target.name);
        const newInfo = {...newServiceAdd}
        newInfo[e.target.name] = e.target.value;
        setNewServiceAdd(newInfo)
    }


    const serviceAddHandler = (e) => {
        fetch(`https://calm-hollows-51020.herokuapp.com/addNewServices`, {
            method: 'POST',
            headers:{ 'content-type': 'application/json'},
            body:JSON.stringify(newServiceAdd)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Your Service has been successfully Added')
            setNewServiceAdd({ })
        })
        e.preventDefault()
    }

    return (
        <main className="">
            <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar>
            <section className="container" style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '' , boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)'}}>
                <form action="" onSubmit={serviceAddHandler} className="p-5">

                    <div className="row">

                        <div className="col-md-8">
                            <div class="mb-3">
                                {/* <label class="form-label">Email address</label> */}
                                <input type="text" name="title" class="form-control" placeholder="Service Name" onBlur={newServiceFormValidation} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="mb-3">
                                {/* <label class="form-label">Email address</label> */}
                                <input type="text" name="key" class="form-control" placeholder="Service Key" onBlur={newServiceFormValidation} />
                            </div>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-md-4">
                            <div class="mb-3">
                                {/* <label class="form-label">Email address</label> */}
                                <input type="text" name="category" class="form-control" placeholder="Service Category" onBlur={newServiceFormValidation}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="mb-3">
                                {/* <label class="form-label">Email address</label> */}
                                <input type="text" name="type" class="form-control" placeholder="Service Type" onBlur={newServiceFormValidation}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="mb-3">
                                {/* <label class="form-label">Email address</label> */}
                                <input type="file" name="img" class="form-control" placeholder="" onBlur={newServiceFormValidation}/>
                            </div>
                        </div>

                    </div>


                    <div className="row mb-3">


                        <div className="col-md-4">
                            <select class="form-select" aria-label="Default select example" name="kg" onBlur={newServiceFormValidation}>
                                <option selected>Select Weight</option>
                                <option value="Upto 2 kg">Upto 2 kg</option>
                                <option value="Upto 3 kg">Upto 3 kg</option>
                                <option value="Upto 5 kg">Upto 5 kg</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select class="form-select" aria-label="Default select example" name="price" onBlur={newServiceFormValidation}>
                                <option selected>Select Price</option>
                                <option value="432">432</option>
                                <option value="221">221</option>
                                <option value="455">455</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select class="form-select" aria-label="Default select example" name="day" onBlur={newServiceFormValidation}>
                                <option selected>Select Day</option>
                                <option >2</option>
                                <option value="4">4</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                    </div>


                    <div class="mb-3">
                        {/* <label class="form-label">Example textarea</label> */}
                        <textarea class="form-control" name="description" rows="3" placeholder="Description" onBlur={newServiceFormValidation}></textarea>
                    </div>

                    <div class="mb-3">
                                
                                <input className="btn btn-primary btn-lg" type="submit" value="SUBMIT" />
                            </div>
                </form>
            </section>
        </main>
    );
};

export default AddNewServices;