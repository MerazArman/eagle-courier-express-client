import React, { useEffect, useState } from 'react';
// import fakePrice from '../../../ServicesDetailsPage/PricesType/fakePrice';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Checkbox } from '@material-ui/core';
// import Parcel from './Parcel';
// import { useForm } from 'react-hook-form';

// import { useContext } from 'react';
// import { OrdersStatus, UserContext } from '../../../../App';



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});




const AllOrderList = () => {

    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://calm-hollows-51020.herokuapp.com/showAllOrders`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data)

            })
    }, []);

    // const statusChange = () =>{
    //     const orders = allOrders.map(order => order._id)
    //     fetch(`http://localhost:4050/updateStatus/:${orders}`,)
    // }


    //   const [status, setStatus] = useState('Review');
    //   const [statusType, setStatusType] = useContext(OrdersStatus)
            // fetch(`http://localhost:4050/updateStatus/:${orders}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(selectStatus)
        // })
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log('update');
        //     })

        const [status, setStatus] = useState('');
        const statusInputHandle = (e) =>{
            setStatus(e.target.value)
            console.log(status);
        }

    const handleStatusChange = (id) => {
        //  fetch(`http://localhost:4050/updateStatus/${id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(status)
        // })
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log('update', result);
        //     })
        console.log(id, 'update btn not working');

    }


    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <main style={{}} className="">
            <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar>


            <Paper className={`${classes.root} container responsive-dashboard`} style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '', boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)' }}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        inputProps={{ 'aria-label': 'select all desserts' }}
                                    />
                                </TableCell>
                                <TableCell align="center">Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell>Service</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Day</TableCell>
                                <TableCell>Size</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Payment</TableCell>
                                <TableCell> Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allOrders.map(orders =>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                        />
                                    </TableCell>
                                    <TableCell>{orders._id}</TableCell>
                                    <TableCell>{orders.name} </TableCell>
                                    <TableCell>{orders.email}</TableCell>
                                    <TableCell>{orders.services.title} </TableCell>
                                    <TableCell>{orders.services.type}</TableCell>
                                    <TableCell>{orders.day} </TableCell>
                                    <TableCell>{orders.kg} </TableCell>
                                    <TableCell>{orders.price} </TableCell>
                                    <TableCell>Paypal </TableCell>
                                    <TableCell >
                                        <div className="dropdown">
                                            <button  class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {orders.services.status}
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li> <input className="dropdown-item form-control" onBlur={statusInputHandle} name="status" type="text" placeholder="Status"/> </li>
                                                <li> <button className="btn btn-info dropdown-item " style={{backgroundColor:'rgb(1, 210, 142)', color:'#fff'}} onClick={() => handleStatusChange(orders._id)}> Update </button></li>
                                               
                                            </ul>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={allOrders.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

        </main>
    );
};

export default AllOrderList;








{/* <section className="" style={{marginLeft:'20%'}}>
<div className="table-responsive">
<table className="table">
    <thead>
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Service Name</th>
            <th>Type</th>
            <th>Day</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Payment</th>
            <th>status</th>
        </tr>
    </thead>

    <tbody>
        {
            allOrders.map(orders =>
                <tr>
                    <td>{orders._id}</td>
                    <td>{orders.name} </td>
                    <td>{orders.email}</td>
                    <td>{orders.services.title} </td>
                    <td>{orders.services.type}</td>
                    <td>{orders.day} </td>
                    <td>{orders.kg} </td>
                    <td>{orders.price} </td>
                    <td>Paypal </td>
                    <td>Pending</td>
                </tr>)
        }


    </tbody>
</table>
</div>
</section> */}







{/* <div>
                                            <select name ="statusType" onChange={handleStatusChange}  style={{backgroundColor:'#98A5E5'}} className="text-light">
                                                <option value="Review" > {statusType}</option>
                                                <option value="Processing">Processing</option>
                                                <option value="Going" >Going</option>
                                                <option value="Done">Done</option>
                                            </select>
                                        </div> */}