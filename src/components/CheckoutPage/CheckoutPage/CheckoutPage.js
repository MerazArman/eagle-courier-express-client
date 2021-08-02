import React from 'react';
import AdminNavbar from '../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../Shared/Sidebar/MainSidebar';
import PaymentOption from '../PaymentMethod/PaymentOption';

const CheckoutPage = () => {
  return (
    <main>

      <div className="mb-5 ">
        <AdminNavbar></AdminNavbar>
      </div>
      <MainSidebar ></MainSidebar>

      <div  className="container" >
             <div className="" style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '', boxShadow: '' }}>
             <PaymentOption></PaymentOption>
             </div>
      </div>
    </main>
  );
};

export default CheckoutPage;