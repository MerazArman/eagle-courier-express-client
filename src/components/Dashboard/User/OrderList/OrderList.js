import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';
import Orders from './Orders';

const OrderList = () => {

    const [userLogged, setUserLogged] = useContext(UserContext)
    // const [statusType, setStatusType] = useContext(OrdersStatus)
    const [parcels, setParcels] = useState([]);
    useEffect(() => {
        fetch(`https://calm-hollows-51020.herokuapp.com/showYourOrders?email=${userLogged.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setParcels(data)
            })
    }, [])

    console.log(parcels)

    return (
        <section className="">
              <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar>
            <div className="" style={{ width: '75%', marginLeft: '20%', marginTop: '100px', border: '' }}>
           {
               parcels.length ?      <div className="row">
               {
                   parcels.map(parcel => <Orders parcel={parcel} ></Orders>)
               }
           </div>
           : <div className="row">
               <h1> You Have No Bookings</h1>
           </div>
           }

            </div>
        </section>
    );
};

export default OrderList;