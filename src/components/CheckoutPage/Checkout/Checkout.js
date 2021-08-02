import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Checkout = ({servicePrice, services, formData, closeModal}) => {
        // console.log(services, servicePrice, formData);
        const vat = (servicePrice.price / 10).toFixed(2)
        const total = (Number(vat) + servicePrice.price ).toFixed(2)
    
    const [userLogged, setUserLogged] = useContext(UserContext)
    const history = useHistory()
    const CheckOutDone = () =>{
        const usersOrder = {...formData, services, ...servicePrice}
        fetch('https://calm-hollows-51020.herokuapp.com/addUsersOrder',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(usersOrder)
        })
        .then(res => res.json())
        .then(data => {
        })

        history.push('/checkoutPage')
    }

    // const pageChange = ()=>{
    //     history.push('./shortOrderList')
    // }

    return (
        <section>
            <table className="table  ">
                <thead>
                    <tr>
                        <th scope="col"> Name </th>
                        <th  scope="col"> email</th>
                        <th scope="col" > Service</th>
                        <th  scope="col">Category</th>
                        <th  scope="col">Type</th>
                        <th  scope="col">weight </th>
                        <th  scope="col">Day</th>
                        <th  scope="col">Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{userLogged.name} </td>
                        <td>{userLogged.email} </td>
                        <td>{services.title} </td>
                        <td>{services.category} </td>
                        <td>{services.type} </td>
                        <td>{servicePrice.kg} </td>
                        <td>{servicePrice.day}</td>
                        <td>{servicePrice.price}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colspan="3"> TAX-VAT</td>
                        <td> {vat}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td> </td>
                        <th colspan="3" className="table-active"> SUBTOTAL</th>
                        <th className="table-active"> {total}</th>
                    </tr>
                </tbody>
            </table>
            <div className="float-end">
                <button onClick={CheckOutDone} className="btn all-btn ">Confirm Checkout</button>
            </div>
        </section>
    );
};

export default Checkout;